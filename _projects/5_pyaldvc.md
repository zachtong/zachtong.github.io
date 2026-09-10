---
layout: page
title: pyALDVC
description: Full-field 3D displacement and strain measurement from volumetric experiments including micro-CT, confocal microscopy, MRI, and OCT.
img: assets/img/pyaldvc_indentation_orbit.gif
card_description: Volumetric deformation measurement that preserves steep gradients and discontinuities in noisy experimental scans.
importance: 2
category: "Full-Field Deformation Measurement"
github: https://github.com/zachtong/pyALDVC
featured: false
year: 2026
status: Released
type_label: Volumetric measurement method
tags: [DVC, 3D Strain, Micro-CT, Model Validation]
pypi: https://pypi.org/project/al-dvc/
---

pyALDVC is the volumetric sibling of [pyALDIC](https://github.com/zachtong/pyALDIC): a desktop application that turns a sequence of 3D scans into displacement and strain fields. Local subsets are coupled to a global smoothness step, so steep gradients, boundaries and noisy scans stay sub-voxel accurate where subset-only DVC breaks down.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="lazy" path="assets/img/pyaldvc_indentation_orbit.gif" title="pyALDVC 3D viewer orbiting the deformed lattice of a hydrogel indentation micro-CT scan, with displacement arrows over the out-of-plane displacement field" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Hydrogel indentation, micro-CT, 306 x 1024 x 1024 voxels: the deformed lattice with displacement arrows, orbited in the built-in 3D viewer.
</div>

**Key Features:**

- Augmented-Lagrangian DVC with GPU acceleration — a 1024 x 1024 x 306 micro-CT scan with 79,200 nodes solves in 23 s on an NVIDIA GPU, 3.6 min on a 24-core CPU
- Cracks and holes stay sharp: a subset meeting a boundary keeps only the material on its own side, and the smoothing never crosses it, so a displacement jump survives instead of being averaged away
- Texture analysis measures the scan and recommends the subset size and step, rather than leaving it to trial and error
- Masks drawn directly on the slices, with auto-segmentation and per-frame masks
- Built-in 3D viewer: field slices, deformed lattice, displacement arrows, and GIF / MP4 recording
- Strain post-processing in its own window: four gradient methods and four strain measures, recomputed on demand
- Reads TIFF, MATLAB, NumPy, HDF5, NIfTI, NRRD and DICOM; exports NumPy, MATLAB, CSV, ParaView and a PDF report
- Desktop GUI (PySide6) localized in 7 languages, plus a command line and a portable Windows bundle

**Links:** [GitHub](https://github.com/zachtong/pyALDVC) · [PyPI](https://pypi.org/project/al-dvc/)
