# SPHEREx Deep Space Explorer

**Interactive infrared sky exploration and multi-epoch image comparison**  
*NASA Space Apps Challenge 2026 · Team Interstellar Consortium*

[**Explore the live website**](https://delightful-torrone-170dd9.netlify.app/)

## Project overview

SPHEREx Deep Space Explorer is an independent, browser-based astronomy research prototype inspired by NASA's SPHEREx mission and the search for distant Solar System objects. It combines a navigable 3D celestial map, coordinate-based archive exploration, real infrared observation visualizations, and a blink comparator in an accessible interface.

Our goal is to make astronomical survey data easier for students, citizen scientists, and curious explorers to investigate, not to claim the discovery of Planet X.

## Features

- **Interactive 3D sky map:** Explore celestial coordinates and inspect featured objects in a responsive, immersive interface.
- **Five featured targets:** Barnard's Star, Epsilon Indi B, WISE 0855, RW Aurigae, and R Draconis.
- **Real SPHEREx image comparisons:** View prepared multi-date infrared fields, including M101, Epsilon Indi B, and WISE 0855 selections.
- **Blink comparator:** Compare observation epochs using side-by-side images, blinking, playback controls, and synchronized viewing adjustments.
- **Archive coordinate search:** Investigate SPHEREx observation coverage using right ascension, declination, and available archive metadata.
- **Infrared measurements:** Explore wavelength and flux information where supported by available data.
- **Candidate exploration:** Browse modeled/illustrative catalog information, clearly distinguished from authentic measurements.

## Scientific integrity

This project combines **authentic SPHEREx archive observations** with **modeled educational demonstrations**. They are labeled separately.

- A real observed sky field does **not** automatically establish a detection of the named target.
- Validated two-date comparison fields are available for selected observations; **Barnard's Star, RW Aurigae, and R Draconis do not yet have validated prepared pairs** in this release.
- The app does **not** claim confirmed Planet X detections, statistically significant object motion, or complete measured 102-band spectra from individual images.
- Archive search results and availability depend on external IRSA services and network conditions.

## Data sources and acknowledgments

- [NASA SPHEREx mission](https://science.nasa.gov/mission/spherex/)
- [Caltech/IPAC Infrared Science Archive (IRSA)](https://irsa.ipac.caltech.edu/Missions/spherex.html)
- [SPHEREx archive documentation](https://caltech-ipac.github.io/spherex-archive-documentation/)
- [SPHEREx Quick Release 2 data](https://doi.org/10.26131/IRSA652)
- SIMBAD/CDS reference astrometry and AllWISE catalog overlays where indicated in the application

SPHEREx data credit: **NASA/JPL-Caltech; Caltech/IPAC IRSA**. Third-party datasets, imagery, and software remain subject to their own licenses and attribution requirements.

## Technology

React · TypeScript · Three.js / WebGL · Vite · Netlify · Python-based scientific preparation tools

## Deployment and source-code note

The **v2.2.0 Netlify release ZIP** is a *compiled website build*. It contains deployable HTML, JavaScript, CSS, observation assets, and routing configuration; it is **not** the editable React/TypeScript source repository.

To deploy that release manually, extract the ZIP and upload the **contents of the inner site folder** to Netlify. Do not upload the ZIP as though it were a source-code repository. If the editable source is added to GitHub separately, include its `package.json`, lockfile, `src/`, build configuration, and the appropriate source-level setup instructions.

## Team — Interstellar Consortium

- **Ms. Amey** — Team Lead, Candidate Research & Live Pitch
- **Mr. Irfan** — Frontend Engineering & Web UI/UX Architecture
- **Ms. Noor** — Frontend Engineering & 3D Interactive Map
- **Mr. Pradip** — Data Pipeline & Coordinate Verification
- **Ms. Arpita** — SPHEREx Methodology & Presentation Script
- **Ms. Ekaspreet** — Presentation Design & Pitch Deck Architecture

## License and disclaimer

Original application code is documented under the MIT License in the supplied project materials. **That license does not cover external datasets, imagery, or third-party assets.** Confirm contributor approval and redistribution rights before publishing the full owner dataset or assets in a public repository.

This is an independent educational/research prototype, **not an official NASA application or an endorsed Planet X discovery**.
