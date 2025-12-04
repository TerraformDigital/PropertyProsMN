# Property Pros MN - Claude Project Instructions

## Client Overview
**Business:** Property Pros MN  
**Industry:** Drywall contractor (residential + commercial)  
**Location:** Clear Lake, MN  
**Website:** propertyprosmn.com  

## Contact Info (Confirmed)
- **Phone:** 320-743-8388
- **GBP:** https://maps.app.goo.gl/diVRSVMhYAQP4aMX6
- **Domain:** propertyprosmn.com (has domain-based email)
- **Facebook:** (need URL)

## Business Focus
- Residential drywall services
- Commercial drywall services
- **B2B/Contractor services** - specifically want to get in front of general contractors for subcontractor work

## Tech Stack (Decided)
- **Frontend:** Astro
- **CMS:** Sanity (with Unsplash integration for stock photos)
- **Hosting:** Vercel
- **Repository:** GitHub
- **Development:** Claude Code
- **Styling:** Tailwind CSS

## Brand Colors (Extracted from Logo)
| Color | Hex | Usage |
|-------|-----|-------|
| Property Blue | `#1a6091` | Primary CTA, links, accents |
| Property Black | `#0f0f0f` | Headlines, primary text |
| Dark Navy | `#0c1829` | Dark section backgrounds |
| Light Blue | `#e8f4fc` | Subtle backgrounds, hover states |
| Light Gray | `#f8fafc` | Alternate section backgrounds |

## Typography
- **Font:** Inter (headings and body)
- **Headings:** 600-700 weight, tight tracking
- **Body:** 400-500 weight, 1.7 line height

## Design Direction
Modern, professional trade contractor aesthetic based on HandyHub template reference. Clean layouts with dark navy accent sections, card-based service presentation, prominent trust signals, and strong CTAs.

## Sanity Content Types
| Type | Purpose | Who Manages |
|------|---------|-------------|
| blogPost | Blog articles with SEO | Client |
| project | Portfolio gallery | Client |
| testimonial | Customer reviews | Client |
| author | Team members | Terraform sets up |
| category | Blog categories | Terraform sets up |
| service | Service offerings | Terraform sets up |
| serviceArea | Cities served | Terraform sets up |
| siteSettings | Company info (singleton) | Terraform sets up |

## Website Structure (Planned)
### Core Pages
- Home
- About Us
- Contact
- Request a Quote

### Service Pages
- Residential Services (/residential-drywall)
- Commercial Services (/commercial-drywall)
- Contractor Services (/contractor-services) - B2B focused
- Drywall Installation
- Drywall Repair
- Drywall Finishing
- Texture Services

### Local SEO
- Service Areas hub
- Location pages (Clear Lake, St. Cloud, etc.)

### Content
- Blog
- Projects/Gallery
- Testimonials

## Schema Markup Requirements
Implement structured data on all pages:
- LocalBusiness (HomeAndConstructionBusiness)
- Service schema for service pages
- Article schema for blog posts
- Review/AggregateRating for testimonials
- BreadcrumbList navigation
- FAQPage where applicable
- GeoCoordinates for service areas

## Information Still Needed
Refer to the intake spreadsheet for complete list. Key items:
- Legal business name and structure
- Year established
- Owner name(s) and bios
- MN contractor license number
- Insurance/bonding details
- Full service area list (cities/counties)
- Complete service offerings with details
- Logo files (PNG + vector)
- Brand colors (hex codes)
- Project photos (aim for 15-20+)
- Company story/history
- Customer testimonials
- Competitor info

## Development Notes
- Sanity schemas are pre-built and ready to deploy
- Unsplash plugin included for stock photos (no API key needed)
- All content types have SEO fields that auto-populate schema markup
- Featured toggles on projects/testimonials control homepage display
- Testimonials have approval workflow for moderation

## Agency Contact
**Terraform Digital** (Phil) - Sauk Rapids, MN
