# tomak · Sub-3

單獨一份課表,沒有路由 —— 網址根目錄 `/` 直接就是課表。
2026-10-19 起 · 12週 · 渣打馬拉松 2027-01-10。

## 為什麼要整包,不能只上傳 .jsx

`.jsx` 是 React 原始碼,瀏覽器看不懂,要先 build 成 HTML + JS。
這個資料夾就是完整的專案,直接推上去即可。

## Zeabur 部署

推到 GitHub 再接 Zeabur,會自動偵測 Vite,不用設定。
要手動指定的話:

- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

## 本機測試

```bash
npm install
npm run dev       # http://localhost:5173
npm run build
npm run preview
```

## 之後更新課表

只要覆蓋 `src/Tomak.jsx` 一個檔,其他都不用動。
`main.jsx` 是用 default import,不管裡面函式叫什麼名字都能接。

## 資料儲存

VDOT 微調、氣溫、濕度的設定存在瀏覽器 localStorage(key 開頭 `tomak:`)。
換裝置要重設一次。手機瀏覽器可能清除網站資料,建議加入書籤或主畫面。
