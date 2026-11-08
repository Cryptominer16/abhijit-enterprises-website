# GoDaddy cPanel Deployment Guide
**Website:** Abhijit Enterprises (https://www.abhijitenterprises.in)

This website is built with lightweight, zero-dependency HTML5, CSS3, and vanilla JavaScript. It requires **no Node.js build process** on the server, making it 100% compatible with standard GoDaddy Linux / cPanel hosting.

---

## 1. Preparing the Files for Upload

1. On your computer, open the `ae website` folder.
2. Select all website files and folders:
   - `index.html`
   - `about.html`
   - `services.html`
   - `gallery.html`
   - `contact.html`
   - `privacy-policy.html`
   - `404.html`
   - `sitemap.xml`
   - `robots.txt`
   - `assets/` (folder containing `css/`, `js/`, and `images/`)
3. Right-click and choose **Send to → Compressed (zipped) folder** (e.g. `abhijit-website.zip`).

---

## 2. Uploading via GoDaddy cPanel File Manager

1. **Log in to GoDaddy:** Go to [godaddy.com](https://www.godaddy.com) and log in to your account.
2. **Access Web Hosting:** Under **My Products**, scroll to **Web Hosting** and click **Manage** next to your hosting plan.
3. **Open cPanel:** Click **cPanel Admin** button.
4. **Open File Manager:**
   - In cPanel, find the **Files** section and click **File Manager**.
5. **Navigate to `public_html`:**
   - Double-click the `public_html` folder in the left sidebar or file list.
   - *Note:* If this is your primary domain (`abhijitenterprises.in`), `public_html` is the root folder.
   - If there is an existing default `index.html` or `placeholder.html` from GoDaddy, rename it or delete it.
6. **Upload the ZIP File:**
   - Click the **Upload** button in the top toolbar.
   - Select or drag-and-drop `abhijit-website.zip`.
   - Wait for the progress bar to turn green (100%).
7. **Extract the Files:**
   - Return to the File Manager in `public_html`.
   - Right-click `abhijit-website.zip` and select **Extract** (or click **Extract** in the top menu).
   - Confirm the target directory is `/public_html`.
   - Once extracted, make sure `index.html` is located directly in `public_html` (not inside a nested subfolder).
   - You can safely delete `abhijit-website.zip` afterwards to save space.

---

## 3. Configuring Free SSL / HTTPS on GoDaddy

To ensure visitors see the secure padlock icon (`https://www.abhijitenterprises.in`):

1. In **cPanel**, search for **SSL/TLS Status** (or **AutoSSL** / **Let's Encrypt**).
2. Select `abhijitenterprises.in` and `www.abhijitenterprises.in`.
3. Click **Run AutoSSL** (or install the free GoDaddy / cPanel certificate).
4. **Force HTTPS Redirect (Recommended):**
   - In cPanel File Manager, ensure **Show Hidden Files** is checked (under Settings top-right).
   - In `public_html`, look for `.htaccess` (or create a new file named `.htaccess`).
   - Add the following rewrite rules to automatically redirect HTTP traffic to HTTPS:

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

5. Save the `.htaccess` file.

---

## 4. Testing Your Live Website

After upload, open a browser and test:
- [ ] Visit `https://www.abhijitenterprises.in`
- [ ] Test mobile responsiveness by opening the site on an Android or iOS smartphone.
- [ ] Click the **Call Now** button (`+91 82083 61003`) to verify phone dialer opens.
- [ ] Click the **WhatsApp Enquiry** floating button and ensure WhatsApp opens with the pre-filled enquiry text.
- [ ] Test language toggle: switch between **English** and **मराठी** and verify text across sections.
- [ ] Fill out the Contact form on `contact.html` and click **Send via WhatsApp** to confirm enquiry opens cleanly.

