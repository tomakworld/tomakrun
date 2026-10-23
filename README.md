# tomak Sub-3 課表

單一 HTML 檔，沒有建置步驟。推上 Git，Zeabur 會自動偵測成靜態站。
不用設 build command，沒有 package.json，不會出現 npm run build 失敗。

本機預覽：直接用瀏覽器開 index.html。

要改內容：最下面 `<script>` 區塊的 `W`（每週課表）、`PACE`（配速）、`STR`（重訓）、`ZONES` / `WX`。

打勾紀錄：claude.ai 版會存雲端、跨裝置同步。自架版沒有那個 API，自動退回瀏覽器 localStorage，只存在那台裝置。
