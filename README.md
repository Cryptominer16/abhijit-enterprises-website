# Abhijit Enterprises — Official Website

[![CI/CD Pipeline](https://github.com/Cryptominer16/abhijit-enterprises-website/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/Cryptominer16/abhijit-enterprises-website/actions/workflows/ci-cd.yml)
[![Live Site](https://img.shields.io/badge/Live_Site-GitHub_Pages-brightgreen)](https://cryptominer16.github.io/abhijit-enterprises-website/)

Official, modern, mobile-first website for **Abhijit Enterprises** in Akluj, Solapur, Maharashtra.

- **GitHub Repository:** [https://github.com/Cryptominer16/abhijit-enterprises-website](https://github.com/Cryptominer16/abhijit-enterprises-website)
- **Live Preview / Staging (GitHub Pages):** [https://cryptominer16.github.io/abhijit-enterprises-website/](https://cryptominer16.github.io/abhijit-enterprises-website/)
- **Target Production Domain:** `https://www.abhijitenterprises.in` (GoDaddy cPanel)

---

## Key Features

1. **Bilingual Support (English & मराठी):**
   - Instant client-side language switch between English and Marathi.
   - Preserves layout, typography, and fonts across all screen sizes.

2. **In-House Machine & Equipment Showcase:**
   - **Xerox C9065:** Colour digital production press.
   - **Xerox D95:** Monochrome digital production press.
   - **Digital Die-Cutter:** Precision custom shapes, stickers, and finishing.
   - **High-Speed A3 Scanner:** Rapid colour & mono document digitisation.

3. **Multi-Service Catalog:**
   - Digital colour & mono printing
   - Digital die-cutting & custom packaging prototypes
   - Wedding cards & invitation printing
   - Business & office stationery
   - Bulk document scanning
   - PAN card assistance & digital signature certificates (DSC)
   - Travel & Cordelia cruise holiday bookings

4. **Conversion & Enquiry Channels:**
   - Direct click-to-call: `tel:+918208361003`
   - WhatsApp quick chat: `https://wa.me/918208361003`
   - Floating WhatsApp action button
   - GoDaddy cPanel enquiry form handler (`contact.php`) with verification.

5. **Automated CI/CD:**
   - Automated JavaScript syntax, link, and asset validation on every push/PR.
   - Continuous deployment to GitHub Pages.

---

## Directory Structure
```
ae website/
├── index.html                 # Main bilingual landing page
├── style.css                  # Responsive Navy & Gold stylesheet
├── script.js                  # Language switch (EN/MR) & navigation drawer
├── contact.php                # GoDaddy cPanel email enquiry handler
├── thank-you.html             # Form submission confirmation page
├── sitemap.xml                # Search Engine Sitemap
├── robots.txt                 # Search Engine Directives
├── .htaccess                  # Apache / cPanel HTTPS redirect & caching
├── assets/
│   ├── ae-logo.png            # Official Abhijit Enterprises logo
│   ├── machine-c9065.png      # Xerox C9065 press photo
│   ├── machine-d95.png        # Xerox D95 press photo
│   ├── digital-die-cutter.jpg # Digital die-cutter photo
│   └── a3-scanner.png         # High-speed A3 scanner photo
├── start-preview.bat          # 1-click Windows preview launcher
└── .github/workflows/
    └── ci-cd.yml              # GitHub Actions CI/CD pipeline
```

---

## How to Deploy to GoDaddy cPanel

1. Log in to your GoDaddy account and open **cPanel** for `abhijitenterprises.in`.
2. Open **File Manager** and enter the `public_html` directory.
3. Upload the website files directly into `public_html`.
4. Ensure SSL/HTTPS is active under **SSL/TLS Status** in cPanel.
5. In `contact.php`, verify your receiving email address (`info@abhijitenterprises.in`).
