# Masineni Frnd — Design System & Style Guide

## 1. Locked Color Palette
- **Warm Cream (Background / Surface)**: `#FFF8EC`
- **Tomato Red (Primary Accent / Call to Action / Non-Veg Indicator)**: `#F45135`
- **Fresh Orange (Secondary Accent / Badges / Highlights)**: `#FF9F43`
- **Golden Yellow (Stars / Glow / Warm Accents)**: `#FFD166`
- **Leaf Green (Veg Indicator / Health / Freshness Badges)**: `#70AD47`
- **White (Card Surface / Clean Sections)**: `#FFFFFF`
- **Soft Peach (Subtle Card Background / Hover Tint)**: `#FFE5D4`

### Text & Neutral Tokens
- **Text Main**: `#1E2229` (High-contrast charcoal for pristine legibility on cream/white)
- **Text Muted**: `#5A6270` (Balanced secondary contrast)
- **Border Subtle**: `#F1E3D0` (Soft warm border)
- **Shadow Soft**: `0 10px 30px -5px rgba(244, 81, 53, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)`
- **Shadow Hover**: `0 20px 35px -8px rgba(244, 81, 53, 0.16), 0 8px 16px -4px rgba(0, 0, 0, 0.06)`

## 2. Typography
- **Heading Font**: `'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif` (Bold, friendly, modern premium feel)
- **Body Font**: `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Scale**:
  - `Hero Display`: 3.25rem (52px) to 4rem (64px) / Line-height 1.15 / Weight 800
  - `Heading 1`: 2.5rem (40px) / Line-height 1.2 / Weight 700
  - `Heading 2`: 1.875rem (30px) / Line-height 1.3 / Weight 700
  - `Heading 3`: 1.35rem (22px) / Line-height 1.4 / Weight 600
  - `Body Large`: 1.125rem (18px) / Line-height 1.6 / Weight 400-500
  - `Body Regular`: 1rem (16px) / Line-height 1.6 / Weight 400
  - `Caption / Small`: 0.875rem (14px) / Line-height 1.5 / Weight 500
  - `Badge / Label`: 0.75rem (12px) / Line-height 1.2 / Weight 700, Uppercase, letter-spacing +0.05em

## 3. Spacing Patterns
- `space-xs`: 4px (0.25rem)
- `space-sm`: 8px (0.5rem)
- `space-md`: 16px (1rem)
- `space-lg`: 24px (1.5rem)
- `space-xl`: 32px (2rem)
- `space-2xl`: 48px (3rem)
- `space-3xl`: 64px (4rem)
- `space-4xl`: 96px (6rem)

## 4. Component Styling Rules
- **Buttons**:
  - `primary`: Background `#F45135`, Text `#FFFFFF`, Hover `#E03E22`, rounded pill/radius 12px, subtle transition 200ms.
  - `secondary`: Background `#FFE5D4`, Text `#F45135`, Border 1.5px solid `#FF9F43`, Hover `#FF9F43` with text `#FFFFFF`.
  - `outline`: Border 2px solid `#F45135`, Text `#F45135`, Background transparent, Hover `#F45135` text `#FFFFFF`.
  - `ghost`: Transparent, Text `#1E2229`, Hover `#FFE5D4`.
- **Cards**:
  - Background `#FFFFFF` or `#FFF8EC` with subtle warm border `1px solid #F1E3D0`.
  - Border-radius: `18px` to `24px`.
  - Hover: translate-y (-4px to -6px), elevated shadow with warm tint.
- **Badges**:
  - Veg Badge: Border `1.5px solid #70AD47`, square with green dot.
  - Non-Veg Badge: Border `1.5px solid #F45135`, square with red triangle/dot.
  - Category Badge: Pill-shaped, background `#FFE5D4`, text `#F45135`, font-weight 600.
- **Visual Tone**:
  - Bright, welcoming, authentic hospitality, warm daylight vibes.
  - No dark mode, no harsh pure blacks, generous padding and breathe room.
