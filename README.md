# NovaStudio — Premium Web Tasarım Stüdyosu Showroom Sitesi

Premium, satış odaklı web tasarım stüdyosu sitesi.
**Vite + React + TypeScript + Three.js (React Three Fiber) + GSAP + Lenis + Framer Motion + Tailwind CSS** ile geliştirildi. GitHub Pages üzerinde **domainsiz** yayınlanmaya hazırdır.

🌐 Yayın URL'i: `https://KULLANICI_ADI.github.io/webstudio-showroom/`

## Özellikler

- 🖥️ Hero'da DOM tabanlı gerçekçi browser + mobil mockup kompozisyonu (mouse tilt, yüzen rozetler) + arka planda hafif 3D partikül/grid atmosferi
- 🎞️ GSAP ScrollTrigger ile yatay kayan Showroom vitrini (mobilde snap-scroll)
- 🌍 TR / EN dil seçeneği (localStorage'da hatırlanır, varsayılan TR)
- 💎 Premium glassmorphism, yumuşak gölgeler, magnetic butonlar
- 📱 Tam responsive — mobilde 3D sahne otomatik hafifletilir
- ♿ `prefers-reduced-motion` desteği ve erişilebilirlik (aria, focus state, semantic HTML)
- 🔍 SEO: title, description, OpenGraph meta tagları

## Base Ayarı (önemli)

`vite.config.ts` koşullu base kullanır — **lokalde değiştirmeniz gereken bir şey yok**:

```ts
base: command === "build" ? "/webstudio-showroom/" : "/"
```

- Geliştirme: `http://localhost:5173/` (düz root)
- Production build: asset yolları `/webstudio-showroom/` altında üretilir (GitHub Pages uyumlu)
- Repo adınız farklıysa sadece `"/webstudio-showroom/"` kısmını kendi repo adınızla değiştirin.

## Kurulum & Yayınlama

```bash
# 1. Bağımlılıkları kur
npm install

# 2. Geliştirme sunucusunu başlat → http://localhost:5173/
npm run dev

# 3. Production build al
npm run build

# 4. GitHub Pages'e yayınla (gh-pages branch'ine push eder)
npm run deploy
```

> `npm run deploy` öncesinde projenin bir GitHub reposuna bağlı olması gerekir:
> ```bash
> git init
> git remote add origin https://github.com/KULLANICI_ADI/webstudio-showroom.git
> git branch -M main
> git push -u origin main
> ```

**Son adım:** GitHub repo ayarları → **Settings → Pages** → Source: **`gh-pages` branch**. Site birkaç dakika içinde `https://KULLANICI_ADI.github.io/webstudio-showroom/` adresinde yayında olur.

## GitHub Pages Uyumluluğu

- **Routing yok / 404 sorunu yok:** Tek sayfalık (SPA) bölüm-scroll yapısı, anchor (`#hero`, `#services`...) navigasyonu. Sayfa yenilenince 404 vermez.
- **Asset yolları:** Vite `base` ayarına uyumlu üretilir.
- **`dist` klasörü** doğrudan `gh-pages` branch'ine deploy edilir.

## Proje Yapısı

```
src/
  i18n/                 # TR/EN sözlükler + LanguageContext
  data/                 # hizmetler, paketler, yorumlar, SSS, showroom verileri
  components/
    three/              # 3D arka plan (HeroScene, ParticleField, GridFloor)
    sections/           # Sayfa bölümleri (Hero, Services, Showroom, Process, ...)
    ui/                 # Navbar, HeroMockup, MagneticButton, Toast, CursorFollower
  hooks/                # useLenis (smooth scroll + ScrollTrigger sync), useMediaQuery
  styles/globals.css    # Tailwind v4 tema + premium utility'ler
```

## Özelleştirme

- **Metinler:** `src/i18n/tr.ts` ve `src/i18n/en.ts`
- **Hizmet / paket / yorum / SSS içerikleri:** `src/data/*.ts`
- **Renk paleti:** `src/styles/globals.css` içindeki `@theme` bloğu
- **Marka adı:** `Navbar.tsx`, `Footer.tsx` ve `index.html`

## Performans Notları

- Three.js sahnesi `React.lazy` ile ayrı chunk olarak yüklenir
- Canvas `dpr` 1.75 ile sınırlandırılmıştır
- Mobilde partikül sayısı 450 → 150'ye düşürülür
- `prefers-reduced-motion` aktifse smooth scroll, kamera animasyonu ve pin'li scroll devre dışı kalır
