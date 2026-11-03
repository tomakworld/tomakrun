# CT226 單車課表 · 靜態單檔

一個 `index.html`，沒有 build、沒有依賴、沒有 node_modules。

## Zeabur 部署

1. 把這個資料夾推上 Git（只要 `index.html` 和 `zbpack.json`）
2. Zeabur → Add Service → Git → 選這個 repo
3. **什麼都不用設**

`zbpack.json` 的 `"output_dir": "."` 讓 Zeabur 跳過所有 build，直接用 Caddy 當純靜態站台。

**不要加 `package.json`** —— 一加上去 Zeabur 就會判定成 Node 專案去跑 build，那是會失敗的原因。

## 更新 FTP

`index.html` 裡搜尋這一行：

```js
const FTP = 120;
```

改成新的數字，全頁 21 種強度帶、區間表、比賽功率、頭部數字會一起更新。
重新推一次 Git 就好。

## 手機

用 Safari 開 → 分享鍵 → **加入主畫面**。會有自己的圖示、全螢幕、沒有網址列。

## 紀錄存在哪

打勾和備註存在**那支手機的瀏覽器裡**（localStorage）：

- 不需要帳號、不需要登入
- 關掉再開還在
- **不會跨裝置同步，也不會傳給教練**
- 清除瀏覽器資料就沒了

重要數據靠 Garmin，課表上的備註只是她自己的筆記。

## 字型

頁面從 Google Fonts 載 Barlow / JetBrains Mono。
如果網路環境連不到 Google Fonts，會自動退回系統字型 —— 版面不會壞，只是字型不同。

## 本機測試

```bash
python3 -m http.server 8080
```

直接雙擊檔案開也可以。
