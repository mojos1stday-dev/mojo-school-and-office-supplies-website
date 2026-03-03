# Mojo Website — Handoff Guide

> Moving this project to another computer with the same Claude account.
> Written for non-coders. Every step is spelled out.

---

## Step 1: What You Need on the New Computer

Install these 3 things first. All are free.

### 1A. Install Node.js

This powers the local preview server.

1. Go to **https://nodejs.org**
2. Click the big green **"Download"** button (LTS version)
3. Open the downloaded file and follow the installer
4. When it's done, you can verify by opening Terminal and typing:

```
node --version
```

If you see a version number like `v20.x.x`, you're good.

---

### 1B. Install Git

This lets you download and sync the website code.

**On Mac:**
1. Open **Terminal** (search "Terminal" in Spotlight)
2. Type this and press Enter:

```
git --version
```

3. If Git is not installed, your Mac will prompt you to install it. Click **Install** and follow the prompts.

**On Windows:**
1. Go to **https://git-scm.com/downloads**
2. Download and install it (use all default settings)

---

### 1C. Install Claude Code

This is the AI assistant you've been using.

1. Open **Terminal** (Mac) or **Command Prompt** (Windows)
2. Copy-paste this and press Enter:

```
npm install -g @anthropic-ai/claude-code
```

3. Wait for it to finish. You'll know it's done when you see the cursor blinking again.
4. Log in with the same Anthropic/Claude account you're using now.

---

## Step 2: Download the Website Code

This pulls all the code from GitHub to your new computer.

1. Open **Terminal**
2. Navigate to where you want the project. For example, to put it on your Desktop:

```
cd ~/Desktop
```

3. Clone (download) the repo:

```
git clone https://github.com/mojos1stday-dev/mojo-school-and-office-supplies-website.git
```

4. Go into the project folder:

```
cd mojo-school-and-office-supplies-website
```

You should now have all the files: `index.html`, `style.css`, `script.js`, `products.html`, `products.js`.

---

## Step 3: Set Up the Dev Server Config

Claude Code needs a small config file to run the preview server. It wasn't uploaded to GitHub (on purpose), so we need to create it.

1. Still in Terminal, inside the project folder, run these 3 commands one by one:

```
mkdir -p .claude
```

```
cat > .claude/launch.json << 'EOF'
{
  "version": "0.0.1",
  "configurations": [
    {
      "name": "Mojo Website (serve)",
      "runtimeExecutable": "npx",
      "runtimeArgs": ["serve", "-p", "3000", "."],
      "port": 3000
    }
  ]
}
EOF
```

2. That's it. This creates the config file Claude Code uses to preview your site locally.

---

## Step 4: Make Sure You Can Push Changes

You need GitHub access so Claude can save changes for you.

1. In Terminal, test your connection:

```
git remote -v
```

You should see the GitHub URL. If you get permission errors when pushing later, you'll need to log in to GitHub. Run:

```
gh auth login
```

Or set up a Personal Access Token — if this comes up, just ask Claude Code to help you through it.

---

## Step 5: Start Claude Code

1. Make sure you're in the project folder in Terminal:

```
cd ~/Desktop/mojo-school-and-office-supplies-website
```

(Change the path if you put it somewhere else in Step 2.)

2. Start Claude Code:

```
claude
```

3. It will open. You're now ready to work.

---

## Step 6: Give Claude the Project Context

Since conversation history doesn't transfer between computers, copy-paste this message as your **first message** to Claude on the new computer:

---

> I'm continuing work on the Mojo School & Office Supplies website. Here's the full context:
>
> **What it is:** A static website (HTML/CSS/JS, no framework) for a school and office supplies store in Las Piñas, Metro Manila, Philippines.
>
> **Repo:** github.com/mojos1stday-dev/mojo-school-and-office-supplies-website
>
> **Brand:**
> - Primary blue: #0A82CF
> - Accent yellow: #FFC82C
> - Fonts: Inter (body) + Pacifico (logo)
> - Tagline: "Start with us." — the "us." is always yellow
>
> **Files:**
> - `index.html` — Homepage (hero, features, products preview, bulk orders, order form, contact, footer)
> - `style.css` — All styles
> - `script.js` — Homepage animations, mobile nav, Formspree form
> - `products.html` — Product catalog page with category filters
> - `products.js` — 25 products in a JS array with 6 categories, placeholder images for now
>
> **Important things to know:**
> - WhatsApp links MUST use `api.whatsapp.com/send?phone=639369571663` — NEVER use wa.me (it's blocked in the Philippines)
> - Formspree form ID: mojnokpn
> - Product photos are placeholders — real photos coming soon
> - Dev server: use `preview_start("Mojo Website (serve)")` on port 3000
>
> **Business info:**
> - Address: Unit 3C, 10 Rosal Street, Las Piñas, Philippines 1740
> - Phone: 0936 957 1663
> - Email: mojos1stday@gmail.com
> - Shopee: shopee.ph/mojo.sosupplies
> - Social: @mojo.sosupplies on FB, IG, TikTok

---

After pasting that, Claude will know everything and you can pick up right where we left off.

---

## What's Been Built So Far

| What | Status |
|---|---|
| Homepage with hero, features, trust badges | Done |
| Product preview section on homepage | Done |
| Direct order form (connected to Formspree) | Done |
| Bulk orders section with 8 use-cases | Done |
| TikTok Shop link + direct order benefits strip | Done |
| Separate product catalog page (25 products, 6 categories) | Done |
| Category filter (Writing, School & Office, Paper, Arts, Packaging, Bundles) | Done |
| WhatsApp order buttons on every product | Done |
| WhatsApp link fix for Philippine ISP blocking | Done |
| Mobile responsive across all pages | Done |
| Floating WhatsApp button | Done |
| Contact section with map, hours, social links | Done |
| Footer with all links | Done |

---

## Things Still To Do

- [ ] Upload real product photos (replace placeholders)
- [ ] Add more products (currently 25 out of 112+)
- [ ] Any copy or layout revisions you want
- [ ] Verify Shopee link: `shopee.ph/mojo.sosupplies`
- [ ] Verify Messenger link: `m.me/mojo.sosupplies`
- [ ] Consider PayMongo for checkout (future, not urgent)

---

## Things to Remember

1. **Never use wa.me links** — they're blocked in the Philippines. Always use `api.whatsapp.com/send`
2. **To add product photos later:** Put images in an `images/` folder, then in `products.js` change `img: ""` to `img: "your-photo.jpg"` for each product
3. **The site is hosted on GitHub Pages** — every time Claude pushes to GitHub, the live site updates automatically
4. **Formspree** handles the order form — submissions go to mojos1stday@gmail.com

---

## Quick Reference

| Thing | Value |
|---|---|
| GitHub Repo | `github.com/mojos1stday-dev/mojo-school-and-office-supplies-website` |
| Primary Blue | `#0A82CF` |
| Accent Yellow | `#FFC82C` |
| Font (Body) | Inter |
| Font (Logo) | Pacifico |
| WhatsApp Number | `639369571663` |
| WhatsApp Link Format | `https://api.whatsapp.com/send?phone=639369571663` |
| Formspree Form ID | `mojnokpn` |
| Dev Server | `npx serve -p 3000 .` |
| Shopee | `shopee.ph/mojo.sosupplies` |
