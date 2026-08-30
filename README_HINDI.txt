MONEYWISE CFL MONITORING - FINAL PWA v4.5.3
============================================================

CURRENT LIVE APPS SCRIPT URL
https://script.google.com/macros/s/AKfycby8Oypn55Qm-_TgEFbfoc7np449HOoGqnm6Z6rxeQIen4q-tySwgTzFL4G5v6Jn4ZN3/exec

SABSE IMPORTANT AUTO-UPDATE RULE
1. Apps Script me hamesha SAME deployment ko Edit karein.
2. Deploy > Manage deployments > existing Web App > Edit (pencil).
3. Version = New version select karein > Deploy.
4. Existing /exec URL SAME rahega.
5. PWA/GitHub Pages iframe isi fixed /exec URL ko load karta hai.
6. Isliye Code.gs / Planner / Dashboard / Form ka naya Apps Script version deploy hote hi
   GitHub/PWA par automatically naya live version dikhega. GitHub files ko dobara badalne ki zarurat nahi.

AGAR NEW DEPLOYMENT BANAYA AUR /exec URL BADAL GAYA
- config.js me appUrl replace karein; OR
- GitHub repository Settings > Secrets and variables > Actions > Variables
  me APPS_SCRIPT_URL variable set karein.
- Actions > Deploy MoneyWise PWA to GitHub Pages > Run workflow.

GITHUB PAGES AUTO DEPLOY
- Is package me .github/workflows/pages.yml diya hai.
- Repository ke root me is ZIP ke contents upload/push karein.
- GitHub > Settings > Pages > Source = GitHub Actions.
- Har main-branch push par GitHub Pages automatically redeploy hoga.
- GitHub Pages public URL same rahega jab tak repo/account name same hai.

PWA INSTALL
Android Chrome/Edge:
- GitHub Pages URL open karein.
- Install button ya browser menu > Add to Home screen / Install app.

iPhone/iPad Safari:
- GitHub Pages URL open karein.
- Share > Add to Home Screen.

GPS / SELFIE / CAMERA
- Apps Script Code.gs me XFrameOptionsMode.ALLOWALL already enabled hai.
- PWA iframe camera + geolocation permissions allow karta hai.
- Agar kisi phone/browser policy me embedded permission block ho, top bar ka "Full screen"
  button use karein. Woh same live /exec app directly kholta hai.

FILES
index.html                Main PWA shell, live app iframe
404.html                  GitHub Pages route fallback
config.js                 Live Apps Script /exec URL - single source
manifest.webmanifest      PWA install metadata
sw.js                     PWA shell cache/service worker
offline.html              Offline notice
icons/                    Android/iOS PWA icons
.github/workflows/pages.yml  Auto GitHub Pages deployment
.nojekyll                  Static Pages safety file

FINAL VERSION
PWA Shell: 4.5.3-pwa
Backend package: MoneyWise CFL Monitoring v4.5.3 HOLIDAY + WEEKLY OFF + LEAVE

AGAR GITHUB PAGES PAR INDEX.HTML + 404.HTML PEHLE SE LIVE HAIN
- Current Pages source ko badalne ki zarurat nahi, agar branch/root deployment already working hai.
- Root me index.html, 404.html, config.js, manifest.webmanifest, sw.js, offline.html, .nojekyll aur icons/ upload/replace karein.
- .github/workflows/pages.yml sirf tab use karein jab Pages Source = GitHub Actions karna ho.
