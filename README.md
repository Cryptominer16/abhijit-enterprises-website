# Abhijit Enterprises — Official Website

Modern, mobile-first, and bilingual (English & मराठी) website for **Abhijit Enterprises** in Akluj, Solapur, Maharashtra.

## Key Features
- **Bilingual Interface:** Seamless English and Marathi (मराठी) client-side switching with `localStorage` memory and natural local phrasing.
- **High-Converting CTAs:**
  - Sticky header with quick "Call Now" (`tel:+918208361003`) and "WhatsApp Enquiry".
  - Floating WhatsApp action button with pulsing indicator.
  - Interactive Enquiry Form with automatic WhatsApp message formatting (zero leads lost without backend server setup).
  - Mobile bottom quick-action bar for smartphone users.
- **Services Catalog:**
  - Digital Colour & Mono Printing (Brochures, Flyers, Business Cards, Stationery)
  - Custom Royal Wedding Cards & Invitations
  - Digital Die-Cutting & Finishing (Custom decals, short-run packaging)
  - High-Speed Bulk Document Scanning (A3/A4 records digitisation)
  - Government & Online Services (PAN Card applications, Digital Signatures / DSC)
  - Travel & Holiday Bookings (including Cordelia Cruises enquiry)
  - Office Stationery & Computer Accessories
- **Interactive Gallery:** Filterable portfolio showcase with lightbox popup.
- **Verified Local SEO:** Schema.org `LocalBusiness` JSON-LD structured data, Open Graph social cards, XML sitemap, and robots.txt.
- **GoDaddy cPanel Ready:** Zero dependencies, static HTML5/CSS3/ES6 JavaScript. Upload directly to `public_html` without Node.js.

## Directory Structure
```
ae website/
├── index.html                 # Homepage
├── about.html                 # About Us & Company Story
├── services.html              # Comprehensive Categorized Services
├── gallery.html               # Portfolio & Facilities with Lightbox
├── contact.html               # Contact, Map, Hours & Enquiry Form
├── privacy-policy.html        # Privacy Policy for Enquiry Data
├── 404.html                   # Custom Branded Error Page
├── sitemap.xml                # Search Engine Sitemap
├── robots.txt                 # Crawler Directives
├── assets/
│   ├── css/
│   │   └── style.css          # Responsive Stylesheet with Devanagari typography
│   ├── js/
│   │   ├── i18n.js            # English & Marathi Translation Dictionary & Switcher
│   │   └── main.js            # Form Validation, WhatsApp generator, Lightbox & Nav
│   └── images/
│       ├── logo.svg           # Vector Brand Logo
│       ├── favicon.svg        # Vector Favicon
│       ├── hero-illustration.svg # Modern Print & Document Visual
│       ├── gallery-wedding.svg # Wedding Card Visual
│       ├── gallery-digital-press.svg # Digital Press Unit
│       ├── gallery-diecut.svg # Die-cut Labels Visual
│       ├── gallery-brochure.svg # Brochures Mockup
│       ├── gallery-scanner.svg # Production Scanner
│       └── gallery-cruise.svg  # Cruise Ship Visual
├── GODADDY_CPANEL_DEPLOYMENT.md  # Detailed GoDaddy cPanel Upload Instructions
├── OWNER_CONFIRMATION_CHECKLIST.md # Information Verification Checklist for Owner
└── WEBSITE_EDITING_GUIDE.md   # Step-by-Step Maintenance Guide
```

## Local Preview
You can open `index.html` directly in any web browser (Chrome, Edge, Firefox, Safari) or use a local static server:
```powershell
# Using Python
python -m http.server 8000

# Or open directly
Start-Process "index.html"
```

