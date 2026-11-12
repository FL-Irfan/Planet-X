# Deployment and submission actions — 2.1.0

Production remains https://visionary-kitsune-822d5a.netlify.app/ . The public repository is https://github.com/FL-Irfan/Planet-X . They are existing links, not proof of this release being installed. GitHub reported no push permission and Netlify required reauthentication during finalization. A draft could not be uploaded. Do not substitute a claim of local testing for live Netlify verification.

## 1. Resolve eligibility first

Disclose that this application was built before the 14–15 November event. Official organizer guidance warns that early project development can disqualify an entry. Ask the registered event lead/Global Organizing Team for an explicit decision on permitted use. Keep commits and dates truthful; do not relabel the release as created during the hackathon. No message or application was submitted on your behalf.

## 2. Publish the public source package

Use **SPHEREx-Explorer-2.1.0-Public-Source.zip** until workbook redistribution rights are documented. The complete owner source is preserved separately.

1. Sign in to the repository owner account and grant the connected GitHub app write access, or use your own Git client.
2. Clone the existing repository; create branch `release-2.1.0`; retain the old commit as rollback.
3. Extract the Public Source ZIP and copy its project contents into the clone, excluding its wrapper folder. Replace obsolete app files, retain `.git`, and inspect `git diff --stat` and `git status`. Do not copy credentials, node_modules, raw FITS or the owner spreadsheet assets.
4. Run `npm ci`, `npm test`, `npm run build`. Commit the complete source and open a pull request. Review the diff, then merge if authorized.
5. Clone the pushed branch into a fresh directory and repeat the build. A Netlify source build records that repository commit in build-info.json. Public source is an explicitly documented export of the owner release, so its new GitHub commit is expected to differ from the owner Sites commit.

## 3. Create a Netlify draft

Authenticate in the correct Netlify team/site. For a source build use the root `netlify.toml`, build command `npm run build`, publish directory `dist`, Node 24. For a prepared ZIP extract **SPHEREx-Explorer-2.1.0-Public-Netlify.zip**; its top level contains index.html, assets, observations, _redirects and build-info.json. Do not upload source files as the publish directory.

Using the official CLI from your source directory:

```sh
npx netlify-cli login
npx netlify-cli link
npx netlify-cli deploy --dir=dist
```

Select the existing `visionary-kitsune-822d5a` site when linking. The final command creates a draft; do not add `--prod` yet. Alternatively upload the prepared folder through the site’s Deploys interface and explicitly choose a draft workflow. Preserve the current production deploy ID and the 2.0.0 rollback packages.

## 4. Verify the actual draft, signed out

- `/build-info.json`: version 2.1.0, intended profile, expected sourceCommit and exact JS/CSS hashes from the supplied package. Clear stale cache if they differ.
- Open/refresh `/`, `/sky-map`, `/blink?source=real`, each prepared field, `/methodology` and `/data`. For an authorized owner deployment, also refresh the final candidate `/candidates/SPX-ANO-1050`, filters and favorites.
- Search M101 coordinates 210.80227, 54.34895, radius .1, QR2. Confirm real metadata, dates, detector filter, pagination and selection. In browser network tools confirm `/archive/irsa/SIA?...` returns IRSA VOTable data, not index.html.
- Verify `/archive/irsa/TAP/sync` forwards a valid documented TAP query too; both routes must occur before the SPA fallback. TAP fallback is explicitly center-only, not a radius-equivalent search. Proxy rules exist in both netlify.toml and _redirects.
- Load the three-date Epsilon Indi B selection, blink/pause/step, change interval and wavelength, zoom/pan, alter shared display settings, refresh the shared URL and toggle AllWISE markers.
- Check phone-width navigation, keyboard focus and Escape, Safari/Firefox and an actual WebGL-capable device. The image viewer must work when 3D falls back to 2D.
- Inspect console/network failures and unavailable-data recovery. Do not promote if a critical route, checksum, image or proxy fails.

Production promotion is a separate action requiring the owner’s explicit authorization. It was not performed during this release.

## 5. Submit only after organizer and link checks

Confirm the current challenge Resources tab and actual Project form, applicable video/slide limits and event timezone. Review the supplied abstract/technical description; replace status placeholders with the verified matching deployment/repository URLs. Confirm team roles, credit consent and any data/media rights. Record the real-data demonstration from the tested draft, upload it publicly and check access while signed out. Avoid identifiable minors in the submitted media and follow current organizer guidance. Submit from the team Project tab by the official deadline and retain the portal confirmation. No submission success is asserted here.

## Troubleshooting

Blank/broken assets usually mean the source root or a wrapper folder was deployed instead of dist contents. Old UI means stale or wrong assets: inspect build-info.json before changing CSS. Failed archive search can be a proxy or IRSA timeout; use Retry and distinguish unavailable service from an empty query. Prepared comparisons remain available without live archive calls. Unexpected image changes require source/mask/calibration review, not a visual patch. Never bypass checksum failures with a stock image.
