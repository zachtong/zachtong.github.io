---
layout: page
title: pyALDIC-3D
description: Two-camera stereo-DIC in one desktop application — built-in calibration with a coded-target detector, metric 3D shape, and Green–Lagrange surface strain in millimetres. Published on PyPI (al-dic-3d) with a citable DOI.
img: assets/img/pyaldic3d_main_gui.png
importance: 3
category: "Full-Field Measurement & Vision"
github: https://github.com/zachtong/pyALDIC-3D
---

Stereo-DIC answers two questions at once: where a material point sits in the other camera (shape), and where it went (motion). Most tools answer both with independent subset correlations, which degrades exactly where experiments get interesting — steep gradients, discontinuities, decorrelating patterns. pyALDIC-3D runs temporal tracking through an **Augmented-Lagrangian** solver that couples the local IC-GN subproblems to a global FEM regularizer on an adaptive quadtree mesh, then triangulates to a metric, millimetre-native 3D surface. Calibration, crack handling, quality gating, 3D visualization and export are all in the box.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pyaldic3d_main_gui.png" title="pyALDIC-3D desktop application: stereo image pairs and the calibration panel on the left, the out-of-plane displacement field in millimetres on the specimen in the centre, and run controls with the per-frame validity log on the right" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The application: stereo pairs and calibration on the left, the out-of-plane displacement field W in millimetres in the centre, run controls and the per-frame validity log on the right.
</div>

**Key Features:**
- Built-in stereo calibration from chessboards, ChArUco boards, circle grids, or a self-developed coded circular target, with reprojection QC, epipolar validation, bundle adjustment and an independent known-distance check that catches a wrong scale a reprojection RMS never will
- Imports calibrations from six external formats (MATLAB/OpenCV, MatchID, MMC, DICe, OpenCorr, OpenCV-YAML)
- Metric 3D surface: displacement needs no pixel-size calibration and carries no scale ambiguity
- Surface strain in three strain types (Green–Lagrange, infinitesimal, Euler–Almansi) and three coordinate systems, with a Numba-accelerated kernel
- Crack-aware throughout: the mesh is cut at a declared barrier, so the global step never bridges the two lips and the discontinuity survives
- Every shipped displacement is re-verified by an independent correlation check, not by reading the solver's own convergence flag
- Desktop GUI (PySide6) localized in 8 languages

**Scope:** v1 supports a two-camera stereo rig. The data model is N-camera-ready, but N-camera (> 2) support is post-v1.

**Links:** [GitHub](https://github.com/zachtong/pyALDIC-3D) · [PyPI](https://pypi.org/project/al-dic-3d/) · [DOI](https://doi.org/10.5281/zenodo.21696564)
