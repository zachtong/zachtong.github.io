---
layout: page
title: Research
nav_title: Research
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

<div class="work-index">
  <div class="work-index__intro">
    <p>
      My research starts with a mechanics question: how a material deforms, how its properties can be identified, or whether
      a model predicts what an experiment actually measures. Full-field imaging, finite element simulation, inverse methods,
      and machine learning are the tools I use to answer it.
    </p>
  </div>

  <nav class="filter-nav" aria-label="Project categories">
    <span>Explore by area</span>
    {% for category in page.display_categories %}
      <a href="#{{ category | slugify }}">{{ category }}</a>
    {% endfor %}
  </nav>

{% for category in page.display_categories %}
{% assign categorized_projects = site.projects | where: 'category', category | sort: 'importance' %}
<section class="work-category" id="{{ category | slugify }}">
<div class="work-category__heading">
<p class="eyebrow">0{{ forloop.index }}</p>
<h2>{{ category }}</h2>
<p>{{ categorized_projects | size }} research {% if categorized_projects.size == 1 %}project{% else %}projects{% endif %}</p>
</div>
<div class="work-grid">
{% for project in categorized_projects %}
{% include projects.liquid project=project %}
{% endfor %}
</div>
</section>
{% endfor %}
</div>
