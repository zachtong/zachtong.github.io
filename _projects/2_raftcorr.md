---
layout: page
title: RAFTcorr
description: A learning-accelerated DIC method for dense, sub-pixel displacement measurement, characterized against rigid motion, large deformation, noise, and complex specimens.
img: assets/img/raftcorr/Al_with_hole_von_Mises_strain.gif
card_description: Fast full-field displacement measurement with explicitly characterized accuracy, operating limits, and transfer to real experiments.
importance: 1
category: "Learning-Accelerated Metrology"
github: https://github.com/zachtong/RAFTcorr
featured: false
year: 2026
status: Under review
type_label: Research method
tags: [DIC, Experimental Mechanics, Dense Measurement, Machine Learning]
paper: https://www.researchsquare.com/article/rs-9452500/v1
---

RAFTcorr is the first fully open-source RAFT-based Digital Image Correlation framework, bridging deep learning and experimental mechanics for dense displacement measurement.

**Key Features:**

- Physically realistic training-data generation pipeline
- Complete training scripts and pre-trained model weights
- User-friendly GUI that eliminates manual parameter tuning
- Sub-pixel accuracy across rigid-body translation, rotation, large deformation, and complex metamaterial geometries

**Status:** Under review — preprint: [RAFTcorr: A Deep Learning Digital Image Correlation Framework with Operating-Boundary Characterization](https://www.researchsquare.com/article/rs-9452500/v1)

---

## Demo Results

### Aluminum Plate with Hole

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include video.liquid path="assets/img/raftcorr/Al_with_hole_displacement.mp4" class="img-fluid rounded z-depth-1" autoplay=true loop=true muted=true controls=true title="Displacement field" %}
        <div class="caption">Displacement field</div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include video.liquid path="assets/img/raftcorr/Al_with_hole_von_Mises_strain.mp4" class="img-fluid rounded z-depth-1" autoplay=true loop=true muted=true controls=true title="Von Mises strain field" %}
        <div class="caption">Von Mises strain field</div>
    </div>
</div>

### Cavitation Flow

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include video.liquid path="assets/img/raftcorr/cavitation_flow_displacement.mp4" class="img-fluid rounded z-depth-1" autoplay=true loop=true muted=true controls=true title="Displacement field" %}
        <div class="caption">Displacement field</div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include video.liquid path="assets/img/raftcorr/cavitation_flow_magnitude_streamline.mp4" class="img-fluid rounded z-depth-1" autoplay=true loop=true muted=true controls=true title="Velocity magnitude and streamline" %}
        <div class="caption">Velocity magnitude & streamline</div>
    </div>
</div>

### Foam Fracture

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/img/raftcorr/foam_fracture_disp.mp4" class="img-fluid rounded z-depth-1" autoplay=true loop=true muted=true controls=true title="Foam fracture displacement" %}
        <div class="caption">Displacement field during foam fracture</div>
    </div>
</div>
