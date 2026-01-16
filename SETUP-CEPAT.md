# 🎯 SETUP SEDERHANA - File Inti Saja

## 📦 File yang Benar-Benar Diperlukan (11 File)

### Folder ROOT (7 file)
1. ✅ `package.json` - Dependencies
2. ✅ `next.config.js` - Next.js config
3. ✅ `tailwind.config.js` - Tailwind config
4. ✅ `postcss.config.js` - PostCSS config
5. ✅ `globals.css` - Global styles
6. ✅ `adnira-landing-page.jsx` - Main component
7. ✅ `.gitignore` - Git ignore

### File Tambahan (4 file)
8. ✅ `page.js` - Entry point
9. ✅ `layout.js` - Layout wrapper
10. ✅ `README-SIMPLE.md` - Panduan ini
11. ✅ `SETUP-CEPAT.md` - Panduan setup

---

## ⚡ SETUP SUPER CEPAT (Copy-Paste)

### 1. Buat Folder Struktur

```bash
mkdir adnira-landing-page
cd adnira-landing-page
mkdir -p app public/images
```

### 2. Copy File ke Tempatnya

```bash
# Copy ke folder app/
cp adnira-landing-page.jsx app/
cp globals.css app/
cp page.js app/
cp layout.js app/

# File config tetap di root
# (package.json, next.config.js, tailwind.config.js, postcss.config.js, .gitignore)
```

### 3. Install & Run

```bash
npm install
npm run dev
```

**Buka:** http://localhost:3000

---

## 📂 Struktur Akhir

```
adnira-landing-page/
│
├── 📂 app/
│   ├── adnira-landing-page.jsx    ← Main component
│   ├── globals.css                 ← Styles
│   ├── page.js                     ← Entry point
│   └── layout.js                   ← Layout
│
├── 📂 public/
│   └── 📂 images/
│       ├── hero-transport.jpg      ← Upload gambar Anda
│       ├── hero-technology.jpg     ← Upload gambar Anda
│       └── hero-payment.jpg        ← Upload gambar Anda
│
├── package.json                    ← Dependencies
├── next.config.js                  ← Next config
├── tailwind.config.js              ← Tailwind config
├── postcss.config.js               ← PostCSS config
└── .gitignore                      ← Git ignore
```

---

## 📸 Upload 3 Gambar (PENTING!)

Simpan di `public/images/`:
- `hero-transport.jpg` (Transportasi/Armada)
- `hero-technology.jpg` (Teknologi/IT)
- `hero-payment.jpg` (PPOB/Payment)

**Ukuran:** 1920 x 1080 px, < 500KB

**Optimasi:** https://squoosh.app

---

## ✏️ Kustomisasi Cepat

### Ganti Kontak
File: `app/adnira-landing-page.jsx`

Cari dan ganti:
- `info@adnira.com` → Email Anda
- `+62 xxx xxxx xxxx` → Telepon Anda
- `Jakarta, Indonesia` → Alamat Anda

### Ganti Warna
File: `tailwind.config.js`

```javascript
colors: {
  primary: {
    blue: '#3b82f6',  // Ganti warna biru
    red: '#ef4444',   // Ganti warna merah
  }
}
```

---

## 🚀 Deploy

### Vercel (Gratis & Mudah)
1. Push ke GitHub
2. Import di https://vercel.com
3. Auto-deploy!

### Atau via CLI:
```bash
npm install -g vercel
vercel
```

---

## ❌ File yang TIDAK Perlu

Abaikan/hapus file-file ini (opsional):
- ❌ `example-*` files
- ❌ `PANDUAN-*` (kecuali yang Anda butuhkan)
- ❌ `setup.sh` / `setup.bat`
- ❌ `PlaceholderImages.jsx`
- ❌ Files lain yang tidak disebutkan di atas

---

## ✅ Checklist

- [ ] 7 file config di root sudah ada
- [ ] 4 file di folder `app/` sudah ada
- [ ] 3 gambar di `public/images/` sudah diupload
- [ ] `npm install` sudah dijalankan
- [ ] `npm run dev` jalan tanpa error
- [ ] Website bisa dibuka di http://localhost:3000
- [ ] Kontak sudah diganti
- [ ] Warna sudah disesuaikan (opsional)

---

## 🆘 Troubleshooting

**Error: Cannot find module 'next'**
```bash
npm install
```

**Error: Port 3000 in use**
```bash
PORT=3001 npm run dev
```

**Gambar tidak muncul**
- Cek file ada di `public/images/`
- Nama file harus persis sama
- Refresh browser: Ctrl+F5

**Build error**
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## 🎉 Selesai!

**Hanya 11 file + 3 gambar = Website Jadi!**

Simple, mudah, tidak membingungkan! 🚀
