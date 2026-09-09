---
layout: page
title: pyALDIC-3D
description: Two-camera stereo-DIC for metric 3D shape, displacement, and surface strain measurement with independent quality checks.
img: assets/img/pyaldic3d_main_gui.png
card_img: /assets/img/project-covers/pyaldic-3d.jpg
card_description: Experimental 3D surface kinematics for specimens undergoing out-of-plane motion, large strain, and discontinuity.
importance: 3
category: "Full-Field Deformation Measurement"
github: https://github.com/zachtong/pyALDIC-3D
year: 2026
status: Released
type_label: Stereo measurement method
tags: [Stereo DIC, Surface Strain, Calibration, Model Validation]
pypi: https://pypi.org/project/al-dic-3d/
---

Stereo-DIC answers two questions at once: where a material point sits in the other camera (shape), and where it went (motion). Most tools answer both with independent subset correlations, which degrades exactly where experiments get interesting — steep gradients, discontinuities, decorrelating patterns. pyALDIC-3D runs temporal tracking through an **Augmented-Lagrangian** solver that couples the local IC-GN subproblems to a global FEM regularizer on an adaptive quadtree mesh, then triangulates to a metric, millimetre-native 3D surface. Calibration, crack handling, quality gating, 3D visualization and export are all in the box.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="lazy" path="assets/img/pyaldic3d_main_gui.png" title="pyALDIC-3D desktop application: stereo image pairs and the calibration panel on the left, the out-of-plane displacement field in millimetres on the specimen in the centre, and run controls with the per-frame validity log on the right" class="img-fluid rounded z-depth-1" %}
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
