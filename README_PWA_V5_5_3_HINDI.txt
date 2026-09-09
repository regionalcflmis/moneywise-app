MoneyWise GitHub PWA v5.6.2 — FORCE APP LAUNCHER

WHY THIS VERSION
- The GitHub Pages URL was showing an older "MoneyWise CFL Project Monthly Report" dashboard.
- v5.6.2 does NOT iframe or cache dashboard HTML.
- It unregisters old service workers, deletes old browser caches, and redirects directly to the current Apps Script deployment.

IMPORTANT GITHUB STEPS
1. Open repository: regionalcflmis/moneywise-app
2. Delete/replace the OLD root files that served the monthly report dashboard.
3. Upload the CONTENTS of this ZIP directly to the repository ROOT (not inside another folder):
   index.html
   404.html
   config.js
   manifest.webmanifest
   sw.js
   offline.html
4. Commit changes.
5. GitHub Settings > Pages should continue to deploy from main / (root).
6. Open:
   https://regionalcflmis.github.io/moneywise-app/?v=5621
7. If an installed old PWA still opens the dashboard, remove that old home-screen/app shortcut once and install again after opening v5.6.2.

TARGET APPS SCRIPT:
https://script.google.com/macros/s/AKfycbyWeFRIbiQx5iWkCRR6BJiRtzA4Wp4HNTVVaQzntacWv9YU1DHnaqxvlGns6LPtZk4K/exec

FULL ICONS INCLUDED: icon-192.png, icon-512.png, apple-touch-icon.png
Upload all ZIP files directly to repository root.
