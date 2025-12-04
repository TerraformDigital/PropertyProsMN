# Property Pros MN - Design Brief

## Overview

A professional, mobile-first website for a drywall contractor serving central Minnesota. The design balances appeal to homeowners seeking residential services with B2B credibility for general contractors looking for reliable subcontractors.

**Design Direction:** Clean, professional trade contractor aesthetic inspired by the HandyHub template - modern without being trendy, trustworthy without being boring.

---

## Brand Colors

### Primary Palette (from logo)

| Color | Hex | RGB | Tailwind | Usage |
|-------|-----|-----|----------|-------|
| **Property Blue** | `#1a6091` | 26, 96, 145 | `blue-700` approx | Primary CTA, links, accents |
| **Property Black** | `#0f0f0f` | 15, 15, 15 | `gray-950` | Headlines, primary text |
| **White** | `#ffffff` | 255, 255, 255 | `white` | Backgrounds, reverse text |

### Extended Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Dark Navy** | `#0c1829` | Dark section backgrounds (like HandyHub) |
| **Light Blue** | `#e8f4fc` | Subtle blue backgrounds, hover states |
| **Light Gray** | `#f8fafc` | Alternate section backgrounds |
| **Medium Gray** | `#64748b` | Secondary text, captions |
| **Success Green** | `#16a34a` | Trust badges, positive indicators |
| **Border Gray** | `#e2e8f0` | Borders, dividers |

### Color Application Rules

1. **Dark sections** use `#0c1829` background with white/light text
2. **CTAs** use Property Blue (`#1a6091`) with white text
3. **Links** use Property Blue, darken on hover
4. **Headlines** use Property Black on light backgrounds, white on dark
5. **Body text** uses `#334155` (slate-700) for readability

---

## Typography

### Font Stack

| Purpose | Font | Fallback | Weight |
|---------|------|----------|--------|
| **Headings** | Inter | system-ui, sans-serif | 600-700 |
| **Body** | Inter | system-ui, sans-serif | 400-500 |
| **Accent/Labels** | Inter | system-ui, sans-serif | 500-600, uppercase, tracked |

*Note: Using Inter for both maintains consistency and reduces load. The template uses Montserrat/Geist but Inter is more versatile and already in Tailwind.*

### Type Scale (Desktop)

| Element | Size | Line Height | Weight | Tracking |
|---------|------|-------------|--------|----------|
| H1 | 3.5rem (56px) | 1.1 | 700 | -0.02em |
| H2 | 2.5rem (40px) | 1.2 | 700 | -0.01em |
| H3 | 1.875rem (30px) | 1.3 | 600 | normal |
| H4 | 1.5rem (24px) | 1.4 | 600 | normal |
| H5 | 1.25rem (20px) | 1.4 | 600 | normal |
| H6 | 1rem (16px) | 1.5 | 600 | normal |
| Body Large | 1.125rem (18px) | 1.7 | 400 | normal |
| Body | 1rem (16px) | 1.7 | 400 | normal |
| Body Small | 0.875rem (14px) | 1.6 | 400 | normal |
| Caption | 0.75rem (12px) | 1.5 | 500 | 0.05em |
| Label | 0.75rem (12px) | 1 | 600 | 0.1em, uppercase |

### Mobile Adjustments

- H1: 2.5rem (40px)
- H2: 2rem (32px)
- H3: 1.5rem (24px)
- Body remains 1rem

---

## Spacing System

Using Tailwind's default scale with these common patterns:

| Name | Value | Usage |
|------|-------|-------|
| Section Padding | `py-16 md:py-24` | Vertical padding for page sections |
| Container Max | `max-w-7xl` | Content width (1280px) |
| Container Padding | `px-4 md:px-6 lg:px-8` | Horizontal container padding |
| Card Gap | `gap-6 md:gap-8` | Grid gaps |
| Stack Gap (tight) | `space-y-4` | Related content |
| Stack Gap (loose) | `space-y-8` | Section content |

---

## Components

### Buttons

**Primary Button**
```
bg-[#1a6091] text-white px-6 py-3 rounded-md font-semibold 
hover:bg-[#15507a] transition-colors
```

**Secondary Button (Outline)**
```
border-2 border-[#1a6091] text-[#1a6091] px-6 py-3 rounded-md font-semibold
hover:bg-[#1a6091] hover:text-white transition-colors
```

**Dark Background Button**
```
bg-white text-[#0c1829] px-6 py-3 rounded-md font-semibold
hover:bg-gray-100 transition-colors
```

### Cards

**Service Card**
```
bg-white rounded-lg shadow-sm border border-gray-100 p-6
hover:shadow-md transition-shadow
```

**Testimonial Card**
```
bg-white rounded-lg p-6 shadow-sm
```

**Stat Card (on dark)**
```
text-center
  - Number: text-4xl font-bold text-white
  - Label: text-sm text-gray-400 uppercase tracking-wider
```

### Form Inputs

```
w-full px-4 py-3 border border-gray-300 rounded-md
focus:ring-2 focus:ring-[#1a6091] focus:border-[#1a6091] 
placeholder:text-gray-400
```

### Navigation

**Desktop**
- Logo left, nav links center-right, CTA button far right
- Links: `text-gray-700 hover:text-[#1a6091]`
- Sticky header with white background, subtle shadow on scroll

**Mobile**
- Logo left, hamburger right
- Full-screen overlay menu
- Phone number sticky at bottom

---

## Page Layouts

### Homepage Structure

1. **Hero Section** (dark navy background)
   - Split layout: content left, image right
   - H1 headline
   - Subhead paragraph
   - Primary CTA button
   - Trust stats row: Years | Projects | Rating

2. **Value Proposition** (white background)
   - Centered heading with label above ("WHY CHOOSE US")
   - Large statement text
   - CTA button

3. **Services Grid** (light gray background)
   - Section label + H2
   - 2x3 grid of service cards (icons, title, description, link)
   - "View all services" link

4. **Social Proof Strip** (dark navy)
   - Full-width image with overlay
   - Bold statement
   - CTA button

5. **Testimonials** (white background)
   - Section label + H2
   - Carousel or 4-card grid
   - Client name, photo, quote, rating

6. **Team Section** (light gray background)
   - Section label + H2
   - Team member cards with photos
   - Brief bio/role

7. **Contact CTA** (white background)
   - Split: form on right, image + content on left
   - H2: "Get in touch with us today"
   - Form fields: Name, Phone, Email, Service dropdown, Message

8. **Footer** (dark navy)
   - Logo, company description
   - Quick links columns
   - Social media links
   - Copyright, privacy links

### Service Page Structure

1. **Hero** (dark navy, shorter)
   - H1: Service name
   - CTA button
   - Stats row

2. **Full-width image** (hero photo of that service)

3. **Benefits Grid** (white)
   - 2x2 grid of benefit cards
   - Icon, title, description

4. **Service Detail** (light gray)
   - Image left, content right
   - H3: Specific service
   - Description
   - CTA

5. **Sub-services Accordion** (white)
   - H2 left, accordion right
   - Expandable list of included services

6. **Contact Form** (same as homepage)

### B2B Contractor Page (Special)

1. **Hero with contractor-focused messaging**
   - "Your Reliable Drywall Subcontractor"
   - Trust signals: Licensed, Insured, Bonded

2. **Why Partner With Us**
   - Response time
   - Capacity/crew info
   - Insurance cert availability
   - Communication style

3. **Project Types** (what GC work they handle)

4. **Current Partnerships** (if they share)

5. **Contractor Contact Form**
   - Company name field
   - "Typical project size" dropdown
   - "How did you hear about us"

---

## Image Guidelines

### Photography Style
- Professional, well-lit job site photos
- Show craftsmanship and detail
- Workers in action (real team preferred)
- Before/after comparisons
- Clean, finished results

### Image Dimensions

| Usage | Ratio | Min Size |
|-------|-------|----------|
| Hero images | 16:9 | 1920x1080 |
| Service cards | 4:3 | 800x600 |
| Team photos | 1:1 | 600x600 |
| Blog thumbnails | 16:9 | 1200x675 |
| Gallery images | Various | 1200px wide min |

### Unsplash Search Terms (for placeholders)
- "drywall installation"
- "construction worker"
- "home renovation"
- "plastering walls"
- "interior construction"
- "contractor working"

---

## Mobile-First Considerations

### Touch Targets
- Minimum 44x44px for all interactive elements
- Phone number tappable throughout

### Sticky Elements
- Header (compact on scroll)
- Phone CTA bar at bottom on mobile

### Performance
- Lazy load images below fold
- Use WebP with fallbacks
- Critical CSS inlined

### Forms
- Large input fields (min 48px height)
- Select dropdowns native on mobile
- Autofill support

---

## Trust Signals to Include

### Above the Fold
- Years in business
- Star rating (if available)
- Licensed & Insured badge

### Throughout Site
- MN Contractor License number
- Insurance/bonding mention
- Google review count/rating
- Testimonials with real names/photos
- Project photo gallery
- Team photos

### Footer
- License number
- Service area list
- Contact info

---

## Accessibility Requirements

- Color contrast minimum 4.5:1 for text
- All images have alt text
- Form labels properly associated
- Keyboard navigation works
- Focus states visible
- Skip to content link
- Semantic HTML throughout

---

## Implementation Notes

### Tailwind Config Customization

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': {
          blue: '#1a6091',
          'blue-dark': '#15507a',
          'blue-light': '#e8f4fc',
          black: '#0f0f0f',
          navy: '#0c1829',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  }
}
```

### Component Priority

Build in this order:
1. Typography & color tokens
2. Buttons
3. Form inputs
4. Cards (service, testimonial)
5. Navigation (mobile first)
6. Hero sections
7. Section layouts
8. Footer
9. Page templates

---

## Files Provided

- Logo: `property-pros-drywall-logo.png`
- Reference screenshots: HandyHub template pages
- Style guide: PDF + HTML

## Next Steps

1. Review and approve this design brief
2. Set up Astro + Tailwind + Sanity project
3. Build design system components
4. Implement homepage
5. Iterate based on feedback
6. Build remaining pages
