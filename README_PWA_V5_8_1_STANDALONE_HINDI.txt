MoneyWise PWA v5.8.1 — TRUE STANDALONE SHELL

PROBLEM:
Installed PWA was redirecting from GitHub Pages to script.google.com.
Because script.google.com is outside the PWA scope, Windows/Chrome showed an external-site address bar.
Closing that external bar closed the view; reopening PWA restarted the redirect.

FIX:
- No redirect to script.google.com.
- GitHub PWA stays as the top-level installed application.
- Apps Script Monitoring app is loaded inside a full-screen iframe.
- Apps Script doGet already uses HtmlService.XFrameOptionsMode.ALLOWALL.
- Installed PWA therefore stays inside GitHub scope and should not show the script.google.com external address bar.
- Google Apps Script google.script.run continues to run inside the iframe.
- Install button is retained.

TARGET:
https://script.google.com/macros/s/AKfycbwcYHem2VbmiWqkZy2961tjbO1rscVpOkPxkYo521BVO86KJnNWg4vGjLJf6mYxXbTf/exec

UPLOAD:
Upload/replace ALL files from this ZIP in GitHub repository ROOT.

CLEAN TEST:
1. Open:
   https://regionalcflmis.github.io/moneywise-app/reset.html?v=5811
2. Then:
   https://regionalcflmis.github.io/moneywise-app/?v=5811
3. Install MoneyWise App.
4. Close browser tab.
5. Open MoneyWise from desktop/start menu.
6. It should open Monitoring Login inside the app, without navigating the PWA window to script.google.com.

IMPORTANT:
If Windows still launches an older installed MoneyWise shortcut, uninstall the old PWA once, run reset.html, then install v5.8.1 fresh.
