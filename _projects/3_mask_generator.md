---
layout: page
title: DIC-ROI-Mask-Generator
description: Machine learning-based automated ROI masking and mesh refinement for DIC analysis of complex sample geometries.
img: assets/img/mask_generator.gif
importance: 3
category: DIC/DVC Tools
github: https://github.com/YangMechanicsGroupUTAustin/DIC-ROI-mask-generator
---

A machine learning approach that automates region selection, mesh refinement, and subset splitting near complex sample edges for improved DIC analysis efficiency.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mask_generator.gif" title="DIC ROI Mask Generator Demo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Key Features:**
- SAM2-based automatic ROI detection from speckle images
- Adaptive mesh generation near complex boundaries
- Eliminates manual ROI definition in DIC workflows

**Publication:** [Machine Learning-Aided Spatial Adaptation for Improved DIC Analysis of Complex Geometries](https://onlinelibrary.wiley.com/doi/10.1111/str.70022), *Strain*, 2026
