MoneyWise PWA v5.7.5

WHY INSTALL BUTTON WAS MISSING
- v5.7.4 index page immediately redirected from GitHub Pages to Apps Script.
- Browser did not remain on the GitHub PWA origin long enough to complete PWA installability checks.
- v5.7.4 reset service worker also unregistered itself, so Chrome could not treat it as a stable installable PWA.

V5.7.5 FIX
- GitHub page stays open as an install landing page.
- Stable service worker is registered and remains active.
- beforeinstallprompt is captured.
- Visible button: Install MoneyWise App.
- Separate button: Open Monitoring Login.
- When launched after installation, the installed PWA automatically opens the Monitoring Login.

NEW APPS SCRIPT TARGET
https://script.google.com/macros/s/AKfycbwcYHem2VbmiWqkZy2961tjbO1rscVpOkPxkYo521BVO86KJnNWg4vGjLJf6mYxXbTf/exec

UPLOAD
Upload/replace ALL files from this ZIP in GitHub repository ROOT.

FIRST CLEAN TEST
https://regionalcflmis.github.io/moneywise-app/reset.html?v=5751

THEN OPEN INSTALL PAGE
https://regionalcflmis.github.io/moneywise-app/?v=5751

DESKTOP CHROME/EDGE
- Wait a few seconds.
- Click Install MoneyWise App.
- Browser may also show an install icon in the address bar.

ANDROID CHROME
- Install button may appear.
- If not: Chrome menu > Add to Home screen / Install app.

IMPORTANT
Do not auto-redirect the normal GitHub page before installation; that was the reason install UI did not appear.
