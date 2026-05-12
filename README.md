# Sanket Kamble Portfolio - Static HTML Version

This is a static HTML/CSS/JavaScript portfolio website that works perfectly on GitHub Pages and any web server.

## 🚀 Quick Setup

### Option 1: GitHub Pages (Recommended)
1. Fork or download this repository
2. Upload to your GitHub repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Local Development
1. Download all files to a folder
2. Open `index.html` in any modern web browser
3. Or use a local server: `python -m http.server 8000`

## 📁 File Structure

\`\`\`
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── README.md           # This file
├── images/             # Your images folder
│   ├── sanket-portrait.png
│   └── sanket-realistic.jpg
└── files/              # Documents folder
    └── sanket-kamble-resume.pdf
\`\`\`

## 🖼️ Adding Your Images

1. Create an `images` folder in the root directory
2. Add your profile pictures:
   - `sanket-portrait.png` (geometric/artistic version)
   - `sanket-realistic.jpg` (professional photo)
3. Create a `files` folder and add:
   - `sanket-kamble-resume.pdf`

**Note:** The portfolio works perfectly even without these files - it shows elegant placeholders until you add your images.

## ✨ Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Interactive Timeline**: Animated zigzag path on desktop
- **Smooth Animations**: Project tiles animate on scroll
- **Modal System**: Detailed project views with seamless transitions
- **Profile Picture Flip**: Hover and periodic rotation effects
- **Fallback System**: Graceful handling of missing images
- **Cross-browser Compatible**: Works in all modern browsers

## 🎨 Customization

### Colors
The main colors are defined in CSS variables:
- Primary: `#330033` (Dark purple)
- Secondary: `#FFD700` (Gold)
- Accent: `#f5f5f5` (Light gray)

### Projects
Edit the `projects` array in `script.js` to add/modify projects:

\`\`\`javascript
{
  id: 1,
  title: "Your Project Title",
  category: "Project Category",
  description: "Brief description",
  badge: "Your Role",
  year: "2024",
  image: "https://via.placeholder.com/400x200/330033/ffffff?text=Your+Project",
  details: {
    // Add detailed project information here
  }
}
\`\`\`

### Contact Information
Update the contact section in `index.html` and the click handlers in `script.js`.

## 🔧 Technical Details

- **No Build Process**: Pure HTML/CSS/JavaScript
- **No Dependencies**: Works without any external libraries
- **SEO Friendly**: Semantic HTML structure
- **Performance Optimized**: Minimal file sizes, efficient animations
- **Accessibility**: ARIA labels, keyboard navigation, screen reader friendly

## 📱 Responsive Behavior

- **Desktop (>1200px)**: Full timeline animation with zigzag path
- **Tablet (769-1200px)**: Grid layout, timeline hidden, notice shown
- **Mobile (≤768px)**: Single column, optimized for touch

## 🚀 Deployment Options

### GitHub Pages
- Zero configuration required
- Automatic HTTPS
- Custom domain support
- Free hosting

### Other Platforms
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **Surge.sh**: Command line deployment
- **Any Web Server**: Just upload the files

## 🐛 Troubleshooting

### Images Not Showing
1. Check file paths in the `images` folder
2. Ensure correct file names (case-sensitive)
3. Verify image formats (PNG, JPG, JPEG)

### Timeline Not Animating
1. Timeline only works on desktop (>1200px width)
2. Check browser console for JavaScript errors
3. Ensure all files are in the same directory

### Modal Not Opening
1. Check JavaScript console for errors
2. Ensure `script.js` is loaded correctly
3. Verify project data structure

## 📄 License

This portfolio template is free to use and modify for personal and commercial projects.

## 🤝 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify all files are in the correct locations
3. Test in different browsers
4. Check the file structure matches the documentation

---

**Ready to deploy!** This portfolio works exactly like the v0 preview and is optimized for GitHub Pages hosting.
\`\`\`

```plaintext file=".gitignore"
# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Editor files
.vscode/
.idea/
*.swp
*.swo
*~

# Logs
*.log

# Runtime data
pids
*.pid
*.seed

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Temporary folders
tmp/
temp/
