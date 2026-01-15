# KerjaAman - Review & Analisis Kontrak Kerja

Platform SaaS untuk review dan analisis kontrak kerja secara online. Website statis ini dibuat untuk tugas UAS IoT sebagai contoh implementasi ide produk SaaS.

## 📋 Deskripsi Project

**KerjaAman** adalah platform yang membantu fresh graduate, freelancer, dan karyawan memahami kontrak kerja mereka dengan mudah. Platform ini menyediakan:

- ✅ Review kontrak kerja otomatis
- ✅ Highlight pasal-pasal penting
- ✅ Analisis risiko real-time
- ✅ Penjelasan dalam bahasa sederhana
- ✅ Rekomendasi aksi konkret

## 🎯 Pain Point & Solusi

### Masalah:
- Banyak pekerja tidak memahami isi kontrak kerja
- Bahasa legal terlalu rumit
- Pasal-pasal merugikan pekerja
- Konsultasi lawyer mahal dan tidak praktis

### Solusi:
Website ini menyediakan simulasi UI/UX untuk platform review kontrak dengan teknologi AI (mockup untuk tugas).

## 📁 Struktur Project

```
uasiot/
├── index.html          # Landing page
├── fitur.html          # Halaman fitur lengkap
├── demo.html           # Demo interaktif
├── pricing.html        # Paket harga
├── tentang.html        # Tentang & kontak
├── README.md           # Dokumentasi
└── assets/
    ├── css/
    │   └── style.css   # Styling lengkap
    ├── js/
    │   ├── main.js     # JavaScript utama
    │   ├── demo.js     # Demo interaktif
    │   ├── pricing.js  # Pricing toggle
    │   └── tentang.js  # FAQ & form
    └── images/         # Folder untuk gambar
```

## 🚀 Fitur Website

### 1. Landing Page (index.html)
- Hero section dengan CTA
- Problem statement
- Features preview
- How it works
- Target users
- Call-to-action

### 2. Halaman Fitur (fitur.html)
- Review Kontrak Otomatis
- Highlight Pasal Penting
- Analisis Risiko Real-time
- Penjelasan Bahasa Sederhana

### 3. Demo Interaktif (demo.html)
- Upload kontrak (simulasi)
- Pilih jenis kontrak (PKWT/PKWTT/Freelance)
- Animasi analisis
- Hasil review dengan detail pasal
- Dashboard scoring

### 4. Pricing (pricing.html)
- Paket Free, Pro, Business
- Toggle billing (bulanan/tahunan)
- Comparison table
- FAQ harga

### 5. Tentang (tentang.html)
- About KerjaAman
- Misi & Visi
- Timeline perusahaan
- FAQ accordion
- Form kontak

## 💻 Teknologi

- **HTML5** - Struktur website
- **CSS3** - Styling dan animasi
- **Vanilla JavaScript** - Interaktivitas
- **Responsive Design** - Mobile-friendly

## 🎨 Design System

### Colors
- Primary: `#3b82f6` (Blue)
- Success: `#10b981` (Green)
- Warning: `#f59e0b` (Orange)
- Danger: `#ef4444` (Red)

### Typography
- Font: System fonts (Apple, Segoe UI, Roboto)
- Heading: Inter-based sans-serif

### Components
- Buttons (primary, secondary, outline)
- Cards (feature, pricing, testimonial)
- Forms (contact form)
- Navigation (sticky navbar)
- Footer

## 📱 Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🌐 Deploy ke GitHub Pages

### Cara Deploy:

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: KerjaAman website"
   git branch -M main
   git remote add origin https://github.com/username/kerjaaman.git
   git push -u origin main
   ```

2. **Aktifkan GitHub Pages**
   - Masuk ke repository Settings
   - Scroll ke bagian "Pages"
   - Source: pilih branch `main` dan folder `/root` atau `/uasiot`
   - Save

3. **Akses Website**
   - URL: `https://username.github.io/kerjaaman/`
   - atau `https://username.github.io/kerjaaman/uasiot/` (jika deploy dari subfolder)

### Cara Menjalankan Lokal:

1. **Buka langsung di browser**
   - Double click file `index.html`
   - Atau gunakan Live Server di VS Code

2. **Menggunakan Python HTTP Server**
   ```bash
   cd uasiot
   python -m http.server 8000
   ```
   Buka: `http://localhost:8000`

3. **Menggunakan VS Code Live Server**
   - Install extension "Live Server"
   - Right click `index.html` → Open with Live Server

## 📝 Catatan Penting

### Untuk Tugas:
- ✅ Website statis (HTML + CSS + JS)
- ✅ Tidak ada backend/database
- ✅ Simulasi UI/UX saja
- ✅ Siap deploy ke GitHub Pages

### Fitur Demo:
- Upload file (UI only, tidak ada real processing)
- Analisis (animasi simulasi)
- Hasil review (dummy data)
- Download report (simulasi)

## 🎓 Target Pengguna

1. **Fresh Graduate** - Belum berpengalaman dengan kontrak kerja
2. **Freelancer** - Butuh review cepat kontrak project
3. **Karyawan Kontrak** - Ingin memastikan hak-hak terlindungi
4. **HR UMKM** - Cek compliance kontrak dengan UU
5. **Startup Kecil** - Review kontrak sebelum hiring

## 📊 Paket Pricing

### Free
- 3 kontrak/bulan
- Review dasar
- Rp 0/bulan

### Pro (Most Popular)
- 20 kontrak/bulan
- Review lengkap + PDF export
- Rp 99.000/bulan

### Business
- Unlimited kontrak
- Multi-user + konsultasi lawyer
- Rp 299.000/bulan

## 🔗 Links

- Demo: [index.html](index.html)
- Fitur: [fitur.html](fitur.html)
- Pricing: [pricing.html](pricing.html)

## 👨‍💻 Developer

Dibuat untuk tugas UAS IoT - Pengembangan Ide Produk SaaS

---

## 📄 License

Project ini dibuat untuk keperluan edukasi (tugas kuliah).

---

**KerjaAman** - Pahami Kontrak Kerjamu Sebelum Tanda Tangan 🛡️
