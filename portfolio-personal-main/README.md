# 💼 Gulshan Kumar - Portfolio Website

A modern, responsive personal portfolio website showcasing my work as a Full Stack MERN Developer.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🌓 **Dark/Light Theme** - Toggle between themes with persistent preference
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Lightweight and optimized for speed
- 🎭 **GSAP Animations** - Smooth, professional animations
- 📧 **Contact Section** - Easy ways to get in touch
- 🚀 **SEO Optimized** - Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Interactive functionality
- **GSAP** - Animation library
- **Ionicons** - Icon library

## 📂 Project Structure

```
portfolio-personal-main/
├── assets/
│   ├── css/
│   │   ├── portfolio.css      # Main styles
│   │   ├── styles.css          # Additional styles
│   │   └── ui-fixes.css        # UI refinements
│   ├── js/
│   │   ├── portfolio.js        # Main JavaScript
│   │   └── main.js             # Additional scripts
│   ├── img/                    # Images
│   ├── resume/                 # Resume files
│   └── sass/                   # SASS source files
├── index.html                  # Main HTML file
├── vercel.json                 # Vercel deployment config
└── .vercelignore              # Vercel ignore file
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Gulshankartikk/portfolio-personal-main.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration from `vercel.json`
   - Click "Deploy"

3. **Configuration:**
   The `vercel.json` file is already configured to handle routing properly:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "index.html",
         "use": "@vercel/static"
       }
     ],
     "routes": [
       {
         "src": "/assets/(.*)",
         "dest": "/assets/$1"
       },
       {
         "src": "/(.*)",
         "dest": "/index.html"
       }
     ]
   }
   ```

### Alternative Deployment Options

#### Netlify
1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository

#### GitHub Pages
1. Go to repository Settings → Pages
2. Select branch `main` and root folder
3. Save and wait for deployment

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Gulshankartikk/portfolio-personal-main.git
   cd portfolio-personal-main
   ```

2. **Open in browser:**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using VS Code Live Server extension
     Right-click on index.html → Open with Live Server
     ```

3. **View in browser:**
   - Navigate to `http://localhost:8000` (or the port shown)

## 🎨 Customization

### Update Personal Information

1. **Edit `index.html`:**
   - Update name, title, and description in the hero section
   - Modify project details
   - Update contact information
   - Change social media links

2. **Update Styles:**
   - Main colors and theme in `assets/css/portfolio.css`
   - CSS custom properties at the top of the file

3. **Add/Update Projects:**
   - Edit the projects section in `index.html`
   - Add project images to `assets/img/`

### Theme Colors

Edit CSS custom properties in `portfolio.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... other colors */
}
```

## 📱 Sections

1. **Hero** - Introduction with CTA buttons
2. **Projects** - Showcase of featured and other projects
3. **About** - Personal information and skills
4. **Contact** - Contact information and social links
5. **Footer** - Additional links and information

## 🐛 Troubleshooting

### 404 Error on Vercel
- ✅ **Fixed!** The `vercel.json` configuration file handles all routing
- Ensure `vercel.json` is in the root directory
- Redeploy after adding the configuration

### Assets Not Loading
- Check that all paths use relative URLs (`./assets/...` or `assets/...`)
- Verify file names match exactly (case-sensitive on some servers)

### Theme Not Persisting
- Ensure JavaScript is enabled
- Check browser console for errors
- Clear browser cache and localStorage

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Gulshan Kumar**

- GitHub: [@Gulshankartikk](https://github.com/Gulshankartikk)
- LinkedIn: [Gulshan Kumar](https://www.linkedin.com/in/gulshan-kumar-192852378/)
- Email: kg8726321083@gmail.com

## 🙏 Acknowledgments

- [GSAP](https://greensock.com/gsap/) - Animation library
- [Ionicons](https://ionic.io/ionicons) - Icon library
- [Vercel](https://vercel.com) - Hosting platform

---

**Built with ❤️ by Gulshan Kumar**

© 2025 Gulshan Kumar. All rights reserved.
