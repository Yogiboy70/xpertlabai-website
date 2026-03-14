# Xpert Lab AI — Website
### xpertlabai.com | Cloudflare Pages

---

## File Structure

```
xpertlabai-website/
├── index.html                   ← Homepage
├── about.html                   ← About page
├── contact.html                 ← Contact page
├── _redirects                   ← Cloudflare Pages URL redirects
├── css/
│   └── styles.css               ← All shared styles
├── js/
│   └── main.js                  ← Nav, scroll reveal, form handling
├── assets/
│   └── images/                  ← Drop your logo and images here
│       ├── logo.svg             ← Your logo file (add when ready)
│       └── founder.jpg          ← Founder photo (add when ready)
└── products/
    ├── xpert-ats.html
    ├── xpert-iq.html
    ├── xpert-closr.html
    └── ai-accelx.html
```

---

## Adding Your Logo

1. Drop your logo file into `assets/images/` — name it `logo.svg` or `logo.png`
2. In each HTML file, find the nav logo block:
   ```html
   <!-- Replace img src with your logo file -->
   <!-- <img src="assets/images/logo.svg" alt="Xpert Lab AI" /> -->
   <span class="nav__logo-text">Xpert <span class="nav__logo-accent">Lab</span> AI</span>
   ```
3. Uncomment the `<img>` tag and remove the `<span>` text logo
4. For product pages, the path is `../assets/images/logo.svg`

---

## Deploying to Cloudflare Pages

### Step 1 — Push to GitHub
```bash
cd xpertlabai-website
git init
git add .
git commit -m "Initial site launch"
git remote add origin https://github.com/Yogiboy70/xpertlabai-website.git
git branch -M main
git push -u origin main
```

### Step 2 — Connect to Cloudflare Pages
1. Go to **dash.cloudflare.com → Pages → Create a project**
2. Connect GitHub → select `Yogiboy70/xpertlabai-website`
3. Framework preset: **None**
4. Build command: *(leave blank)*
5. Build output: *(leave blank — root directory)*
6. Click **Save and Deploy**

### Step 3 — Connect Your Domain
1. In Pages project → **Custom domains → Set up a custom domain**
2. Enter: `xpertlabai.com`
3. Cloudflare will auto-configure DNS (since domain is already on Cloudflare)
4. Also add `www.xpertlabai.com` and set it to redirect to `xpertlabai.com`

---

## Adding a Founder Photo

1. Add your photo to `assets/images/founder.jpg`
2. In `about.html`, find the founder portrait div and uncomment the img tag:
   ```html
   <img src="assets/images/founder.jpg" alt="Yogesh, Founder — Xpert Lab AI" />
   ```

---

## Contact Form Integration

The form currently shows a success message on submit. To wire it to a real backend:

**Option A — Formspree (simplest)**
1. Sign up at formspree.io
2. Create a form → get your endpoint URL
3. In `contact.html`, change `<form class="form" id="contactForm">` to:
   ```html
   <form class="form" id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
4. Remove the `e.preventDefault()` from `main.js`

**Option B — EmailJS**
Sign up at emailjs.com — allows sending directly from the browser without a backend.

---

## Future Updates

- To update content: edit the relevant HTML file and push to GitHub. Cloudflare deploys automatically.
- To add pages: create the HTML file following the same nav/footer pattern, add it to `_redirects` if needed.
- The `_redirects` file creates short URLs: `/ats` → `/products/xpert-ats.html` etc.

---

## Tech Stack
- Pure HTML, CSS, Vanilla JS — no build step, no dependencies
- Google Fonts: Cormorant Garamond + Nunito
- Hosted on Cloudflare Pages (free tier)
- GitHub repo: Yogiboy70/xpertlabai-website
