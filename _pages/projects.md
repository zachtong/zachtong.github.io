---
layout: page
title: Projects
nav_title: Projects
permalink: /projects/
description: Experimental and computational mechanics spanning material characterization, inverse identification, full-field measurement, and model validation.
nav: true
nav_order: 2
display_categories:
  - Material Mechanics & Model Validation
  - Experimental Material Characterization
  - Full-Field Deformation Measurement
  - Learning-Accelerated Metrology
---

My research starts with a mechanics question: how a material deforms, how its properties can be identified, or whether
a model predicts what an experiment actually measures. Full-field imaging, finite element simulation, inverse methods,
and machine learning are the tools I use to answer it.

{% for category in page.display_categories %}
{% assign categorized_projects = site.projects | where: 'category', category | sort: 'importance' %}
<h2 class="section-heading" id="{{ category | slugify }}">{{ category }}</h2>
<ul class="project-list">
{% for project in categorized_projects %}
{% include projects.liquid project=project %}
{% endfor %}
</ul>
{% endfor %}
