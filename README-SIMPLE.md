# 🎯 FILE INTI - Yang Benar-Benar Diperlukan

## ✅ 8 File Wajib (INTI)

### 1. **adnira-landing-page.jsx** 
   - Main component website Anda
   - Sudah include carousel, services, about, footer

### 2. **package.json**
   - Daftar dependencies yang dibutuhkan
   - Scripts untuk run project

### 3. **next.config.js**
   - Konfigurasi Next.js

### 4. **tailwind.config.js**
   - Konfigurasi Tailwind CSS (warna, font, dll)

### 5. **postcss.config.js**
   - Konfigurasi PostCSS untuk Tailwind

### 6. **globals.css**
   - Global styles

### 7. **.gitignore**
   - File yang tidak perlu di-commit ke Git

### 8. **README-SIMPLE.md**
   - Panduan setup sederhana (file ini)

---

## 🚀 CARA SETUP (4 Langkah)

### Step 1: Buat Struktur Folder

```
adnira-landing-page/
├── app/
│   ├── adnira-landing-page.jsx
│   ├── globals.css
│   ├── page.js
│   └── layout.js
├── public/
│   └── images/
│       ├── hero-transport.jpg
│       ├── hero-technology.jpg
│       └── hero-payment.jpg
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

### Step 2: Copy File ke Folder yang Benar

```bash
# Buat folder
mkdir -p app public/images

# Copy file ke app/
cp adnira-landing-page.jsx app/
cp globals.css app/
```

### Step 3: Buat 2 File Tambahan di Folder app/

**app/page.js:**
```javascript
import AdniraLandingPage from './adnira-landing-page'

export default function Page() {
  return <AdniraLandingPage />
}
```

**app/layout.js:**
```javascript
import './globals.css'

export const metadata = {
  title: 'PT Adnira Dalil Anugrah',
  description: 'Solusi Transportasi, IT & PPOB Terpercaya',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
```

### Step 4: Install & Jalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka: **http://localhost:3000**

---

## 📸 Upload 3 Gambar

Simpan di **public/images/**:
1. `hero-transport.jpg` (1920x1080px, <500KB)
2. `hero-technology.jpg` (1920x1080px, <500KB)
3. `hero-payment.jpg` (1920x1080px, <500KB)

Optimasi di: https://squoosh.app

---

## 🎨 Kustomisasi

### Ganti Kontak
File: `app/adnira-landing-page.jsx`
- Cari: `info@adnira.com` → Ganti dengan email Anda
- Cari: `+62 xxx xxxx xxxx` → Ganti dengan telepon Anda

### Ganti Warna
File: `tailwind.config.js`
```javascript
colors: {
  primary: {
    blue: '#3b82f6',  // ← Ganti warna biru
    red: '#ef4444',   // ← Ganti warna merah
  }
}
```

---

## 🚀 Deploy

### Vercel (Paling Mudah)
1. Push ke GitHub
2. Import di https://vercel.com
3. Deploy otomatis!

---

## ❓ Troubleshooting

**Port 3000 sudah digunakan?**
```bash
PORT=3001 npm run dev
```

**Gambar tidak muncul?**
- Cek file di `public/images/`
- Refresh: Ctrl+F5

**Error saat install?**
```bash
rm -rf node_modules
npm install
```

---

## ✅ Selesai!

Hanya 8 file inti + 3 gambar = Website jadi! 🎉

**Butuh bantuan?** Lihat file-file di atas atau contact developer.
