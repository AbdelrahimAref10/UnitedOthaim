# Quick Start: Deploy to GitHub Pages

## 🚀 Quick Steps

### 1. Enable GitHub Pages (One-time setup)
- Go to your repo → **Settings** → **Pages**
- Set **Source** to: `GitHub Actions` (NOT "Deploy from a branch")
- Click **Save**

### 2. Check Your Repository Name

**If your repo is named `username.github.io`:**
- ✅ You're done! Base href is already set to `/`
- Just push and deploy

**If your repo is NOT `username.github.io` (e.g., `UnitedOthaim`):**
- Your site will be at: `https://username.github.io/UnitedOthaim/`
- You need to update the base href:

**Update `angular.json`:**
```json
"github-pages": {
  "baseHref": "/UnitedOthaim/",  // Change this to your repo name
  ...
}
```

**Update `src/index.html`:**
```html
<base href="/UnitedOthaim/">  <!-- Change this to your repo name -->
```

### 3. Push to GitHub

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 4. Wait for Deployment

- Go to **Actions** tab in GitHub
- Wait for "Deploy to GitHub Pages" workflow to complete
- Your site will be live at the URL shown in **Settings** → **Pages**

## ⚠️ Common Issues

**"Page not found" error:**
- Check that base href matches your repository name
- Make sure GitHub Pages source is set to "GitHub Actions"

**Assets not loading:**
- Verify base href is correct (must end with `/`)

**Routes not working:**
- The 404.html file should be created automatically
- Check Actions tab for build errors

## 📝 Need More Help?

See `GITHUB_PAGES_SETUP.md` for detailed instructions.
