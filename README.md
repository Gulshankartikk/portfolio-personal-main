# 💼 Gulshan Kumar - Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://your-portfolio-url.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](docs/LICENSE)

> A modern, responsive personal portfolio showcasing Full Stack MERN development expertise with smooth animations and professional design.

## 📸 Preview

### Hero Section
![Hero Section](docs/screenshots/hero-section.png)

### Projects
![Projects](docs/screenshots/projects-section.png)

### About & Skills
![About](docs/screenshots/about-section.png)

### Contact
![Contact](docs/screenshots/contact-section.png)

### Dark Mode
![Dark Mode](docs/screenshots/dark-mode.png)

## ✨ Features

- 🎨 Modern UI with dark/light theme toggle
- 📱 Fully responsive design
- ⚡ GSAP animations
- 🔍 SEO optimized
- 🚀 Fast performance

## 🛠️ Tech Stack

**Frontend:** HTML5, CSS3, JavaScript (ES6+)  
**Libraries:** GSAP, Ionicons  
**Deployment:** Vercel, Netlify, GitHub Pages

## 📁 Project Structure

```
portfolio-personal-main/
├── index.html              # Main HTML file
├── README.md               # Documentation
├── .gitignore             # Git ignore rules
│
├── assets/                # Static assets
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript files
│   ├── img/              # Images
│   └── resume/           # Resume PDF
│
├── config/               # Deployment configurations
│   ├── vercel.json      # Vercel config
│   ├── netlify.toml     # Netlify config
│   └── .vercelignore    # Vercel ignore rules
│
├── docs/                 # Documentation & screenshots
│   ├── screenshots/     # Portfolio screenshots
│   └── LICENSE          # MIT License
│
└── .github/              # GitHub workflows
    └── workflows/
        └── deploy.yml    # GitHub Pages deployment
```

## 🚀 Quick Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
vercel --prod
```

### Netlify
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select "GitHub Actions" as source
4. Workflow will auto-deploy

## 💻 Local Development

```bash
# Using Live Server (VS Code)
# Right-click index.html → Open with Live Server

# Using Python
python -m http.server 8000

# Using Node.js
npx http-server -p 8000
```

Visit: `http://localhost:8000`

## 🎨 Customization

1. **Personal Info:** Edit `index.html`
2. **Styling:** Modify `assets/css/portfolio.css`
3. **Images:** Replace files in `assets/img/`
4. **Resume:** Update `assets/resume/resume kartik.pdf`

## 📊 Deployment Platforms

| Platform | Deploy Time | Custom Domain | SSL |
|----------|-------------|---------------|-----|
| Vercel | 2 min | ✅ | ✅ |
| Netlify | 2 min | ✅ | ✅ |
| GitHub Pages | 3 min | ✅ | ✅ |
| Render | 3 min | ✅ | ✅ |
| Firebase | 4 min | ✅ | ✅ |

## 🐛 Troubleshooting

**Animations not working?**  
→ Check GSAP CDN is loading

**Theme not persisting?**  
→ Enable localStorage in browser

**Images not loading?**  
→ Verify paths in `index.html`

**404 on deployment?**  
→ Check config files in `config/` folder

## 📝 License

MIT License - see [docs/LICENSE](docs/LICENSE)

## 👤 Author

**Gulshan Kumar** - Full Stack MERN Developer

- 🌐 GitHub: [@Gulshankartikk](https://github.com/Gulshankartikk)
- 💼 LinkedIn: [Gulshan Kumar](https://www.linkedin.com/in/gulshan-kumar-192852378/)
- 📧 Email: gulshankartik09@gmail.com
- 🐦 Twitter: [@Gulshankartikk](https://twitter.com/Gulshankartikk)

## 🙏 Acknowledgments

- [GSAP](https://greensock.com/gsap/) - Animations
- [Ionicons](https://ionicons.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography

---

**Built with ❤️ by Gulshan Kumar** | *Last Updated: December 2025*

⭐ Star this repo if you like it!
