---
layout: about
title: About
nav_title: Home
permalink: /
description: Zixiang Tong is an experimental mechanician and PhD candidate at UT Austin working across solid mechanics, material characterization, full-field measurement, finite element simulation, and model validation.
announcements:
  enabled: true
  scrollable: false
  limit: 5
---

## About Me

I am a Ph.D. candidate in **Engineering Mechanics** at The University of Texas at Austin, advised by
[Dr. Jin Yang](https://sites.utexas.edu/yang/). I combine **solid mechanics**, **full-field experiments**, and
**finite element simulation** to characterize material behavior and validate predictive models, using
**machine learning** where it improves resolution, inference, or speed.

I work across the full mechanics loop, from loading a specimen to measuring its response, identifying its
properties, and testing the model against what the experiment actually shows.

I am also a **research software developer**. I build and maintain open-source Python packages for
full-field deformation measurement, from classical augmented-Lagrangian DIC and DVC to deep-learning
solvers, released on PyPI with desktop GUIs, scriptable APIs, and documentation.

I am graduating in 2027 and exploring research engineering and scientific software roles in solid
mechanics, material characterization, simulation, and model validation.

## What I Do

- **Measure:** DIC, stereo-DIC, and DVC, high-speed imaging, instrumented testing
- **Model:** solid and continuum mechanics, finite element analysis, thermo-mechanical systems
- **Machine learning:** deep-learning DIC and DVC solvers, ML-aided spatial adaptation for complex geometries,
  FE-based surrogate models, synthetic training data and synthetic-to-experimental transfer
- **Identify and validate:** inverse identification, simulation–test correlation
- **Research software:** Python and PyTorch, Numba-accelerated solvers, PySide6 desktop GUIs, automated tests and CI,
  PyPI and Zenodo releases

## Open-Source Software

- **[pyALDIC](https://github.com/zachtong/pyALDIC)**: augmented-Lagrangian DIC in Python with a desktop GUI
  and adaptive quadtree meshes (`pip install al-dic`). Recommended in two UT Austin undergraduate courses.
- **[pyALDVC](https://github.com/zachtong/pyALDVC)**: the volumetric (DVC) counterpart for micro-CT,
  confocal, and other 3D image data (`pip install al-dvc`).
- **[pyALDIC-3D](https://github.com/zachtong/pyALDIC-3D)**: stereo and multi-camera DIC for 3D shape,
  displacement, and surface strain (`pip install al-dic-3d`).
- **[RAFTcorr](https://github.com/zachtong/RAFTcorr)**: a deep-learning DIC framework with a training-data
  pipeline, pre-trained weights, and a GUI.
- **[RAFT-DVC](https://github.com/zachtong/RAFT-DVC)**: resolution-aware, learning-based DVC.

In the wider DIC community, I am a co-author of the iDICs
[Good Practices Guide for DIC](https://doi.org/10.32720/idics/gpg.ed2) (2nd edition) and lead author of the
[DVC Challenge 2.0](https://doi.org/10.21203/rs.3.rs-9683321/v1) benchmark dataset. More tools are on
[GitHub](https://github.com/zachtong) and the [Projects]({{ '/projects/' | relative_url }}) page.
