# APYER – Christian Riley’s art site

Static website for past works with a preview of **Project APORIA**.  
Hosted via **GitHub Pages** at `https://apyer.com`.

## Tech
- Pure HTML/CSS/JS (no build step)
- JSON-driven gallery (`/assets/data/works.json`)
- Optional Formspree for contact/newsletter forms

## Project structure
apyer-site/
├─ index.html
├─ gallery.html
├─ about.html
├─ contact.html
├─ works/
│ ├─ catharsis-i.html
│ └─ anima-study.html
├─ assets/
│ ├─ css/styles.css
│ ├─ js/app.js
│ ├─ data/
│ │ ├─ works.json
│ │ └─ aporia.json
│ └─ img/
│ ├─ favicon.png
│ ├─ hero.jpg (and hero.webp)
│ ├─ aporia-preview.jpg
│ └─ works/
│ ├─ catharsis-i.jpg
│ ├─ catharsis-i_thumb.jpg
│ ├─ anima-study.jpg
│ └─ anima-study_thumb.jpg
├─ CNAME # contains: apyer.com
└─ .nojekyll # empty file

r
Copy code

## Local setup
No build needed. Open `index.html` in your browser, or use any static server:
```bash
# optional preview
python -m http.server 5173
Deploy (GitHub Pages)
Create repo apyer-site on GitHub under ChristianAR39.

Push code (see commands below).

In GitHub: Settings → Pages

Source: Deploy from a branch

Branch: main / (root)

In Settings → Pages → Custom domain: enter apyer.com.
GitHub will add/confirm the CNAME file.

Check Enforce HTTPS once DNS is live.

Custom domain (DNS)
At your domain registrar, set:

A records for apyer.com → GitHub Pages IPs
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

CNAME for www.apyer.com → ChristianAR39.github.io

Propagation can take a bit. Once active, HTTPS will auto-provision.

Content updates
Add works to /assets/data/works.json and images to /assets/img/works/.

Create a detail page in /works/ (copy an existing one).

Commit to main — Pages redeploys automatically.

Forms (optional)
Replace action="https://formspree.io/f/your-id" in index.html and contact.html
with your Formspree endpoint.

Image tips
Thumbnails: *_thumb.jpg around 800px width.

Full images: 1600–2000px width.

Use .webp where possible (keep .jpg fallback).

License
All artwork © Christian Riley. Site code MIT if you want to open source.

yaml
Copy code

---

### Create an empty `.nojekyll` file
.nojekyll
yaml
Copy code
*(This file is intentionally empty — it tells Pages not to run Jekyll.)*

---

### Git commands (for your repo)
```bash
cd apyer-site
git init
git add .
git commit -m "Initial commit: APYER site"
git branch -M main
git remote add origin https://github.com/ChristianAR39/apyer-site.git
git push -u origin main
DNS records to paste at your registrar
nginx
Copy code
# APEX (apyer.com)
A  @   185.199.108.153
A  @   185.199.109.153
A  @   185.199.110.153
A  @   185.199.111.153

# WWW
CNAME  www   ChristianAR39.github.io
