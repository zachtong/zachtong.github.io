---
layout: page
title: pyALDIC
description: A full-field experimental mechanics method for measuring 2D displacement and strain near large gradients, holes, cracks, and material boundaries.
img: assets/img/pyaldic_demo.gif
card_img: /assets/img/project-covers/pyaldic.jpg
card_description: Adaptive, regularized DIC for measuring displacement and strain near complex geometry, discontinuities, and large deformation.
importance: 1
category: "Full-Field Deformation Measurement"
github: https://github.com/zachtong/pyALDIC
featured: false
year: 2026
status: Released
type_label: Measurement method
tags: [DIC, Experimental Mechanics, FEM, Adaptive Meshing]
pypi: https://pypi.org/project/al-dic/
paper: https://arxiv.org/abs/2607.22755
---

pyALDIC is an open-source **Augmented-Lagrangian Digital Image Correlation** package for high-accuracy, full-field displacement and strain measurement. It couples local IC-GN subset solves with a global FEM regularizer via ADMM, producing smoother, more robust fields under large deformation, discontinuities, and noisy images — while keeping sub-pixel precision.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="lazy" path="assets/img/pyaldic_demo.gif" title="pyALDIC Demo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Key Features:**

- Augmented-Lagrangian (ADMM) global–local optimization with adaptive mesh refinement
- Built-in cross-platform desktop GUI (PySide6), localized in 8 languages
- Packaged on PyPI (`pip install al-dic`) with versioned releases and a citable DOI
- Sub-pixel accuracy under large deformation, discontinuities, and image noise

**Links:** [GitHub](https://github.com/zachtong/pyALDIC) · [PyPI](https://pypi.org/project/al-dic/) · [arXiv](https://arxiv.org/abs/2607.22755) · [DOI](https://doi.org/10.5281/zenodo.19521061)
