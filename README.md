# DesignOrbit

**Defining Digital Identity** — A premium digital agency landing page built with React + Vite.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

## 🏗 Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 📁 Project Structure

```
DesignOrbit/
├── index.html                    # HTML entry point (Google Fonts loaded here)
├── vite.config.js                # Vite config
├── package.json
├── public/                       # Static assets
└── src/
    ├── main.jsx                  # React root
    ├── App.jsx                   # Top-level layout
    ├── index.css                 # Global styles + CSS variables + keyframes
    ├── data/
    │   └── siteData.js           # All site content (services, projects, stack, etc.)
    ├── hooks/
    │   └── index.js              # useFadeUp, useScrolled, useHover, useCountUp, useCursor
    └── components/
        ├── UI.jsx / UI.module.css           # Shared: FadeUp, SectionLabel, Buttons, headings
        ├── Cursor.jsx / Cursor.module.css   # Custom animated cursor + ring
        ├── Navbar.jsx / Navbar.module.css   # Sticky nav with scroll blur + mobile menu
        ├── Hero.jsx / Hero.module.css       # Full-screen hero with orbit animation
        ├── Marquee.jsx / Marquee.module.css # Infinite scrolling ticker
        ├── Services.jsx / Services.module.css
        ├── Work.jsx / Work.module.css       # Portfolio grid with hover reveal
        ├── Stats.jsx / Stats.module.css     # Count-up animated stats
        ├── Stack.jsx / Stack.module.css     # Tech stack grid
        ├── Testimonials.jsx / Testimonials.module.css  # Carousel with dot switcher
        ├── CTA.jsx / CTA.module.css         # Full-screen call to action
        └── Footer.jsx / Footer.module.css
```

---

## 🎨 Design Tokens

All design tokens live in `src/index.css` as CSS custom properties:

| Variable    | Value     | Usage                    |
|-------------|-----------|--------------------------|
| `--bg`      | `#060608` | Primary background       |
| `--bg2`     | `#0b0b0e` | Secondary background     |
| `--fg`      | `#eceae3` | Primary text             |
| `--fg2`     | `#a0a09a` | Secondary text           |
| `--accent`  | `#e8ff47` | Lime green accent        |
| `--accent2` | `#ff6b35` | Orange secondary accent  |
| `--muted`   | `#2e2e35` | Muted/disabled           |
| `--border`  | `#16161c` | Border color             |
| `--card`    | `#0d0d11` | Card background          |

---

## ✨ Features

- **Custom animated cursor** — smooth lag-follow ring with hover scale
- **Scroll-triggered fade-ups** — IntersectionObserver-based entrance animations
- **Count-up stats** — animated number counter triggered on scroll
- **Infinite marquee** — CSS-animated ticker, pauses on hover
- **Orbit decoration** — CSS-animated rotating rings in the hero
- **Sticky navbar** — transparent → frosted glass on scroll
- **Mobile hamburger menu** — fullscreen overlay with large type
- **Testimonial carousel** — dot switcher with animated transitions
- **Hover-reveal cards** — services and work cards with image zoom
- **CSS Modules** — zero class-name collisions, fully scoped styles
- **Responsive** — mobile breakpoints at 768px and 900px

---

## 🔧 Customization

### Change content
Edit `src/data/siteData.js` — all text, images, links, and labels are defined there.

### Change colors
Edit the `:root` block in `src/index.css`.

### Change fonts
Update the `<link>` in `index.html` and the `--font-*` variables in `src/index.css`.

---

## 📦 Dependencies

| Package             | Version  | Purpose         |
|---------------------|----------|-----------------|
| react               | ^18.2.0  | UI framework    |
| react-dom           | ^18.2.0  | DOM renderer    |
| vite                | ^5.0.8   | Build tool      |
| @vitejs/plugin-react| ^4.2.1   | JSX transform   |

No other runtime dependencies — zero bloat.

---

© 2026 DesignOrbit. All rights reserved.
