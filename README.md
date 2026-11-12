# tomakrun · 三份課表

純靜態 HTML，沒有任何建置步驟。Zeabur 讀到根目錄的 `zbpack.json` 就把整個目錄用 Caddy 靜態丟出去。

## 目錄結構

    tomakrun/
      index.html          ← tomak · Sub-3 馬拉松（2027/1/10）
      mini/index.html     ← mini 版本 · CT226 台東（2027/4/24）
      season/index.html   ← Season · IRONMAN 澎湖 226（2027/4/11）
      zbpack.json         ← 必須在根目錄
      README.md

網址：`/` → tomak　`/mini/` → mini　`/season/` → Season

## 推上去之前，根目錄要清掉兩個檔案

    vite.config.js      ← 刪掉（上次 build 失敗那一套的殘骸）
    mini/zbpack.json    ← 刪掉（Zeabur 只讀根目錄的，放在子目錄無效）

**根目錄不要有 `package.json` 或 `vite.config.js`**，否則 Zeabur 會偵測成 Node 專案去跑建置，然後失敗。

## 更新數據

每一份只要改一個常數，全頁的瓦數／配速會一起跟著變。

| 檔案 | 常數 | 下次更新 |
|---|---|---|
| `index.html` | `const PACE = {...}` 的 VDOT 等級 | 11/17 的 10km 實測 |
| `mini/index.html` | `const FTP = 125;` | W7 = 12/16 重測 |
| `season/index.html` | `const FTP = 203;` | W4 = 12/10 三鐵車測驗 |

## 打勾紀錄存在哪裡

- **tomak**：在 claude.ai 上開會用雲端同步；自架版自動退回 `localStorage`（只存在那一支手機）
- **mini / Season**：`localStorage`，只存在開啟的那個裝置，清快取或換手機就沒了

要跨裝置同步只能走 claude.ai 的版本。
