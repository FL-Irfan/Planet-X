# Data provenance and rights — SPHEREx Explorer 2.1.0

Reviewed 10 November 2026. Original code licensing does not relicense datasets or third-party media.

## Real observation products

All five active selections contain SPHEREx QR2 Level 2 calibrated IMAGE values. Nine distinct FITS exposures produce eleven prepared frame files because some exposures appear in more than one fixed grid. Every source has an exact archive URL, ID, UTC time, processing version and SHA-256 in the source config and active manifests. Matching CWAVE/CBAND calibration is pinned; the recommended QR3 D2 ePSF is used for diagnostics on QR2 data following IRSA guidance.

- NASA/JPL-Caltech SPHEREx, Caltech/IPAC IRSA QR2: https://doi.org/10.26131/IRSA652
- QR3 archive metadata: https://doi.org/10.26131/IRSA662
- Official products/calibration: https://caltech-ipac.github.io/spherex-archive-documentation/spherex-data-products/
- IRSA access services: https://caltech-ipac.github.io/spherex-archive-documentation/spherex-data-access/

Transformations: verified unit conversion to MJy/sr, celestial TAN reprojection with SIP, common quality/wavelength masks, pooled brightness range and eight-decimal JSON encoding. The browser uses shared display adjustments. No generated raster replaces source pixels; ZODI is not subtracted and no empirical registration shift is imposed. See SCIENTIFIC_VALIDATION.md for every source hash and numerical result.

AllWISE source positions and W1/W2 profile-fit magnitudes/uncertainties come from `allwise_p3as_psd` through IRSA TAP. Cached overlays preserve the query, retrieval date and response hash. Positions are references from a different survey era, not confirmed SPHEREx associations. AllWISE is a joint project of the University of California, Los Angeles, and JPL/Caltech, funded by NASA. Column definitions: https://irsa.ipac.caltech.edu/data/WISE/docs/release/AllWISE/expsup/sec2_1a.html .

SIMBAD/CDS supplies reference astrometry for the five presets. Exact query links, retrieved text and proper-motion guide code are included. These predictions are not measured image positions.

## Modeled workbook lineage

| Input | Candidate rows | Observation rows | SHA-256 |
|---|---:|---:|---|
| Original user-supplied SphereX.xlsx | 1,000 | 1,000 | 8bf1af5ab7dd7171ffcc3c65f718512a3f7a075fb584d87b8a1a42943a2b28da |
| Pre-existing augmented website workbook | 1,050 | 1,030 | d8ce7af86aa02837f8718487cf4440e51ea240aeb3564a33d7e6533b0699a8bf |

All original values are preserved. The extra 50 candidate IDs repeat the scientific fields of an existing record. They precede all recovered commits; their author, time and generation method could not be established. Thirty additional observation rows are malformed. Unique sky directions total 1,000. There are 198 usable ID-linked illustrative pairs and 48 catalog/epoch coordinate disagreements. The stored rounded coordinates do not independently establish the supplied tiny offsets. Neither confidence fields nor status labels are verified discovery significance.

Owner profiles retain exact ID-to-row-to-image-URL associations, with 19 locally cached assets and graceful failure behavior. Those photographs/illustrations are labeled representative, not observations of a modeled candidate. No random assignment was introduced.

The owner archive retains both spreadsheets, raw extraction, audit, lineage and all 1,050 app records. Authorship and redistribution rights remain unverified. The **public export removes all workbook records, image mappings, spreadsheets and detailed derived record audits**. Empty catalog routes explain the omission; the public map uses the real prepared field positions. Aggregate provenance and original file hashes remain as documentation. No replacement candidate measurements are synthesized.

## Media and software

The approved nebula background is AI-generated decorative art. It supplies no scientific measurements. Contextual category cards use sourced NASA-hosted astronomy media with item-level credits and reuse conditions in REFINED_ASSETS.md. Hale–Bopp imagery retains Philipp Salzgeber attribution and CC BY-SA 3.0; IPAC artwork retains Caltech/R. Hurt credit and its image-use policy. NASA hosting does not by itself make third-party images public domain. Current homepage geometry is a sky sphere, not an Earth/Jupiter texture; historical texture assets are unused.

Application code is MIT licensed. Dependency versions and license texts are included in THIRD_PARTY_NOTICES.md and licenses/. The workbook is not covered by MIT. Team members must confirm their authority to publish original code and any remaining submitted materials; this report is not a legal rights certification.

## Disclosures

OpenAI Codex assisted coding, scientific processing, tests and documentation. Decorative backgrounds were AI-generated. Authentic numerical observations were downloaded and processed with disclosed scripts, not invented by AI. Contributor credits use shared team/role labels until the team confirms names and consent. Independent research prototype. No NASA endorsement.
