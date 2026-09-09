MoneyWise PWA v5.7.3 CACHE RESET

Aapke screenshot me old Monthly Report dashboard browser/service-worker cache se aa raha hai.
GitHub repository ka current index v5.7.2 tha, lekin browser old cached index serve kar raha tha.

UPLOAD:
ZIP ke andar ki SABHI files repository ROOT me upload/replace karein.
Important:
- index.html
- 404.html
- reset.html
- sw.js
- manifest.webmanifest
- config.js
- icons

FIRST TEST:
https://regionalcflmis.github.io/moneywise-app/reset.html?v=5731

Ye page:
1. old service workers unregister karega
2. caches delete karega
3. local/session storage clear karega
4. current Apps Script Monitoring Login kholega

NORMAL LINK:
https://regionalcflmis.github.io/moneywise-app/?v=5731

TARGET:
https://script.google.com/macros/s/AKfycbyWeFRIbiQx5iWkCRR6BJiRtzA4Wp4HNTVVaQzntacWv9YU1DHnaqxvlGns6LPtZk4K/exec
