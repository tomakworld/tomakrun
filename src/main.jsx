import React from "react";
import { createRoot } from "react-dom/client";
import TomakPlan from "./Tomak.jsx";

/* 單一課表,沒有路由 —— 網址根目錄 "/" 直接就是 tomak 版本。
   之後要更新課表,只要覆蓋 src/Tomak.jsx,這個檔不用動。 */
createRoot(document.getElementById("root")).render(<TomakPlan />);
