# Aditya Katyayan — Portfolio V3

Liquid-glass portfolio. Next.js + Tailwind + Framer Motion. Auto-deploys to GitHub Pages.

---

## You only need to do 4 things

### 1. Create the GitHub repo

Go to https://github.com/new and create a repo named exactly: **`PortfolioV3`**

(Make it **Public**. Skip the README/gitignore/license — leave them unchecked.)

### 2. Upload these files to the repo

**Option A — Easiest (drag & drop on GitHub web):**

1. After creating the empty repo, GitHub shows a page with an "uploading an existing file" link. Click it.
2. Drag every file and folder from this project into the upload box.
3. Scroll down, click **Commit changes**.

**Important:** GitHub's web upload sometimes flattens folders. If you see all files at the top level instead of inside `src/`, `.github/`, etc., use Option B instead.

**Option B — GitHub Desktop (no command line):**

1. Install https://desktop.github.com/
2. File → Clone repository → pick `PortfolioV3` → choose where to save.
3. Copy every file from this project into the cloned folder on your computer.
4. Open GitHub Desktop. It will show all the new files. Type a summary like "Initial portfolio" and click **Commit to main**.
5. Click **Push origin**.

### 3. Turn on GitHub Pages

1. On your repo page, go to **Settings** (top menu).
2. Click **Pages** (left sidebar).
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. That's it — no other settings to change.

### 4. Wait ~2 minutes, then visit your site

Go to the **Actions** tab on your repo. You'll see a workflow running called "Deploy to GitHub Pages". When it shows a green checkmark, your site is live at:

**https://adityakatyayan.github.io/PortfolioV3/**

---

## Common problems

**The Action failed (red X)** — Click the failed run, scroll to the error. Most common cause: your repo isn't named exactly `PortfolioV3` (case-sensitive). If your repo has a different name, edit `next.config.js` line 4: `const REPO_NAME = 'YourRepoName';` and re-push.

**Site loads but no images** — Asset URLs point at `https://raw.githubusercontent.com/adityakatyayan/PortfolioV3/main/...`. Make sure that's your actual GitHub username. If it's different, edit `src/lib/assets.ts` line 2 and replace `adityakatyayan` with your username, then re-push.

**404 on the live URL** — Pages takes a few minutes the first time. Check **Settings → Pages** — there should be a green "Your site is live at..." banner.

**I want to test locally first** — You'll need Node.js installed (https://nodejs.org). Then in this folder run:
```
npm install
npm run dev
```
Open http://localhost:3000.
