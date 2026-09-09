Moneywise CFL Dashboard - GitHub Pages / PWA Setup

Repository:
https://github.com/regionalcflmis/cfldashboard

UPLOAD THESE FILES/FOLDERS TO THE ROOT OF THE REPOSITORY:
1. index.html
2. manifest.json
3. service-worker.js
4. icons/icon-192.png
5. icons/icon-512.png

GITHUB STEPS (first time only)
1. Open: https://github.com/regionalcflmis/cfldashboard
2. Click Add file > Upload files.
3. Upload index.html, manifest.json, service-worker.js and the icons folder contents.
   If GitHub web upload does not preserve the icons folder easily, create a folder named icons first, then upload both PNG files into it.
4. Commit changes to main.
5. Open Settings > Pages.
6. Under Build and deployment, select: Deploy from a branch.
7. Branch: main. Folder: /(root). Click Save.
8. Wait 1-3 minutes.
9. Open: https://regionalcflmis.github.io/cfldashboard/

UPDATING THIS MONTH (repo already exists)
1. Open: https://github.com/regionalcflmis/cfldashboard
2. Click Add file > Upload files, and drag in the new index.html,
   manifest.json, service-worker.js, and the two icon files from this zip
   (same filenames — GitHub will offer to replace the existing ones).
3. Commit changes to main. Pages redeploys automatically in 1-3 minutes.
4. This update bumped the service worker's CACHE_NAME to v2, so phones
   that already installed the app will pick up this month's data on
   their next visit instead of showing a stale cached copy. Next time
   this is refreshed, bump it again (v3, v4, ...).

INSTALL AS MOBILE APP
Android/Chrome or Edge:
- Open the GitHub Pages URL.
- Menu > Install app / Add to Home screen.

iPhone/iPad Safari:
- Open the GitHub Pages URL.
- Share > Add to Home Screen.

IMPORTANT
- PWA/service worker works on HTTPS (GitHub Pages provides HTTPS), not from file:/// local paths.
- When dashboard content is updated later, replace index.html and bump CACHE_NAME in service-worker.js (for example v3) so phones receive the new cached version.
- The two icon files were regenerated from the actual MoneyWise logo (replacing the earlier placeholder "MW / CFL" text icons).
