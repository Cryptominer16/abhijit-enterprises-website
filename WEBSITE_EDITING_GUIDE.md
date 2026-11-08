# Website Maintenance & Editing Guide
**Abhijit Enterprises (Akluj, Maharashtra)**

This guide explains how the owner or administrator can easily edit website content, service lists, phone numbers, and photos.

---

## 1. How Text & Languages Work

All customer-facing text in the website is managed in two places:
1. **The HTML files** (`index.html`, `about.html`, `services.html`, etc.) for direct structure.
2. **The Bilingual Translation Dictionary:** `assets/js/i18n.js`.

### To change a piece of text (e.g. Phone Number, Address, Service description):
1. Open `assets/js/i18n.js` in any text editor (Notepad, VS Code, or cPanel File Manager Editor).
2. You will see two sections:
   - `en: { ... }` for English text
   - `mr: { ... }` for Marathi text
3. Find the text you wish to edit, update the string, and save the file.
4. If you also want to update the default fallback in the HTML files, open the corresponding `.html` file and change the text inside `<span data-i18n="key">...</span>`.

---

## 2. How to Update Phone Numbers & WhatsApp Links

To change the contact number from `+91 82083 61003`:

1. **In `assets/js/i18n.js`:**
   Search for `8208361003` and update the display phone text.
2. **In `assets/js/main.js`:**
   Find line 85:
   ```javascript
   const whatsappUrl = `https://wa.me/918208361003?text=${encodedText}`;
   ```
   Change `918208361003` to your new WhatsApp number.
3. **In the HTML files:**
   Search for `tel:+918208361003` and `wa.me/918208361003` and replace with your new number.

---

## 3. How to Add or Edit Services

1. Open `services.html`.
2. Each service category is inside a container with an `id` attribute:
   - `#printing` (Digital Printing)
   - `#finishing` (Die-Cutting)
   - `#scanning` (Document Scanning)
   - `#govt` (Government Online Services)
   - `#travel` (Travel & Cruises)
   - `#supplies` (Office Supplies)
3. To add a feature bullet point, duplicate one of the item blocks:
   ```html
   <div style="display: flex; gap: 10px; align-items: center; background: var(--bg-body); padding: 12px 16px; border-radius: var(--radius-md);">
     <svg viewBox="0 0 24 24" style="width: 18px; height: 18px; fill: var(--accent);"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
     <span>Your New Service Feature Name</span>
   </div>
   ```

---

## 4. How to Replace Placeholder Images with Real Photos

Photos are located in the `assets/images/` directory.

1. **Naming & Formats:**
   - Use standard formats: `.jpg`, `.png`, or `.webp`.
   - Keep filenames simple and descriptive (e.g. `shop-front.jpg`, `wedding-card-sample.jpg`).
2. **Recommended Image Sizes:**
   - Hero / Banners: `1200 x 800 px` (Under 250 KB)
   - Gallery Items: `800 x 600 px` (Under 180 KB)
   - Logo: Vector SVG or transparent PNG (`460 x 90 px`)
3. **Updating in `gallery.html`:**
   Find the item in `gallery.html` and replace the `src`:
   ```html
   <div class="gallery-item" data-category="cards">
     <div class="gallery-img-wrap">
       <img src="assets/images/my-real-wedding-card.jpg" alt="Wedding card sample">
       ...
     </div>
   ...
   </div>
   ```

