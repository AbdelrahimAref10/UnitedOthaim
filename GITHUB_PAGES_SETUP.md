# GitHub Pages Deployment Guide

This guide will help you deploy your Angular application to GitHub Pages.

## Prerequisites

1. Your code is already pushed to GitHub
2. You have a GitHub repository (e.g., `username/UnitedOthaim`)

## Step-by-Step Setup

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository on GitHub.com
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Source**: `GitHub Actions` (not "Deploy from a branch")
5. Click **Save**

### Step 2: Determine Your Base Href

**Important**: You need to set the correct `baseHref` based on your repository setup:

#### Option A: Project Repository (e.g., `username/UnitedOthaim`)
If your repository is NOT named `username.github.io`, your site will be at:
- URL: `https://username.github.io/UnitedOthaim/`
- Base Href: `/UnitedOthaim/`

#### Option B: User/Organization Repository (e.g., `username/username.github.io`)
If your repository IS named `username.github.io`, your site will be at:
- URL: `https://username.github.io/`
- Base Href: `/`

### Step 3: Update Base Href (If Needed)

If your repository is a **project repository** (not `username.github.io`), you need to update the base href:

1. Open `angular.json`
2. Find the `"github-pages"` configuration
3. Change `"baseHref": "/"` to `"baseHref": "/YourRepositoryName/"`

**Example**: If your repo is `john/UnitedOthaim`, change it to:
```json
"baseHref": "/UnitedOthaim/"
```

### Step 4: Update index.html Base Tag (If Needed)

If you changed the baseHref in Step 3, also update `src/index.html`:

```html
<base href="/YourRepositoryName/">
```

### Step 5: Push to GitHub

The GitHub Actions workflow will automatically:
1. Build your Angular app
2. Create a 404.html file for routing support
3. Deploy to GitHub Pages

```bash
git add .
git commit -m "Add GitHub Pages deployment configuration"
git push origin main
```

### Step 6: Wait for Deployment

1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. You should see a workflow running called "Deploy to GitHub Pages"
4. Wait for it to complete (usually 2-5 minutes)
5. Once complete, go back to **Settings** → **Pages**
6. Your site URL will be displayed there

## Troubleshooting

### Issue: "Page not found" error

**Solution**: This usually means:
1. The base href is incorrect - check Step 3
2. The 404.html file wasn't created - the build script should handle this automatically
3. GitHub Pages source is not set to "GitHub Actions" - check Step 1

### Issue: Assets (images, CSS) not loading

**Solution**: Check that your base href matches your repository structure. If your repo is `username/UnitedOthaim`, make sure baseHref is `/UnitedOthaim/`.

### Issue: Routes not working (404 on direct URL access)

**Solution**: The `404.html` file should handle this. Make sure:
1. The build script (`scripts/copy-404.js`) ran successfully
2. The `404.html` file exists in the `dist/united-othaim/browser/` folder after build

### Issue: Workflow fails

**Common causes**:
1. Node version mismatch - the workflow uses Node 20
2. Build errors - check the Actions tab for error messages
3. Missing dependencies - make sure `package.json` is up to date

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# Build for GitHub Pages
npm run build:github-pages

# The dist/united-othaim/browser folder contains your deployable files
# You can manually upload these to GitHub Pages or use gh-pages package
```

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain:
   ```
   yourdomain.com
   ```
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

## Notes

- The deployment happens automatically on every push to the `main` branch
- You can also trigger it manually from the Actions tab
- The site URL format depends on your repository name (see Step 2)
