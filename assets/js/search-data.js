// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Experimental and computational mechanics spanning material characterization, inverse identification, full-field measurement, and model validation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed papers, preprints, conference contributions, and open research artifacts.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "Publications, software releases, presentations, and milestones.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-résumé",
          title: "Résumé",
          description: "Research engineering experience across solid mechanics, material characterization, finite element simulation, full-field measurement, and model validation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "nav-field-notes",
          title: "Field Notes",
          description: "Conferences, collaborations, lab life, outreach, and moments beyond the work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photos/";
          },
        },{id: "news-joined-orbbec-inc-in-shenzhen-as-a-computer-vision-engineer-intern-building-python-c-calibration-and-validation-tooling-for-production-3d-camera-hardware",
          title: 'Joined Orbbec Inc. in Shenzhen as a Computer Vision Engineer Intern, building Python/C++...',
          description: "",
          section: "News",},{id: "news-started-my-ph-d-in-engineering-mechanics-at-the-university-of-texas-at-austin-joining-the-yang-research-group",
          title: 'Started my Ph.D. in Engineering Mechanics at The University of Texas at Austin,...',
          description: "",
          section: "News",},{id: "news-our-paper-refraction-error-analysis-in-stereo-vision-for-system-parameters-optimization-has-been-published-in-measurement",
          title: 'Our paper Refraction Error Analysis in Stereo Vision for System Parameters Optimization has...',
          description: "",
          section: "News",},{id: "news-presented-spatiotemporally-adaptive-quadtree-mesh-staq-digital-image-correlation-at-the-2024-graduate-and-industry-networking-event-in-austin-tx",
          title: 'Presented SpatioTemporally Adaptive Quadtree Mesh (STAQ) Digital Image Correlation at the 2024 Graduate...',
          description: "",
          section: "News",},{id: "news-presented-exploring-the-interplay-of-alveolar-mechanics-and-fluid-accumulation-in-pulmonary-edema-at-the-2024-southern-sem-student-symposium-in-baton-rouge-la",
          title: 'Presented Exploring the Interplay of Alveolar Mechanics and Fluid Accumulation in Pulmonary Edema...',
          description: "",
          section: "News",},{id: "news-presented-exploring-the-rate-dependent-mechanical-behavior-of-liquid-filled-metamaterials-across-length-scales-at-the-2024-sem-annual-conference-in-vancouver-wa",
          title: 'Presented Exploring the rate-dependent mechanical behavior of liquid-filled metamaterials across length scales at...',
          description: "",
          section: "News",},{id: "news-presented-repetitive-laser-induced-cavitation-dynamics-and-damage-at-soft-matter-interfaces-at-imac-xliii-2025-in-orlando-fl",
          title: 'Presented Repetitive Laser-Induced Cavitation Dynamics and Damage at Soft Matter Interfaces at IMAC-XLIII...',
          description: "",
          section: "News",},{id: "news-our-paper-3d-stereo-adaptive-mesh-augmented-lagrangian-digital-image-correlation-has-been-published-in-experimental-mechanics",
          title: 'Our paper 3D Stereo Adaptive Mesh Augmented Lagrangian Digital Image Correlation has been...',
          description: "",
          section: "News",},{id: "news-presented-raftcorr-at-idics-2025-in-alexandria-va",
          title: 'Presented RAFTcorr at iDICs 2025 in Alexandria, VA.',
          description: "",
          section: "News",},{id: "news-shared-research-experiences-at-a-panel-discussion-at-the-texas-material-scientists-and-engineers-tmse-meeting-with-dylan-baird",
          title: 'Shared research experiences at a panel discussion at the Texas Material Scientists and...',
          description: "",
          section: "News",},{id: "news-our-paper-machine-learning-aided-spatial-adaptation-for-improved-dic-analysis-of-complex-geometries-has-been-published-in-strain",
          title: 'Our paper Machine Learning-Aided Spatial Adaptation for Improved DIC Analysis of Complex Geometries...',
          description: "",
          section: "News",},{id: "news-honored-to-contribute-to-the-idics-good-practices-guide-edition-2-thank-you-to-the-entire-gpg-team-and-especially-my-advisor-prof-jin-yang-for-the-guidance-and-opportunity",
          title: 'Honored to contribute to the iDICs Good Practices Guide (Edition 2). Thank you...',
          description: "",
          section: "News",},{id: "news-started-a-summer-r-amp-amp-d-internship-at-tokyo-electron-tel-in-austin-tx-building-fe-based-machine-learning-surrogate-models-for-advanced-packaging",
          title: 'Started a summer R&amp;amp;amp;D internship at Tokyo Electron (TEL) in Austin, TX, building...',
          description: "",
          section: "News",},{id: "news-first-author-preprint-posted-digital-volume-correlation-challenge-2-0-a-comprehensive-dataset-for-digital-volume-correlation-benchmarking-a-community-benchmark-spanning-confocal-multiphoton-microscopy-x-ray-ct-neutron-tomography-and-synthetic-volumes-the-full-dataset-is-openly-available-through-the-nist-public-data-repository",
          title: 'First-author preprint posted: Digital Volume Correlation Challenge 2.0: A Comprehensive Dataset for Digital...',
          description: "",
          section: "News",},{id: "news-will-present-raftcorr-an-open-source-deep-learning-dic-framework-for-dense-displacement-measurement-at-sem-annual-2026-in-norfolk-va",
          title: 'Will present RAFTcorr: An Open-Source, Deep Learning DIC Framework for Dense Displacement Measurement...',
          description: "",
          section: "News",},{id: "news-preprint-posted-pyaldic-a-python-implementation-of-augmented-lagrangian-digital-image-correlation-with-a-gui-adaptive-meshing-and-mask-aware-subset-splitting-arxiv-2607-22755-the-package-is-on-pypi-as-al-dic",
          title: 'Preprint posted: pyALDIC: A Python Implementation of Augmented Lagrangian Digital Image Correlation with...',
          description: "",
          section: "News",},{id: "news-preprint-posted-raft-dvc-resolution-aware-machine-learning-based-digital-volume-correlation-arxiv-2609-01876-reference-implementation-and-the-three-trained-solvers-are-on-github",
          title: 'Preprint posted: RAFT-DVC: Resolution-Aware Machine Learning-Based Digital Volume Correlation — arXiv:2609.01876. Reference implementation...',
          description: "",
          section: "News",},{id: "projects-pyaldic",
          title: 'pyALDIC',
          description: "A full-field experimental mechanics method for measuring 2D displacement and strain near large gradients, holes, cracks, and material boundaries.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/0_pyaldic/";
            },},{id: "projects-high-strain-rate-material-characterization",
          title: 'High-Strain-Rate Material Characterization',
          description: "Measuring transient, rate-dependent response and interfacial damage in soft and architected materials using laser-induced cavitation and ultra-high-speed imaging.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_high_rate_cavitation/";
            },},{id: "projects-3d-stereo-aldic",
          title: '3D-Stereo-ALDIC',
          description: "A stereo-DIC method for experimentally measuring 3D shape, displacement, and surface strain across complex geometry and large deformation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_3d_stereo_aldic/";
            },},{id: "projects-raftcorr",
          title: 'RAFTcorr',
          description: "A learning-accelerated DIC method for dense, sub-pixel displacement measurement, characterized against rigid motion, large deformation, noise, and complex specimens.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_raftcorr/";
            },},{id: "projects-dic-roi-mask-generator",
          title: 'DIC-ROI-Mask-Generator',
          description: "Machine-learning-aided spatial adaptation for reliable DIC measurement near holes, cracks, and irregular material boundaries.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_mask_generator/";
            },},{id: "projects-bubble-radius-fitting",
          title: 'Bubble-Radius-Fitting',
          description: "Image-based extraction of transient bubble radius from ultra-high-speed cavitation experiments in soft and architected materials.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_bubble_fitting/";
            },},{id: "projects-pyaldvc",
          title: 'pyALDVC',
          description: "Full-field 3D displacement and strain measurement from volumetric experiments including micro-CT, confocal microscopy, MRI, and OCT.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_pyaldvc/";
            },},{id: "projects-pyaldic-3d",
          title: 'pyALDIC-3D',
          description: "Two-camera stereo-DIC for metric 3D shape, displacement, and surface strain measurement with independent quality checks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_pyaldic_3d/";
            },},{id: "projects-raft-dvc",
          title: 'RAFT-DVC',
          description: "Resolution-aware, learning-accelerated DVC for measuring three-dimensional displacement fields in particle-labeled volumes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_raft_dvc/";
            },},{id: "projects-heterogeneous-material-property-identification",
          title: 'Heterogeneous Material Property Identification',
          description: "Recovering spatially varying constitutive properties and interface geometry from full-field experimental measurements and finite element models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_heterogeneous_property_identification/";
            },},{id: "projects-thermo-mechanical-package-modeling-amp-validation",
          title: 'Thermo-Mechanical Package Modeling &amp;amp; Validation',
          description: "Finite element analysis of layered, multi-material electronic packages, with full-field experiments used to quantify and reduce simulation–test discrepancy.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_thermomechanical_package_validation/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Zixiang_Tong_Resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%61%63%68%74%6F%6E%67@%75%74%65%78%61%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=6xlr4lsAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zachtong", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zixiang-tong-0606ba29a", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
