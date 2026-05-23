/* ===================================
   PORTFOLIO - PROFESSIONAL JAVASCRIPT
   Modern, Clean & Interactive
   =================================== */

// ===== MOBILE MENU TOGGLE =====
const initMobileMenu = () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    if (navToggle && navMenu) {
        // Toggle menu on button click
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');

            // Animate icon
            const icon = navToggle.querySelector('ion-icon');
            if (icon) {
                icon.setAttribute('name', navMenu.classList.contains('show') ? 'close' : 'menu');
            }
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
                const icon = navToggle.querySelector('ion-icon');
                if (icon) {
                    icon.setAttribute('name', 'menu');
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('show');
                const icon = navToggle.querySelector('ion-icon');
                if (icon) {
                    icon.setAttribute('name', 'menu');
                }
            }
        });
    }
};

// ===== THEME TOGGLE =====
const initThemeToggle = () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Load saved theme
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
        body.setAttribute('data-theme', 'light');
        if (themeIcon) themeIcon.setAttribute('name', 'sunny');
    }

    // Toggle theme
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');

            if (currentTheme === 'light') {
                body.removeAttribute('data-theme');
                if (themeIcon) themeIcon.setAttribute('name', 'moon');
                localStorage.setItem('portfolio-theme', 'dark');
            } else {
                body.setAttribute('data-theme', 'light');
                if (themeIcon) themeIcon.setAttribute('name', 'sunny');
                localStorage.setItem('portfolio-theme', 'light');
            }
        });
    }
};

// ===== SMOOTH SCROLL =====
const initSmoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// ===== ACTIVE SECTION HIGHLIGHTING =====
const initActiveSection = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    const highlightNav = () => {
        const scrollY = window.pageYOffset;
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Call once on load
};

// ===== HEADER SCROLL EFFECT =====
const initHeaderScroll = () => {
    const header = document.querySelector('.header');

    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once on load
    }
};

// ===== SCROLL REVEAL ANIMATIONS =====
const initScrollReveal = () => {
    // Check if elements are in viewport
    const revealElements = document.querySelectorAll('.about__card, .project__card, .skill__category, .contact__card');

    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Call once on load
};

// ===== GSAP ANIMATIONS =====
const initGSAPAnimations = () => {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded. Skipping animations.');
        return;
    }

    // Create timeline
    const tl = gsap.timeline();

    // Overlay animations
    tl.to('.overlay.first', {
        duration: 1.5,
        top: '-100%',
        ease: 'expo.inOut',
        delay: 0.5
    })
        .to('.overlay.second', {
            duration: 1.5,
            top: '-100%',
            ease: 'expo.inOut'
        }, '-=1.3')
        .to('.overlay.third', {
            duration: 1.5,
            top: '-100%',
            ease: 'expo.inOut'
        }, '-=1.3')

        // Hero image
        .from('.hero__image', {
            opacity: 0,
            x: 60,
            duration: 2,
            ease: 'power3.out'
        }, '-=0.5')

        // Hero text (staggered)
        .from('.anime-text', {
            opacity: 0,
            y: 25,
            duration: 1.5,
            stagger: 0.2,
            ease: 'power3.out'
        }, '-=1.5')

        // Nav logo
        .from('.nav__logo', {
            opacity: 0,
            y: -25,
            duration: 1,
            ease: 'power3.out'
        }, '-=2')

        // Nav items
        .from('.nav__item', {
            opacity: 0,
            y: -25,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out'
        }, '-=1.5')

        // Social icons
        .from('.hero__social a', {
            opacity: 0,
            y: 25,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out'
        }, '-=1.5');
};

// ===== TYPING EFFECT FOR SUBTITLE =====
const initTypingEffect = () => {
    const subtitle = document.querySelector('.hero__subtitle');

    if (subtitle) {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        subtitle.style.opacity = '1';

        let index = 0;
        const typeSpeed = 100;

        const type = () => {
            if (index < text.length) {
                subtitle.textContent += text.charAt(index);
                index++;
                setTimeout(type, typeSpeed);
            }
        };

        // Start typing after a delay
        setTimeout(type, 2000);
    }
};

// ===== CURSOR EFFECT (Optional) =====
const initCursorEffect = () => {
    // Only on desktop
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
      width: 20px;
      height: 20px;
      border: 2px solid var(--primary-color);
      border-radius: 50%;
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.2s ease;
      display: none;
    `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.display = 'block';
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });

        // Scale on clickable elements
        const clickables = document.querySelectorAll('a, button, .btn');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
            });
        });
    }
};

// ===== LAZY LOADING IMAGES =====
const initLazyLoading = () => {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
};

// ===== SCROLL TO TOP BUTTON =====
const initScrollToTop = () => {
    // Create button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<ion-icon name="arrow-up"></ion-icon>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    z-index: 100;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(78, 17, 22, 0.3);
  `;
    document.body.appendChild(scrollBtn);

    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'translateY(-5px) scale(1.1)';
        scrollBtn.style.boxShadow = '0 6px 20px rgba(78, 17, 22, 0.5)';
    });

    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'translateY(0) scale(1)';
        scrollBtn.style.boxShadow = '0 4px 15px rgba(78, 17, 22, 0.3)';
    });
};

// ===== PERFORMANCE OPTIMIZATION =====
const debounce = (func, wait = 20) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// ===== INITIALIZE ALL =====
const init = () => {
    // Core functionality
    initMobileMenu();
    initThemeToggle();
    initSmoothScroll();
    initActiveSection();
    initHeaderScroll();

    // Animations
    initGSAPAnimations();
    initScrollReveal();

    // Optional features
    initScrollToTop();
    initLazyLoading();

    // Enable typewriter effect
    initTypingEffect();
    
    // Custom Upgrades
    initDebugSimulator();
    initDSAParts();
    
    // Optional: Uncomment if you want these features
    // initCursorEffect();
};

// ===== INTERACTIVE DEBUG SIMULATOR =====
const initDebugSimulator = () => {
    const btn = document.getElementById('btn-run-debugger');
    const codeArea = document.getElementById('terminal-code-area');
    const consoleLog = document.getElementById('terminal-console-log');
    const bugSemicolon = document.getElementById('bug-semicolon');

    if (!btn || !consoleLog || !bugSemicolon) return;

    let isDebugging = false;
    let isFixed = false;

    btn.addEventListener('click', () => {
        if (isDebugging) return;
        
        if (isFixed) {
            // Reset
            isFixed = false;
            bugSemicolon.textContent = '';
            bugSemicolon.className = 'error-highlight';
            bugSemicolon.style.background = 'rgba(255, 95, 86, 0.25)';
            bugSemicolon.style.borderBottom = '2px dashed #ff5f56';
            
            consoleLog.innerHTML = `
                <div class="terminal__console-line error">
                    <span class="keyword">[ERROR]</span> Compilation failed: Semicolon expected.
                </div>
                <div class="terminal__console-line info">
                    <span class="function">[DEBUGGER]</span> Ready. Click "Run Debugger" to execute automated correction scans.
                </div>
            `;
            btn.innerHTML = '🔧 Run Debugger';
            btn.classList.remove('btn--secondary');
            btn.classList.add('btn--primary');
            return;
        }

        isDebugging = true;
        btn.disabled = true;
        btn.innerHTML = '⚡ Scanning Layers...';

        consoleLog.innerHTML = `
            <div class="terminal__console-line info">
                <span class="function">[DEBUGGER]</span> Tracing abstraction layers (5 layers depth)...
            </div>
        `;

        const logs = [
            { text: 'Layer 1: Express Router verified.', type: 'info' },
            { text: 'Layer 2: CORS Middleware configurations verified.', type: 'info' },
            { text: 'Layer 3: Socket.io bidirectional channels verified.', type: 'info' },
            { text: 'Layer 4: MongoDB relational driver mapped.', type: 'info' },
            { text: 'Layer 5: Syntax anomaly found at route termination.', type: 'error' }
        ];

        let logIndex = 0;
        const printLog = () => {
            if (logIndex < logs.length) {
                const log = logs[logIndex];
                const prefix = log.type === 'error' ? '<span class="keyword">[WARNING]</span>' : '<span class="function">[INFO]</span>';
                consoleLog.innerHTML += `
                    <div class="terminal__console-line ${log.type}">
                        ${prefix} ${log.text}
                    </div>
                `;
                consoleLog.scrollTop = consoleLog.scrollHeight;
                logIndex++;
                setTimeout(printLog, 600);
            } else {
                // Perform fix
                setTimeout(() => {
                    bugSemicolon.textContent = ';';
                    bugSemicolon.className = '';
                    bugSemicolon.style.background = 'none';
                    bugSemicolon.style.borderBottom = 'none';
                    
                    consoleLog.innerHTML += `
                        <div class="terminal__console-line success">
                            <span class="function">[SUCCESS]</span> Hot-reloading... Missing semicolon auto-inserted!
                        </div>
                        <div class="terminal__console-line success">
                            <span class="function">[SUCCESS]</span> Compilation complete. Server listening on port 5000.
                        </div>
                    `;
                    consoleLog.scrollTop = consoleLog.scrollHeight;
                    
                    isDebugging = false;
                    isFixed = true;
                    btn.disabled = false;
                    btn.innerHTML = '🔄 Reset Code';
                    btn.classList.remove('btn--primary');
                    btn.classList.add('btn--secondary');
                }, 1000);
            }
        };

        setTimeout(printLog, 600);
    });
};

// ===== DSA METRICS PROGRESS BARS =====
const initDSAParts = () => {
    // Populate DSA topic card hovers dynamically (optional fallback)
    const cards = document.querySelectorAll('.dsa__topic-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Handle scroll reveal for progress fills
    const progressFills = document.querySelectorAll('.dsa__diff-progress-fill');
    
    const fillBars = () => {
        progressFills.forEach(fill => {
            const rect = fill.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                if (fill.classList.contains('easy')) {
                    fill.style.width = '40%';
                } else if (fill.classList.contains('medium')) {
                    fill.style.width = '45%';
                } else if (fill.classList.contains('hard')) {
                    fill.style.width = '15%';
                }
            }
        });
    };

    window.addEventListener('scroll', fillBars);
    setTimeout(fillBars, 500); // Call once initially
};

// ===== DOM READY =====
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ===== WINDOW LOAD =====
window.addEventListener('load', () => {
    // Remove any loading screens
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
    }
});

// ===== CONSOLE MESSAGE =====
console.log('%c👋 Welcome to my Portfolio!', 'color: #4E1116; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ by Gulshan Kumar', 'color: #666; font-size: 14px;');
console.log('%cInterested in the code? Check out my GitHub!', 'color: #4E1116; font-size: 12px;');
