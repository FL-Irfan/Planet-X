# Real SPHEREx processing and update guide — 2.1.0

## Source separation

The active `m101-2026-d2-cwave` comparison contains genuine SPHEREx QR2 Level 2 images, downloaded from the official NASA IRSA AWS mirror. The field was selected from IRSA’s M101 cutout tutorial. The old `m101-2026-d2` identifier redirects to this new calibrated series; its old WCS-WAVE manifest is retained only as a legacy record. The modeled workbook and representative raster images never enter the scientific FITS importer.

The importer is a display-readiness gate, not proof of motion or statistical significance. Its conservative thresholds are project choices, not NASA challenge requirements.

## Reproduce and add data

Use Python 3.12 and install `requirements-observations.txt` plus `requirements-data.txt` in a virtual environment. From the source root:

```sh
python scripts/prepare_spherex_pair.py data/observations/m101-2026-d2-cwave/source-config.json --output ./review/m101-reproduced
```

The output path must be new. Original FITS URLs, expected IDs and SHA-256 hashes are pinned. CWAVE/CBAND calibration is separately pinned. The source config can specify localPath for an already downloaded file; its bytes must still match the pinned hash. Local paths do not enter the public manifest.

Inspect the output, metadata and masks. A new comparison requires a new ID, then:

```sh
npm run observations:import -- ./review/new-series/manifest.json
npm run observations:check
npm test
npm run test:python
npm run build
```

The importer checks the entire batch before activation. Existing IDs and asset paths cannot be overwritten. Source/public manifest equality and all pixel hashes/masks are checked during every build. Keep the previous Git commit and compiled deployment for rollback; deploy the complete build atomically after browser review.

## Processing checks

1. Accept official HTTPS FITS sources only. Verify pinned original hashes and expected OBSID. Representative JPEG/PNG images cannot become observations.
2. Require IMAGE, FLAGS, VARIANCE, ZODI, WCS-WAVE and PSF or EPSF extensions. Preserve their dimensions/units and source celestial WCS in metadata.
3. Use UTC DATE-OBS/MJD-OBS, agreeing within one second, within the mission and not in the future. DATE alone is a processing timestamp and is rejected.
4. Convert IMAGE to MJy/sr and VARIANCE to (MJy/sr)². Exclude nonfinite/nonpositive variance and flags except the source/full-sampling informational bits explicitly defined by that file. ZODI is inspected and remains unsubtracted. The separate numerical validator inspects PSF and recommended D2 ePSF shapes. They are not matched between dates.
5. Read the exact detector’s CWAVE and CBAND scientific calibration arrays, with explicit sky orientation and full 2040×2040 dimensions. Verify the calibration’s X/Y/VALUES lookup tables exactly match the exposure’s WCS-WAVE table. Bilinear interpolation uses zero-based detector coordinates `[y,x]`. WCS-WAVE alone is visualization-grade and is insufficient for this science adapter.
6. Current calibration adapter requires **full detector FITS**, rejecting cutouts until a detector-offset mapping is explicitly implemented and verified. It accepts 2–24 distinct chronological exposures, at least a day apart, from one release, detector and processing version.
7. Require center wavelengths within a quarter of the narrower bandwidth and bandwidths within 10%. Reproject with celestial WCS/SIP onto the same north-up, east-left ICRS TAN grid.
8. Check every output pixel’s effective wavelength across all dates. Keep only pixels with finite clean data, full footprint coverage and compatible wavelengths and bandwidth ratios no greater than 1.1 in every frame. Require at least 70% common valid pixels and an unmasked 2×2 center.
9. Use one pooled 1st–99.5th percentile brightness range in MJy/sr. No independent frame normalization. Export calibrated reprojected pixels, rounded to 8 decimals, with null for masks and common north-to-south row ordering. Brightness/contrast/log controls change rendering only.
10. Hash every derived array and record source IDs, URLs, calibration file, dates, units, geometry, masks, processing version and explicit uncertainty limits.

## Worked example

| Property | A | B |
| --- | --- | --- |
| Observation ID | 2026W20_2A_0464_1 | 2026W26_1A_0178_1 |
| UTC observed | 2026-05-17T10:53:45.256Z | 2026-06-22T20:21:33.190Z |
| Center wavelength · μm | 1.419939158 | 1.420414891 |
| Center bandwidth · μm | 0.034719692 | 0.034774355 |
| Processing version | 6.5.7 | 6.5.7 |
| Kept wavelength span · μm | 1.400896–1.439550 | 1.401233–1.439708 |

Center: ICRS RA 210.80227°, Dec 54.34895°. Grid: 96×96 at 6.15″/pixel (9.84′ field width). Common valid pixels: 75.010851%. Shared display range: 0.195000438–3.825568042 MJy/sr. Maximum kept wavelength mismatch: 0.000640602 μm.

Calibration: `https://irsa.ipac.caltech.edu/ibe/data/spherex/qr2/spectral_wcs/cal-wcs-v4-2025-254/2/spectral_wcs_D2_spx_cal-wcs-v4-2025-254.fits`

Calibration SHA-256: `40c49a5acbf7047b7cebf3d46471cb99639867996f48a22d0e283f7e529249d7`

On 10 November 2026 the pipeline regenerated all 11 displayed arrays across five selections byte-for-byte. See `docs/science-evidence/reproduction-2.1.json`. The earlier WCS-WAVE-only wavelengths and mask fractions are superseded.

The central galaxy and surrounding structure are visible at both dates. The app makes no quantitative motion/variability finding. A visual similarity does not independently validate residual astrometry. Do not reuse the legacy exploratory correlation/translation numbers as calibrated accuracy estimates for this release.

## What remains uncertain

Quick-release artifacts, spectral-response differences, zodiacal background, PSF changes and residual registration can cause visible differences. Bilinear resampling correlates noise. The numerical validator propagates diagonal variance using squared bilinear weights and estimates adjacent-output covariance from shared input pixels. Compact-source centroid residuals are measured independently. Native-pixel and calibration covariance remain unknown. Spatial PSF matching and validated background/photometric corrections are not implemented. Accordingly B−A and weighted-stack controls are disabled and no significance is displayed.

## Coordinate queries and five examples

The browser uses two same-origin proxy routes to the fixed IRSA SIA/TAP endpoints because direct IRSA responses do not consistently supply CORS headers. Netlify `_redirects` supports the deployment ZIP; `netlify.toml` supports source deployments; Vite dev/preview forwards the same paths. No archive credentials or API keys are needed. Netlify proxy timeouts can still occur and are reported. A generic static host must implement these routes to support live search.

The web form accepts decimal/sexagesimal coordinates and a 0.001–1° search radius. SIA2 searches QR2/QR3 wide/deep collections. It retains a 15-minute session cache, limits responses to 20 MB/2,000 files and labels overflow. Six-detector filtering and pagination operate on all returned rows. Selected filenames include processing versions, and shared selections missing from a new response are disclosed.

If a wide-survey SIA2 request fails, the TAP fallback uses IRSA’s documented CONTAINS(POINT, footprint) query. This is **center-only**, with release filtering; radius and wide/deep filtering are not applied. The UI states that scope difference. Deep-survey failures do not silently switch survey. Timeouts, missing encodings and errors never become “no coverage.”

The exact center-only TAP query was executed on 10 November 2026 and returned 368 QR2 file rows for the M101 position. Raw five-target SIA responses and hashes are archived under `data/observations/coverage/` and `preset-coverage.json`. See `FIVE_TARGETS.md` for results. Coverage is not a target detection or a compatible pair.

All presets use sourced SIMBAD ICRS J2000.0 positions. Epsilon Indi B denotes the brown-dwarf pair. High-proper-motion targets require astrometric propagation to each observation date before narrow cutout association. The broad radius is a search aid, not a substitute for propagation. Epsilon Indi B now has two calibrated wavelength windows and a smaller three-date field. WISE 0855 has a near-infrared field comparison, without a target detection. The other three presets have explicit failed-pair evidence. All prepared frames use a fixed field centered using a proper-motion guide; no artificial target tracking is applied. See `FIVE_TARGETS.md`.

## Future challenge resource adapter

Inspect the actual files, source, license and documentation before adapting them. Do not assume FITS, time conventions, dates, a 102-band cube or workbook IDs. Preserve raw hashes and a documented field mapping. A supported calibrated series can use the versioned manifest/pixel schema; challenge simulations use sourceKind `challenge-simulation` and stay visibly labeled. Unsupported/missing metadata is rejected. Test and review a new series before activating it. No future-resource integration has been claimed.

## Primary sources and acknowledgement

- NASA/JPL-Caltech SPHEREx, Caltech/IPAC IRSA QR2: https://doi.org/10.26131/IRSA652
- Archive/acknowledgement: https://irsa.ipac.caltech.edu/data/SPHEREx/docs/overview_qr.html
- Data products and scientific calibration: https://caltech-ipac.github.io/spherex-archive-documentation/spherex-data-products/
- Archive APIs: https://caltech-ipac.github.io/spherex-archive-documentation/spherex-data-access/
- Example field and TAP query: https://caltech-ipac.github.io/irsa-tutorials/spherex-cutouts/
- Full FITS explanatory supplement: https://irsa.ipac.caltech.edu/data/SPHEREx/docs/SPHEREx_Expsupp_QR.pdf
- Preset astrometry and individual references: `src/data/demo-targets.json` (SIMBAD/CDS).

Independent research prototype. No NASA endorsement.

## Numerical validation and overlays

Run `python scripts/validate_spherex_series.py CONFIG --prepared PREPARED_DIRECTORY --output REPORT.json` after preparation. It checks independent bilinear sampling, WCS round trips, compact-reference centroids, nearest-zone PSF/ePSF moments, background/ZODI, diagonal variance and neighboring interpolation covariance. This validator is currently verified on the bundled QR2 D2 sources. It is not a general source-detection or QR3 certification pipeline. Inspect its full report before import.

`python scripts/predict_target_positions.py --help` documents approximate proper-motion propagation. Full annual-parallax, perspective and binary-orbit fitting remain outside the guide. `scripts/screen_target_headers.py --help` describes the bounded, recorded QR2 header screening. Header compatibility alone does not pass pixel quality checks.

The AllWISE preparation script queries the official IRSA TAP table, records the exact query/time/hash and caches source positions and W1/W2 magnitudes. Run `python scripts/fetch_allwise_overlay.py --help` for its input/output arguments. The overlay is optional and off by default. WCS projection, zoom and pan match the image. Catalog positions are survey-era references, not propagated source identifications. No Gaia overlay or live cross-match is claimed.

Detailed numerical results and all source hashes: [SCIENTIFIC_VALIDATION.md](SCIENTIFIC_VALIDATION.md).
