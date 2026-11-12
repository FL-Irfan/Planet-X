# Verification report — SPHEREx Explorer 2.2.0

Verified 11 November 2026. This is a UX refinement of source commit `75f0dfe64051b1e6ec4c4acd1f1a0a5be9b457c8` (2.1.0).

## Automated checks

- Complete application: **81/81 JavaScript/React tests**, **14/14 Python tests**.
- Public observation edition: **21/21 JavaScript/React tests**, **9/9 Python tests**. Shared tests are not counted as extra coverage.
- TypeScript compilation, observation-manifest validation and production builds pass for both editions.
- The unchanged baseline passed 76 JavaScript/React tests before editing.

New checks cover all five prominent target choices, exact prepared-field selection, unavailable-target states without stale images, collapsed scientific detail, Play from side-by-side, initial whole-globe fitting, all comparison highlights in catalog mode, cursor-anchored measurement zoom, plot-only wheel capture, browser-zoom preservation, fixed marker sizes, unchanged raw values, and linear/log axis round trips.

Existing tests cover the complete 1,050-record search, 198 modeled pairs, source-image mapping, profile refresh, favorites, filters, navigation and camera restoration, shared URLs, chronological playback, exact pause state, real-pixel hash failures, recovery, archive filters/pagination, calibration metadata, image geometry and processing safeguards.

Logs are in `docs/science-evidence/*2.2*.txt`. The 2.1 scientific report and byte-for-byte FITS reproduction evidence remain available separately. This UX release does not reprocess the scientific arrays: catalog data, image assets, observation manifests and source hashes are unchanged. The project-description DOCX is unchanged.

## Browser review

Chromium preview at desktop width and a **390 × 844 CSS-pixel iframe viewport**:

- Homepage retains its approved background and exactly one fully visible catalog sphere. Tagline, challenge link and actions have clear vertical spacing. Desktop uses 85% app scale; phone layouts retain full-size controls.
- The default M101 A/B images appear in the initial desktop viewport. Five target cards lead the page; details are collapsed. Play starts blink immediately; Pause and direct prepared-target selection work.
- Epsilon Indi B opens its exact prepared field and retains the unverified-target-detection notice. The five-target integration test checks all target destinations.
- Barnard’s Star archive query returned 273 QR2 exposure files during review. These are labeled exposure files, not accepted comparison pairs. Live archive counts can change.
- Infrared catalog view highlights both selected examples in their comparison colors. Wheel zoom reached 2×, the axes changed, and the measurement table retained 3.5 μm / 14.2 μJy and 3.82 μm / 35.84 μJy. Reset restored the complete range.
- At phone width both A/B cards remain visible together. Target cards scroll horizontally within their own row. Brightness controls fit within the page; Escape closes their panel. Page width and viewport client width both measured 384 px, excluding the scrollbar: no horizontal document overflow.
- Scientific sources, exact timestamps, wavelength calibration, masks, reports and limitations remain in Scientific Details. Archive selection, additional wavelengths, date controls, contrast/stretch, overlay controls and sharing remain available.

## Verification limits

The test browser disables WebGL. The intended fallback was observed; camera framing, persistent rendering, independent home rotation and profile-return camera state passed automated renderer tests. Hardware GPU animation, Firefox, Safari and physical touch devices were not available for direct visual certification. Extension metadata errors were also present in the test browser. This report does not claim every browser is error-free.

No production deployment was performed. Netlify-specific proxy behavior is covered by configuration tests and unchanged routing, not a new live Netlify deployment. Scientific subtraction, weighted stacking, target identification and significant motion/variability remain unavailable where their prerequisites are unverified.

## Re-run

```sh
npm ci
npm test
python -m pip install -r requirements-observations.txt -r requirements-data.txt
npm run test:python
npm run build
```

Archive source identity and compiled hashes are recorded in `BUILD_SOURCE.json`, `SOURCE_FILES.sha256`, `build-info.json`, and the companion package verification report.
