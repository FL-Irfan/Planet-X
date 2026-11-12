# Five target checks — 10 November 2026

The requested presets are implemented. Their status as five mandatory 2026 challenge benchmarks could not be confirmed from the inaccessible full Resources tab. Coverage queries are genuine IRSA SIA2 results at sourced SIMBAD ICRS J2000.0 positions and radius 0.1°. Counts are files, not detections or unique dates.

| Target | QR2 / QR3 files | Pixel-processing result |
|---|---:|---|
| Barnard’s Star | 273 / 132 | A 7.13-day D2 pair failed target-center quality masking. No prepared pair. |
| Epsilon Indi B | 362 / 120 | Two windows near 1.216 and 1.245 μm; the latter also has a smaller three-date April/June/October 2025 field. |
| WISE 0855 | 312 / 0 | Two D2 dates near 1.413 μm. This is a field comparison, not a detection of the cold brown dwarf. |
| RW Aurigae | 250 / 139 | No tested D2 or D4 repeated-date pair passed wavelength and processing-version checks. |
| R Draconis | 591 / 0 | One D2 pair failed center quality. Two alternatives had only 38.1% and 42.0% common clean coverage. |

The two zero QR3 responses are specific to the checked collection, coordinates, radius and date. The header screening was bounded to archived results and listed detectors; it is not proof that no suitable observation exists anywhere in the archive.

## Evidence and astrometry

`data/observations/preset-coverage.json` and `coverage/` preserve exact queries, timestamps, HTTP statuses, raw VOTables and hashes. `docs/science-evidence/` records the subsequent header/pixel screens, failures and successful reproduction. `data/observations/astrometry/` preserves sourced astrometry text, with reference links in `src/data/demo-targets.json`.

Target preparation propagates proper motion from the catalog reference epoch to the exposure times, then chooses a fixed comparison field. Browser presets for prepared targets use that field center; other presets explain their J2000 position. Annual parallax, perspective acceleration and binary orbits are not fitted. The Epsilon Indi B three-date predicted shift is about 2.037″, smaller than one 6.15″ display pixel, and is explicitly not measured motion. Uncertain source identity and blending prohibit a target-motion claim.

## Before a motion or variability claim

Identify the correct source in clean pixels, propagate full astrometry including relevant parallax/binary effects, model crowding and PSF, calibrate flux/background differences and quantify correlated uncertainties. A fast proper motion, a catalog marker or archive footprint does not establish detectability.

M101 remains an additional two-date demonstration. See the [scientific report](SCIENTIFIC_VALIDATION.md) for actual dates, wavelengths, masks, centroid residuals and source hashes for every published selection.
