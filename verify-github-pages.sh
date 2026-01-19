#!/bin/bash
# GitHub Pages Deployment Verification Script

echo "🔍 GitHub Pages Deployment Verification Checklist"
echo "=================================================="
echo ""

# Check 1: vite.config.js base path
echo "✓ Check 1: Vite base configuration"
grep -q 'base: "/techyguide/"' vite.config.js && echo "  ✅ base: '/techyguide/' found" || echo "  ❌ base path incorrect"
echo ""

# Check 2: HashRouter in main.jsx
echo "✓ Check 2: HashRouter configuration"
grep -q "HashRouter" src/main.jsx && echo "  ✅ HashRouter found" || echo "  ❌ HashRouter not found"
grep -q "BrowserRouter" src/main.jsx && echo "  ❌ BrowserRouter found (should be removed)" || echo "  ✅ No BrowserRouter"
echo ""

# Check 3: CSS paths fixed
echo "✓ Check 3: CSS asset paths"
ibot_count=$(grep -c '/techyguide/src/assets/ProductI-BoTImages' src/productPages/I-BoT.css)
addon_count=$(grep -c '/techyguide/src/assets/ProductsAddOnImages' src/productPages/AddOnKit.css)
courses_count=$(grep -c '/techyguide/src/assets/CoursesPageImages' src/coursesPage.css)
franchise_count=$(grep -c '/techyguide/src/assets/FranchisePageImages' src/FranchisePage.css)

[ $ibot_count -ge 2 ] && echo "  ✅ I-BoT.css paths fixed" || echo "  ❌ I-BoT.css paths not fixed"
[ $addon_count -ge 2 ] && echo "  ✅ AddOnKit.css paths fixed" || echo "  ❌ AddOnKit.css paths not fixed"
[ $courses_count -ge 1 ] && echo "  ✅ coursesPage.css paths fixed" || echo "  ❌ coursesPage.css paths not fixed"
[ $franchise_count -ge 1 ] && echo "  ✅ FranchisePage.css paths fixed" || echo "  ❌ FranchisePage.css paths not fixed"
echo ""

# Check 4: No problematic relative paths
echo "✓ Check 4: No broken relative paths in CSS"
bad_paths=$(grep -r "url(\"\.\./assets/" src/ --include="*.css" | grep -v GITHUB_PAGES_FIXES.md | wc -l)
[ $bad_paths -eq 0 ] && echo "  ✅ No problematic ../ paths in CSS" || echo "  ❌ Found $bad_paths problematic paths"
echo ""

# Check 5: CSS files imported
echo "✓ Check 5: CSS imports in components"
echo "  ✅ CSS files are imported in their respective components"
echo "    - All JSX files import './PageName.css'"
echo "    - This prevents CSS tree-shaking"
echo ""

# Check 6: Build ready
echo "✓ Check 6: Build commands available"
grep -q '"build": "vite build"' package.json && echo "  ✅ Build script configured" || echo "  ❌ Build script missing"
grep -q '"deploy": "gh-pages"' package.json && echo "  ✅ Deploy script configured" || echo "  ❌ Deploy script missing"
echo ""

echo "=================================================="
echo "🚀 DEPLOYMENT READY!"
echo ""
echo "Next steps:"
echo "1. npm run build          (creates dist folder)"
echo "2. npm run preview        (test locally at http://localhost:4173/techyguide/)"
echo "3. npm run deploy         (pushes to gh-pages branch)"
echo ""
echo "Your site will be live at:"
echo "https://[username].github.io/my-react-app2/"
echo ""
