---
layout: page
title: DIC-ROI-Mask-Generator
description: Machine-learning-aided spatial adaptation for reliable DIC measurement near holes, cracks, and irregular material boundaries.
img: assets/img/mask_generator.gif
card_description: Spatial adaptation that keeps full-field strain measurement inside valid material regions near complex boundaries.
importance: 3
category: "Learning-Accelerated Metrology"
github: https://github.com/YangMechanicsGroupUTAustin/DIC-ROI-mask-generator
year: 2026
status: Published
type_label: Published research method
tags: [DIC, Strain Measurement, Adaptive Meshing, Machine Learning]
paper: https://onlinelibrary.wiley.com/doi/10.1111/str.70022
---

A machine learning approach that automates region selection, mesh refinement, and subset splitting near complex sample edges for improved DIC analysis efficiency.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="lazy" path="assets/img/mask_generator.gif" title="DIC ROI Mask Generator Demo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Key Features:**

- SAM2-based automatic ROI detection from speckle images
- Adaptive mesh generation near complex boundaries
- Eliminates manual ROI definition in DIC workflows

**Publication:** [Machine Learning-Aided Spatial Adaptation for Improved DIC Analysis of Complex Geometries](https://onlinelibrary.wiley.com/doi/10.1111/str.70022), _Strain_, 2026
