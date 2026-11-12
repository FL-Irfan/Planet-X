# Scientific validation of SPHEREx Explorer 2.1.0

Review date: 10 November 2026. Baseline: 2.0.0, commit d845447cad77b195c73a74f28abcd557724eb216. The numerical results below validate qualified visual comparison, not source detection, motion, variability significance or a Planet X discovery.

## Prepared observations

| Selection | Dates | Center wavelengths μm | Common valid pixels | Independent references | Worst residual RMS |
|---|---|---|---:|---:|---:|
| m101-2026-d2-cwave | 2026-05-17, 2026-06-22 | 1.419939, 1.420415 | 75.01% | 10 | 0.709 arcsec |
| epsilon-indi-b-d2-2 | 2025-04-26, 2025-06-06 | 1.244903, 1.244901 | 86.04% | 13 | 1.225 arcsec |
| epsilon-indi-b-d2-3 | 2025-04-26, 2025-06-06 | 1.215827, 1.215885 | 92.41% | 12 | 0.847 arcsec |
| epsilon-indi-b-three-dates | 2025-04-26, 2025-06-06, 2025-10-02 | 1.244903, 1.244901, 1.246188 | 72.27% | 3 | 1.124 arcsec |
| wise-0855-d2-1 | 2025-11-07, 2025-12-13 | 1.412945, 1.412855 | 83.96% | 16 | 0.756 arcsec |

All grids use 6.15 arcsec per pixel. M101 is 96 × 96; the two-date target fields are 64 × 64; the three-date Epsilon Indi B field is 32 × 32. A smaller field was necessary to keep the third date compatible across its different detector orientation. No wavelength tolerance or 70% clean-coverage threshold was relaxed.

## M101 findings

The two original FITS IDs are 2026W20_2A_0464_1 and 2026W26_1A_0178_1. Their recorded UTC times and source checksums are retained below. The target wavelength difference is 0.000475734 μm, about 1.37% of the narrower effective bandwidth. Per-cell comparisons mask differences above one quarter of the narrower bandwidth and bandwidth ratios above 1.1; this is an explicit visual-screening heuristic, not a mission-certified detection threshold.

Independent Gaussian centroid fits find 10 common compact peaks outside the central galaxy region. Median vector offset is 0.0605 arcsec; residual RMS around that vector is 0.7086 arcsec. No shift was applied. This measures consistency between these two resampled images; it is not an absolute astrometric accuracy estimate. Crowding, non-Gaussian shapes and shared interpolation can bias this diagnostic.

- 2026-05-17T10:53:45.256Z: recommended D2 ePSF zone 168, moment-equivalent Gaussian FWHM 8.9501 arcsec. Border median 0.342053 MJy/sr; supplied ZODI median 0.115976 MJy/sr. Median adjacent-output noise correlation: 0.275 horizontal, 0.263 vertical.
- 2026-06-22T20:21:33.190Z: recommended D2 ePSF zone 168, moment-equivalent Gaussian FWHM 8.9501 arcsec. Border median 0.347342 MJy/sr; supplied ZODI median 0.122927 MJy/sr. Median adjacent-output noise correlation: 0.273 horizontal, 0.263 vertical.

Raw B−A has median 0.006418 and RMS 0.046676 MJy/sr on the common mask. A diagnostic robust affine fit gives scale 0.990405 and offset 0.010752 MJy/sr; it was not applied. The diagonal-variance-normalized residual scatter is 1.0644; correlated samples and missing systematics prevent interpreting this as independent detection significance.

## Processing and uncertainty checks

1. Full detector FITS files are fetched from official IRSA or the documented NASA IRSA S3 mirror and pinned with SHA-256. DATE-OBS and MJD-OBS must agree within one second, with UTC explicit. Processing dates are never substituted for observation dates.
2. IMAGE is read in MJy/sr. FLAGS are decoded using the actual file definitions; all bits except SOURCE and FULLSAMPLE are excluded. Nonfinite IMAGE/VARIANCE and nonpositive VARIANCE are masked. Interpolated samples touching invalid input remain invalid.
3. CWAVE and CBAND products are pinned and must have the same detector, sky orientation and exact X/Y/VALUES lookup table as each exposure. WCS-WAVE alone is never used for scientific wavelength estimates.
4. Astropy WCS including SIP distortion reprojects each exposure onto one north-up, east-left TAN field. Every frame uses the intersection mask and one pooled brightness range. JSON display rows are explicitly flipped from FITS order.
5. Independent direct bilinear sampling agrees with all published arrays within 8 × 10⁻⁸ MJy/sr. WCS round trips test coordinate mechanics, not external astrometry. Fresh preparation reproduced all 11 frame files across five selections byte for byte. Some files correspond to the same exposure in different prepared grids.
6. Centroid fitting uses 9 × 9 patches, at least 35 usable pixels, peaks above eight times median noise, bounded positive Gaussian widths, rejected boundary fits, and at least three reference peaks for a residual estimate. It is a transparent diagnostic rather than a robust production source-extraction/astrometric catalog pipeline.
7. The newer QR3 D2 ePSF calibration is inspected for QR2 as recommended by IRSA. Nearest-zone models are used only to measure shape; positive clipping and normalization are disclosed. Identical nearest-zone metrics do not prove matched effective PSFs after detector rotation and reprojection.
8. Bilinear variance uses squared weights. Adjacent-output covariance from shared native pixels is computed. Native detector covariance, calibration covariance and non-Gaussian background systematics are not supplied by diagonal VARIANCE and are not invented.
9. Provided zodiacal models are inspected but not subtracted. No separate per-image brightness normalization is applied. The browser brightness/contrast/log controls only change display values.

## Why difference and stacking remain disabled

The measured registration is adequate for these limited visual comparisons. A scientific residual still needs spatially varying, orientation-aware ePSF matching and a validated photometric/background treatment. A quantitative significance map additionally needs an appropriate correlated-noise and calibration model. The diagnostic affine fit is not an approved correction. Weighted stacking is also withheld because these calibrations and response variations are not adequately modeled. No decorative or uncalibrated residual is offered as scientific evidence.

## Five targets and the scope of the search

The stored QR2/QR3 metadata searches cover all five requested targets. Header screening then examined D2 exposures, using J2000 SIMBAD positions propagated with proper motion to each observation date. RW Aurigae was additionally screened in D4. This is a bounded search of recorded results, not an exhaustive declaration about all archive releases or detectors.

| Target | Result |
|---|---|
| Barnard’s Star | One D2 pair separated by 7.13 days passed the header screen but failed the target-center mask. It is not published as a comparison. |
| Epsilon Indi B | Two D2 windows near 1.2159 and 1.2449 μm, plus a narrower three-date sequence. Field is prepared; source identification and measured motion are not established. |
| WISE 0855 | D2 field near 1.4129 μm on two dates. This is not a detection of the cold brown dwarf. A 4–5 μm target comparison has not been processed. |
| RW Aurigae | No tested D2 or D4 repeated-date pair met the header wavelength and same-pipeline criteria. Coverage is visible in the archive search. |
| R Draconis | One D2 pair failed the center mask; two alternatives had only 38.1% and 42.0% common usable coverage. No usable target comparison is published. |

Proper-motion guides omit annual parallax, perspective acceleration and binary orbital motion. Approximate catalog parallaxes are about 0.547″ for Barnard, 0.271″ for Epsilon Indi B and 0.439″ for WISE 0855, so guide positions cannot support sub-arcsecond detection claims. The app keeps one fixed field across dates rather than recentering on the predicted target. Predicted displacement is explicitly not a measured displacement.

## Catalog overlay

AllWISE positions and W1/W2 profile-fit magnitudes come from IRSA TAP table allwise_p3as_psd. Each prepared field has a cached query, retrieval time, original response SHA-256 and source IDs. Browser TAN projection is checked against independent Astropy fixtures, including RA wrap. Markers transform with the same zoom/pan as the pixels. AllWISE survey-era positions are not propagated; markers are references, not asserted SPHEREx identifications. WISE and SPHEREx differ in dates, wavelengths and angular resolution. Gaia is not implemented.

## Observation identities and provenance

### m101-2026-d2-cwave

Grid center: 210.802270000°, 54.348950000°. Shared limits 0.195000438 to 3.825568042 MJy/sr.

- **2026W20_2A_0464_1** — 2026-05-17T10:53:45.256Z; D2; pipeline 6.5.7; λ 1.419939158 μm; bandwidth 0.034719692 μm.
  Source: https://nasa-irsa-spherex.s3.us-east-1.amazonaws.com/qr2/level2/2026W20_2A/l2b-v25-2026-140/2/level2_2026W20_2A_0464_1D2_spx_l2b-v25-2026-140.fits
  SHA-256: `93a0426038a1562757c6d225152c830185c13070c99a34bf312f1939b5a5db1e`; prepared pixels: `3f5c96314a45845f84ac51fae91d2743d8dc951f32463fb3a0023ff9df32c5d8`.
- **2026W26_1A_0178_1** — 2026-06-22T20:21:33.190Z; D2; pipeline 6.5.7; λ 1.420414891 μm; bandwidth 0.034774355 μm.
  Source: https://nasa-irsa-spherex.s3.us-east-1.amazonaws.com/qr2/level2/2026W26_1A/l2b-v25-2026-180/2/level2_2026W26_1A_0178_1D2_spx_l2b-v25-2026-180.fits
  SHA-256: `41bb2cf1d53f196f5ac6b31d649594dd74b3005e837dfb3858075d0bf6bcb6de`; prepared pixels: `c524307112406cb8b68b728fd8d925686707068a35b47e05916dcd4a9f3888fd`.

Numerical report: public/observations/m101-2026-d2-cwave/validation.json. Reproducible config: data/observations/m101-2026-d2-cwave/source-config.json.

### epsilon-indi-b-d2-2

Grid center: 331.095401500°, -56.800220026°. Shared limits 0.211502921 to 1.330038399 MJy/sr.

- **2025W17_4B_0222_4** — 2025-04-26T05:09:43.680Z; D2; pipeline 6.4+psffix1; λ 1.244903158 μm; bandwidth 0.029665520 μm.
  Source: https://nasa-irsa-spherex.s3.us-east-1.amazonaws.com/qr2/level2/2025W17_4B/l2b-v20-2025-240/2/level2_2025W17_4B_0222_4D2_spx_l2b-v20-2025-240.fits
  SHA-256: `ccc65858c10d7e0cec80682042348f7cf6f0bc2a727d19e078610453e3895026`; prepared pixels: `8c57a6c710e537e105d9fd49a7d1f80e4c520b2dab99cdbb4718f210ffc10ddf`.
- **2025W23_2B_0258_3** — 2025-06-06T17:22:21.299Z; D2; pipeline 6.4+psffix1; λ 1.244901202 μm; bandwidth 0.029766723 μm.
  Source: https://nasa-irsa-spherex.s3.us-east-1.amazonaws.com/qr2/level2/2025W23_2B/l2b-v20-2025-251/2/level2_2025W23_2B_0258_3D2_spx_l2b-v20-2025-251.fits
  SHA-256: `1a25fbc5be83f42f2eeca335b6bf433e62d8765a5a24cb8b1b56ec6b2de6317d`; prepared pixels: `571a04862ee946e01c391bd2366c0e3afcaa0b242d956ee481e7fa4430974c88`.

Numerical report: public/observations/epsilon-indi-b-d2-2/validation.json. Reproducible config: data/observations/epsilon-indi-b-d2-2/source-config.json.

### epsilon-indi-b-d2-3

Grid center: 331.095401492°, -56.800220023°. Shared limits 0.188093674 to 1.349613729 MJy/sr.

- **2025W17_4B_0222_3** — 2025-04-26T05:07:34.751Z; D2; pipeline 6.4+psffix1; λ 1.215826638 μm; bandwidth 0.029103893 μm.
  Source: https://nasa-irsa-spherex.s3.us-east-1.amazonaws.com/qr2/level2/2025W17_4B/l2b-v20-2025-240/2/level2_2025W17_4B_0222_3D2_spx_l2b-v20-2025-240.fits
  SHA-256: `60784bc8b4e78fa4b0b269c6fa6e92d21c156d3dabfcc107a08a8e3ab9db8d5f`; prepared pixels: `a87183e559b335e7c9982ee83a574d5015fef62e863806884d3d654d892a763b`.
- **2025W23_2B_0258_2** — 2025-06-06T17:20:12.369Z; D2; pipeline 6.4+psffix1; λ 1.215885132 μm; bandwidth 0.028677025 μm.
  Source: https://nasa-irsa-spherex.s3.us-east-1.amazonaws.com/qr2/level2/2025W23_2B/l2b-v20-2025-251/2/level2_2025W23_2B_0258_2D2_spx_l2b-v20-2025-251.fits
  SHA-256: `c0ca82717405c9eebc8610e9e3db39930d3a16ff56d33bfaba6d2a98ba4e11cc`; prepared pixels: `ee7a310b20e678603d317f01624cc160635a8a49e1725f3613229dcf104c5632`.

Numerical report: public/observations/epsilon-indi-b-d2-3/validation.json. Reproducible config: data/observations/epsilon-indi-b-d2-3/source-config.json.

### epsilon-indi-b-three-dates

Grid center: 331.095401500°, -56.800220026°. Shared limits 0.234953274 to 2.822391286 MJy/sr.

- **2025W17_4B_0222_4** — 2025-04-26T05:09:43.680Z; D2; pipeline 6.4+psffix1; λ 1.244903158 μm; bandwidth 0.029665520 μm.
  Source: https://nasa-irsa-spherex.s3.us-east-1.amazonaws.com/qr2/level2/2025W17_4B/l2b-v20-2025-240/2/level2_2025W17_4B_0222_4D2_spx_l2b-v20-2025-240.fits
  SHA-256: `ccc65858c10d7e0cec80682042348f7cf6f0bc2a727d19e078610453e3895026`; prepared pixels: `bab03654a0eed52c860604b5dc4489029228173583e05d0000628afe83e660cf`.
- **2025W23_2B_0258_3** — 2025-06-06T17:22:21.299Z; D2; pipeline 6.4+psffix1; λ 1.244901202 μm; bandwidth 0.029766723 μm.
  Source: https://nasa-irsa-spherex.s3.us-east-1.amazonaws.com/qr2/level2/2025W23_2B/l2b-v20-2025-251/2/level2_2025W23_2B_0258_3D2_spx_l2b-v20-2025-251.fits
  SHA-256: `1a25fbc5be83f42f2eeca335b6bf433e62d8765a5a24cb8b1b56ec6b2de6317d`; prepared pixels: `a0f29f44355b803fc241f3d710cd490e35bee7b45e5b9f1b46ba02458da31dbf`.
- **2025W40_1A_0661_3** — 2025-10-02T00:30:30.869Z; D2; pipeline 6.4+psffix1; λ 1.246187816 μm; bandwidth 0.029586897 μm.
  Source: https://nasa-irsa-spherex.s3.us-east-1.amazonaws.com/qr2/level2/2025W40_1A/l2b-v20-2025-277/2/level2_2025W40_1A_0661_3D2_spx_l2b-v20-2025-277.fits
  SHA-256: `b0afd6f533fc200673d1efaa2a1d770e19a634c008a006b2af0165a8172d5b0e`; prepared pixels: `d9569384a967b974c8fb5e2e233ebd54384dfd310fed5a5ba64750223fdecb11`.

Numerical report: public/observations/epsilon-indi-b-three-dates/validation.json. Reproducible config: data/observations/epsilon-indi-b-three-dates/source-config.json.

### wise-0855-d2-1

Grid center: 133.759992312°, -7.242200877°. Shared limits 0.200008409 to 2.487125719 MJy/sr.

- **2025W45_2A_0292_2** — 2025-11-07T20:31:27.241Z; D2; pipeline 6.4+psffix1; λ 1.412944797 μm; bandwidth 0.034143596 μm.
  Source: https://nasa-irsa-spherex.s3.us-east-1.amazonaws.com/qr2/level2/2025W45_2A/l2b-v20-2025-314/2/level2_2025W45_2A_0292_2D2_spx_l2b-v20-2025-314.fits
  SHA-256: `9102885d487a3b67a08794ca22eac1c0386ef979ed367cd1c3205940eefad346`; prepared pixels: `9dd301cf0852455755ba19955b84a2d75db73b381b5c1db2f71462c9f3c078e0`.
- **2025W50_2A_0479_1** — 2025-12-13T05:32:45.700Z; D2; pipeline 6.4+psffix1; λ 1.412855234 μm; bandwidth 0.033975610 μm.
  Source: https://nasa-irsa-spherex.s3.us-east-1.amazonaws.com/qr2/level2/2025W50_2A/l2b-v20-2025-349/2/level2_2025W50_2A_0479_1D2_spx_l2b-v20-2025-349.fits
  SHA-256: `1f611d267fd5ff318a358a6d1fe0f82b42e2d41016eab1c4e2df42511d244dbe`; prepared pixels: `570ee1958ae07b6218ec72975e564ec807a0722867458536d6ed2d49e0330aee`.

Numerical report: public/observations/wise-0855-d2-1/validation.json. Reproducible config: data/observations/wise-0855-d2-1/source-config.json.

## Primary scientific references

- SPHEREx QR2 DOI: https://doi.org/10.26131/IRSA652
- FITS, wavelength calibration and ePSF guidance: https://caltech-ipac.github.io/spherex-archive-documentation/spherex-data-products/
- ePSF extraction tutorial: https://caltech-ipac.github.io/irsa-tutorials/spherex-psf/
- Archive API documentation: https://caltech-ipac.github.io/spherex-archive-documentation/spherex-data-access/
- AllWISE column definitions: https://irsa.ipac.caltech.edu/data/WISE/docs/release/AllWISE/expsup/sec2_1a.html
- Exact SIMBAD reference links and astrometry snapshots: src/data/demo-targets.json and data/observations/astrometry/.
