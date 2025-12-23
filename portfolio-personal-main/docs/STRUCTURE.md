# 📁 Portfolio Folder Structure

This document explains the organized folder structure of the portfolio project.

## 🗂️ Directory Tree

```
portfolio-personal-main/
│
├── 📄 index.html              # Main HTML file (Entry point)
├── 📄 README.md               # Project documentation
├── 📄 .gitignore             # Git ignore rules
├── 📄 vercel.json            # Vercel deployment config (root required)
├── 📄 netlify.toml           # Netlify deployment config (root required)
├── 📄 .vercelignore          # Vercel ignore rules (root required)
│
├── 📁 assets/                # All static assets
│   ├── 📁 css/              # Stylesheets
│   │   └── portfolio.css    # Main stylesheet
│   │
│   ├── 📁 js/               # JavaScript files
│   │   └── portfolio.js     # Main script
│   │
│   ├── 📁 img/              # Images & graphics
│   │   ├── second image.jpg
│   │   ├── taj mahal.jpg
│   │   └── third image.jpg
│   │
│   └── 📁 resume/           # Resume files
│       └── resume kartik.pdf
│
├── 📁 config/               # Deployment configurations (backup)
│   ├── vercel.json         # Vercel config (backup)
│   ├── netlify.toml        # Netlify config (backup)
│   └── .vercelignore       # Vercel ignore (backup)
│
├── 📁 docs/                 # Documentation & media
│   ├── 📄 LICENSE          # MIT License
│   │
│   └── 📁 screenshots/     # Portfolio screenshots
│       ├── hero-section.png
│       ├── projects-section.png
│       ├── about-section.png
│       ├── contact-section.png
│       └── dark-mode.png
│
└── 📁 .github/              # GitHub configurations
    └── 📁 workflows/
        └── deploy.yml       # GitHub Pages deployment workflow
```

## 📋 Folder Descriptions

### Root Level Files

| File | Purpose |
|------|---------|
| `index.html` | Main HTML file - entry point of the website |
| `README.md` | Project documentation with setup & deployment guides |
| `.gitignore` | Specifies files Git should ignore |
| `vercel.json` | Vercel deployment configuration (must be in root) |
| `netlify.toml` | Netlify deployment configuration (must be in root) |
| `.vercelignore` | Files to ignore during Vercel deployment |

### 📁 `assets/` - Static Assets

Contains all static resources used by the website.

#### `assets/css/`
- **Purpose:** Stylesheets
- **Files:** `portfolio.css` - Main stylesheet with all styling

#### `assets/js/`
- **Purpose:** JavaScript files
- **Files:** `portfolio.js` - Main script with animations & interactions

#### `assets/img/`
- **Purpose:** Images and graphics
- **Contents:** Profile photos, background images, etc.

#### `assets/resume/`
- **Purpose:** Downloadable resume
- **Files:** PDF version of resume

### 📁 `config/` - Deployment Configurations

Backup storage for deployment configuration files.

- **Purpose:** Keep deployment configs organized
- **Note:** Root copies are used for actual deployment
- **Contents:** Vercel, Netlify, and other platform configs

### 📁 `docs/` - Documentation & Media

Documentation and screenshot files.

#### `docs/LICENSE`
- **Purpose:** MIT License file
- **Type:** Legal documentation

#### `docs/screenshots/`
- **Purpose:** Portfolio preview images for README
- **Contents:** Screenshots of all major sections
- **Usage:** Referenced in README.md for visual preview

### 📁 `.github/` - GitHub Configurations

GitHub-specific configurations and workflows.

#### `.github/workflows/`
- **Purpose:** GitHub Actions workflows
- **Files:** `deploy.yml` - Automated deployment to GitHub Pages

## 🎯 Design Principles

### 1. **Separation of Concerns**
- Static assets in `assets/`
- Documentation in `docs/`
- Configs in `config/` (with root copies for deployment)

### 2. **Deployment Ready**
- Config files in root for platform compatibility
- Backup copies in `config/` folder

### 3. **Clean Root**
- Minimal files in root directory
- Only essential files at top level

### 4. **Logical Grouping**
- Related files grouped together
- Clear folder naming conventions

## 📝 File Naming Conventions

- **Folders:** lowercase, descriptive names
- **Config files:** Platform-specific names (e.g., `vercel.json`)
- **Assets:** descriptive names with extensions
- **Documentation:** UPPERCASE for important files (e.g., `README.md`, `LICENSE`)

## 🔄 Maintenance

### Adding New Assets
```bash
# Images
assets/img/new-image.jpg

# Stylesheets
assets/css/new-style.css

# Scripts
assets/js/new-script.js
```

### Adding Documentation
```bash
# Screenshots
docs/screenshots/new-screenshot.png

# Guides
docs/new-guide.md
```

### Adding Configurations
```bash
# New platform config
config/platform-name.json

# Copy to root if required for deployment
cp config/platform-name.json ./
```

## ✅ Benefits of This Structure

1. ✅ **Organized** - Everything has its place
2. ✅ **Scalable** - Easy to add new files
3. ✅ **Professional** - Industry-standard structure
4. ✅ **Deployment Ready** - Works with all platforms
5. ✅ **Maintainable** - Easy to find and update files
6. ✅ **Clean** - No clutter in root directory

---

**Last Updated:** December 2025  
**Maintained by:** Gulshan Kumar
