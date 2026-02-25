# 📦 入庫管理系統

一個簡單的箱子物品管理 Web App，支援 QR Code 掃描與物品拍照功能。

## ✨ 功能

- 📦 建立箱子，設定名稱與存放位置
- 📷 新增物品時可拍照記錄
- 🔲 每個箱子自動產生 QR Code，可下載列印
- 📱 內建 QR Code 掃描器，掃描即開啟箱子內容
- 🔍 全域搜尋箱子與物品
- 🖼️ 列表/圖片雙模式瀏覽
- 💾 資料儲存在瀏覽器 localStorage

## 🚀 部署到 Vercel（免費）

### 步驟 1：準備 GitHub 帳號

如果還沒有，到 [github.com](https://github.com) 註冊一個。

### 步驟 2：上傳專案到 GitHub

```bash
# 1. 安裝 Node.js（如果還沒有）
#    到 https://nodejs.org 下載安裝

# 2. 進入專案資料夾
cd box-inventory

# 3. 安裝套件
npm install

# 4. 本地測試（可選）
npm run dev

# 5. 初始化 Git 並推送
git init
git add .
git commit -m "Initial commit"

# 6. 在 GitHub 上建立新 repository（名稱隨意，例如 box-inventory）
#    然後推送：
git remote add origin https://github.com/你的帳號/box-inventory.git
git branch -M main
git push -u origin main
```

### 步驟 3：用 Vercel 部署

1. 到 [vercel.com](https://vercel.com) 用 GitHub 帳號登入
2. 點 **「Add New → Project」**
3. 選擇你的 `box-inventory` repository
4. Framework 自動偵測為 **Vite**，直接點 **Deploy**
5. 等約 30 秒，部署完成！

你會拿到一個網址，例如：
```
https://box-inventory-abc123.vercel.app
```

### 步驟 4：開始使用

1. 用手機打開該網址
2. 建立箱子 → 新增物品（可拍照）
3. 在箱子詳情頁點「顯示 QR Code」→ 下載列印
4. 把 QR Code 貼在實體箱子上
5. 之後用手機掃描即可查看內容！

## 📱 加到手機主畫面

在手機瀏覽器中打開網址後：
- **iPhone**: 點分享按鈕 → 「加入主畫面」
- **Android**: 點選單 → 「加至主畫面」

這樣就像一個原生 App 一樣！

## ⚠️ 注意事項

- 資料儲存在**瀏覽器的 localStorage**，清除瀏覽器資料會遺失
- 每個裝置的資料是**獨立的**，不會自動同步
- QR Code 掃描器需要 **Chrome 89+** 才支援自動偵測
- 也可以用手機內建相機掃描 QR Code，會自動開啟網頁

## 🔧 本地開發

```bash
npm install
npm run dev
```

## 📁 專案結構

```
box-inventory/
├── index.html          # 入口 HTML
├── package.json        # 套件設定
├── vite.config.js      # Vite 設定
├── public/
│   ├── favicon.svg     # 圖示
│   └── manifest.json   # PWA 設定
└── src/
    ├── main.jsx        # React 進入點
    ├── index.css       # 全域樣式
    ├── app.css         # 元件樣式
    ├── App.jsx         # 主應用程式
    ├── components.jsx  # 共用元件
    ├── Icons.jsx       # SVG 圖示
    ├── storage.js      # 資料儲存
    └── utils.js        # 工具函式
```
