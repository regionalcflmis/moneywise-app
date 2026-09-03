MoneyWise GitHub PWA FIX v4.7.0

Repo root में केवल इन text files को replace करें:
index.html
404.html
config.js
manifest.webmanifest
sw.js
offline.html

IMPORTANT:
Existing icon-192.png, icon-512.png और apple-touch-icon.png DELETE/REPLACE मत करें.

Current Apps Script:
https://script.google.com/macros/s/AKfycbzDBkVdYTXcqTk0qFMfWKk1oMubpwHkqam8-ku9c8xPksMhBbgb5na_RlYhqA1URCcT/exec

GitHub Pages:
Settings > Pages
Source: Deploy from a branch
Branch: main
Folder: /(root)

Commit के बाद पुराना PWA बंद करें और page reload करें.
अगर पुराना shell दिखे तो browser site data/cache clear करके दोबारा open/install करें.
