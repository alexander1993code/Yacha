---
name: yacha-design-system
description: >-
  Standard styling guidelines and design system for YACHA. Defines primary brand
  colors (#D72638 red, #103B5C navy blue, slate neutrals), primary CTA button classes,
  icon containers, category badges, and strictly prohibits the use of amber/yellow colors.
---

# YACHA Design System & UI Guidelines

This skill documents the design language, color palette, and component patterns established for the YACHA web application.

---

## 1. Brand Colors & Palette Rules

| Role | Color / Hex | Tailwind Token / Utility | Notes |
| :--- | :--- | :--- | :--- |
| **Primary Brand Red** | `#D72638` | `bg-[#D72638]`, `hover:bg-red-700`, `text-[#D72638]` | Used for Primary CTAs, active highlights, Fire Protection accents. |
| **Primary Brand Navy** | `#103B5C` | `bg-[#103B5C]`, `text-[#103B5C]` | Used for headers, hero gradients (`from-[#103B5C] to-[#0A273E]`), titles. |
| **Deep Dark Blue** | `#0A273E` / `bg-blue-950` | `bg-[#0A273E]`, `bg-blue-950` | Used for dark sections, high hierarchy specialty containers. |
| **Neutrals (Slate)** | Slate palette | `text-slate-900`, `text-slate-600`, `bg-slate-50`, `border-slate-200` | Clean typography, subtle borders and light card backgrounds. |
| **Success / WhatsApp** | Emerald | `bg-emerald-600 hover:bg-emerald-700 text-white` | Reserved strictly for WhatsApp buttons and success states. |

> [!CAUTION]
> **NO AMBER / YELLOW COLORS**: Do not use `amber-400`, `amber-500`, `amber-600`, `bg-amber-*`, or `border-amber-*`.
> Replace any previous amber usage with brand red (`#D72638`), brand navy (`#103B5C`), or neutral slate (`slate-300` / `slate-600`).

---

## 2. Component Patterns

### A. Primary Action Buttons & CTAs (Hrefs / Links)
For high-priority actions ("Cotiza tu proyecto", "Conoce nuestras soluciones", form submit buttons):

```tsx
<Link
  href="/cotiza-tu-proyecto"
  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D72638] transition-all hover:bg-red-700 px-6 py-3.5 text-sm font-bold text-white shadow-md"
>
  <span>Cotiza tu proyecto</span>
  <ArrowRight className="h-4 w-4" />
</Link>
```

**Mobile / Compact Navbar CTA:**
```tsx
<Link
  href="/cotiza-tu-proyecto"
  className="rounded-lg bg-[#D72638] transition-all hover:bg-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-xs"
>
  Cotiza tu proyecto
</Link>
```

---

### B. Feature Icons & Hero Symbols
For prominent feature icons inside dark containers (e.g., hero cards, specialty highlights):

```tsx
<div className="h-16 w-16 mx-auto mb-4 rounded-2xl bg-blue-600/20 text-white flex items-center justify-center border border-white/10">
  <ShieldCheck className="h-8 w-8" />
</div>
```

On light backgrounds (e.g., contact channels, service feature list):
```tsx
<div className="h-10 w-10 rounded-xl bg-blue-100 text-[#103B5C] flex items-center justify-center mb-4">
  <Icon className="h-5 w-5" />
</div>
```

---

### C. Status Indicators & Dots
- **Bullet / Status Dot:**
  ```tsx
  <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500 mr-2 shrink-0" />
  ```
- **Category Badge (PCI / Especialidad):**
  ```tsx
  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-red-100 text-red-800">
    Especialidad
  </span>
  ```
- **Category Badge (Servicios Generales / Complementario):**
  ```tsx
  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
    Complementario
  </span>
  ```

---

### D. Breadcrumbs and Text Links on Dark Backgrounds
- On dark hero sections:
  ```tsx
  <Link href="/" className="hover:text-white transition">Inicio</Link>
  <ChevronRight className="h-3 w-3 text-slate-400" />
  <span className="text-slate-300 font-semibold">Sección Actual</span>
  ```
- Subtitle highlights on dark background:
  ```tsx
  <p className="text-base font-semibold text-slate-200 mb-3">
    Subtítulo descriptivo
  </p>
  ```

---

### E. Form Validation & Alert Banners
Use clear red alert styling instead of amber:
```tsx
{validationError && (
  <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl mb-6 text-xs flex items-center gap-2">
    <AlertCircle className="h-4 w-4 text-red-500 shrink-0" />
    <span>{validationError}</span>
  </div>
)}
```
