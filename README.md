# Surrender

A web app to help you make better decisions by letting friends or fate guide your choices.

## Deployment Instructions

### First Time Setup

1. Clone the repository:
```bash
git clone https://github.com/ninajlu/surrender.git
cd surrender
```

2. Install dependencies:
```bash
npm install
```

3. Make sure your repository settings are correct:
   - Go to your GitHub repository Settings > Pages
   - Under "Build and deployment":
     - Source: "Deploy from a branch"
     - Branch: "gh-pages" / "/ (root)"

### Deploying Updates

1. Make your changes to the code

2. Commit your changes:
```bash
git add .
git commit -m "Description of your changes"
git push origin main
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

4. Wait a few minutes for GitHub Pages to update
   - Your site will be live at: https://ninajlu.github.io/surrender/

### Troubleshooting

If the deployment isn't working:

1. Clean the cache and rebuild:
```bash
# Remove old build files
rm -rf dist

# Clean gh-pages cache
rm -rf node_modules/.cache/gh-pages

# Rebuild and deploy
npm run build
npm run deploy
```

2. Check that all required files are present:
   - vite.config.ts has `base: '/surrender/'`
   - package.json has the correct homepage URL
   - App.tsx uses HashRouter for GitHub Pages compatibility

## Development

To run the app locally:

```bash
npm run dev
```

Visit `http://localhost:5173/surrender/` in your browser.

### Required Assets

Place these files in the `public` directory:
- `playstore.png` - The main app icon
- `surrender.mp4` - App demo video for the iPhone frame (converted from .mov) 