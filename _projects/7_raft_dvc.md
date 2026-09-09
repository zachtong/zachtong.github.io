---
layout: page
title: RAFT-DVC
description: Resolution-aware learned digital volume correlation — a 3D adaptation of the RAFT optical-flow architecture, released as three resolution arms with an explicit rule for choosing between them.
importance: 2
category: "Deep Learning for Measurement"
github: https://github.com/zachtong/RAFT-DVC
---

RAFT-DVC adapts the RAFT optical-flow architecture to digital volume correlation for particle-labeled volumes. The displacement field is solved on a coarse feature grid at 1/s of the input resolution and interpolated back to the voxel grid, so the downsampling factor `s` sets both the cost and the finest resolvable feature. Rather than ship one network, three *arms* are trained at `s = 2, 4, 8`, each matched to a particle size and a displacement band, together with a stated rule for choosing between them.

| arm | downsample `s` | particle radius | displacement band | training volume |
|-----|----------------|-----------------|-------------------|-----------------|
| s2  | 2              | 2 voxel         | 2–4 voxel         | 32³             |
| s4  | 4              | 4 voxel         | 4–8 voxel         | 64³             |
| s8  | 8              | 8 voxel         | 8–16 voxel        | 128³            |

All three share one architecture and one optimizer schedule, so differences between them come from the input scale alone.

**Choosing an arm.** Two constraints decide it. *Resolvability*: the feature grid must still see the particles, which requires a particle diameter of at least about `s` voxel. *Reach*: the correlation pyramid searches roughly `8s` voxel, with measured collapse points near 6, 13 and 16 voxel for s2, s4 and s8. Deploy the smallest `s` that resolves the particles and still reaches the expected displacement; within its band an arm's error scales as roughly `0.017 x s` voxel.

**What is released:**
- Reference implementation and the three trained solvers
- The synthetic-volume generator, which reproduces the benchmark volumes deterministically from the parameters tabulated in the paper
- Headless MATLAB drivers for the classical baselines (local subset DVC, ALDVC, FE-global DVC) used for comparison
- A correlation-sampler impulse test that catches the axis-transposition defect which passes ordinary shape checks and still trains

**Links:** [GitHub](https://github.com/zachtong/RAFT-DVC) · [arXiv](https://arxiv.org/abs/2609.01876) · [DOI](https://doi.org/10.5281/zenodo.21578266)
