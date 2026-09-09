---
layout: page
permalink: /publications/
title: Publications
nav_title: Publications
description: Peer-reviewed papers, preprints, conference contributions, and open research artifacts.
nav: true
nav_order: 3
---

<div class="publications-intro">
  <p class="page-lede">
    Research spanning solid and experimental mechanics, material characterization, full-field deformation measurement,
    inverse identification, and learning-accelerated metrology.
  </p>
  <div class="publication-legend" aria-label="Publication resources">
    <span>Paper</span><span>Code</span><span>Data</span><span>BibTeX</span>
  </div>
</div>

<div class="publication-tools">
  <label for="bibsearch">Filter by title, author, venue, or year</label>
  {% include bib_search.liquid %}
</div>

<div class="publications">
  {% bibliography %}
</div>
