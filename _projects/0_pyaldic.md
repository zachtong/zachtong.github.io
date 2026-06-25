---
layout: page
title: pyALDIC
description: Open-source Python package for full-field 2D displacement and strain measurement — Augmented-Lagrangian (ADMM) global–local optimization, adaptive mesh refinement, and a desktop GUI. Published on PyPI (al-dic) with a citable DOI.
img: assets/img/pyaldic_demo.gif
importance: 1
category: "Full-Field Measurement & Vision"
github: https://github.com/zachtong/pyALDIC
---

pyALDIC is an open-source **Augmented-Lagrangian Digital Image Correlation** package for high-accuracy, full-field displacement and strain measurement. It couples local IC-GN subset solves with a global FEM regularizer via ADMM, producing smoother, more robust fields under large deformation, discontinuities, and noisy images — while keeping sub-pixel precision.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pyaldic_demo.gif" title="pyALDIC Demo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Key Features:**
- Augmented-Lagrangian (ADMM) global–local optimization with adaptive mesh refinement
- Built-in cross-platform desktop GUI (PySide6), localized in 8 languages
- Packaged on PyPI (`pip install al-dic`) with versioned releases and a citable DOI
- Sub-pixel accuracy under large deformation, discontinuities, and image noise

**Links:** [GitHub](https://github.com/zachtong/pyALDIC) · [PyPI](https://pypi.org/project/al-dic/) · [DOI](https://doi.org/10.5281/zenodo.19521061)
