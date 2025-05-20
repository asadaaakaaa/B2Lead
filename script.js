document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        
        // Transform hamburger to X
        const spans = this.querySelectorAll('span');
        if (mobileNav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
    
    // Language switcher
    const languageSwitcher = document.querySelector('.language-switcher');
    const selectedLanguage = document.querySelector('.selected-language');
    
    selectedLanguage.addEventListener('click', function(e) {
        e.stopPropagation();
        languageSwitcher.classList.toggle('active');
    });
    
    // Close language dropdown when clicking outside
    document.addEventListener('click', function() {
        languageSwitcher.classList.remove('active');
    });
    
    // Language selection
    const languageOptions = document.querySelectorAll('.language-dropdown li');
    
    // Translations
    const translations = {
        en: {
            currentLang: 'English',
            about: 'About',
            services: 'Services',
            portfolio: 'Portfolio',
            clients: 'Clients',
            testimonials: 'Testimonials',
            contact: 'Contact',
            heroTitle: "We'll double your client flow in 30 days with precise digital marketing. No extra words — just results!",
            heroSubtitle: "Reliable digital marketing solutions to grow your business and strengthen your online presence.",
            getStarted: "Get Started",
            learnMore: "Learn More",
            aboutTitle: "About B2Lead",
            aboutDescription: "B2Lead is a reliable digital marketing agency that helps businesses grow, strengthen their online presence, and attract their target audience. We provide comprehensive digital marketing solutions tailored to your specific needs.",
            whyChooseUs: "Why Choose Us?",
            servicesTitle: "Our Services",
            servicesDescription: "We offer a comprehensive range of digital marketing services to help your business thrive online.",
            portfolioTitle: "Our Portfolio",
            portfolioDescription: "Explore our successful projects and case studies.",
            viewAllProjects: "View All Projects",
            clientsTitle: "Our Clients",
            clientsDescription: "Trusted by businesses across various industries.",
            testimonialsTitle: "Client Testimonials",
            testimonialsDescription: "See what our clients have to say about our services.",
            contactTitle: "Contact Us",
            contactDescription: "Get in touch with us to discuss your digital marketing needs.",
            contactInfo: "Contact Information",
            sendMessage: "Send Us a Message",
            name: "Name",
            email: "Email",
            phone: "Phone",
            message: "Message",
            submit: "Send Message",
            footerDescription: "Your reliable digital marketing partner for business growth and online success.",
            allRightsReserved: "All rights reserved."
        },
        ru: {
            currentLang: 'Русский',
            about: 'О нас',
            services: 'Услуги',
            portfolio: 'Портфолио',
            clients: 'Клиенты',
            testimonials: 'Отзывы',
            contact: 'Контакты',
            heroTitle: "Удвоим ваш поток клиентов за 30 дней с помощью точного digital-маркетинга. Без лишних слов — только результат!",
            heroSubtitle: "Надежные решения цифрового маркетинга для роста вашего бизнеса и укрепления онлайн-присутствия.",
            getStarted: "Начать",
            learnMore: "Узнать больше",
            aboutTitle: "О B2Lead",
            aboutDescription: "B2Lead — надежное агентство цифрового маркетинга, которое помогает бизнесу расти, укреплять свое онлайн-присутствие и привлекать целевую аудиторию. Мы предоставляем комплексные решения цифрового маркетинга, адаптированные к вашим конкретным потребностям.",
            whyChooseUs: "Почему выбирают нас?",
            servicesTitle: "Наши услуги",
            servicesDescription: "Мы предлагаем комплексный спектр услуг цифрового маркетинга, чтобы помочь вашему бизнесу процветать в интернете.",
            portfolioTitle: "Наше портфолио",
            portfolioDescription: "Изучите наши успешные проекты и кейсы.",
            viewAllProjects: "Посмотреть все проекты",
            clientsTitle: "Наши клиенты",
            clientsDescription: "Нам доверяют компании из различных отраслей.",
            testimonialsTitle: "Отзывы клиентов",
            testimonialsDescription: "Узнайте, что говорят наши клиенты о наших услугах.",
            contactTitle: "Свяжитесь с нами",
            contactDescription: "Свяжитесь с нами, чтобы обсудить ваши потребности в цифровом маркетинге.",
            contactInfo: "Контактная информация",
            sendMessage: "Отправить сообщение",
            name: "Имя",
            email: "Эл. почта",
            phone: "Номер телефона",
            message: "Сообщение",
            submit: "Отправить сообщение",
            footerDescription: "Ваш надежный партнер по цифровому маркетингу для роста бизнеса и успеха в интернете.",
            allRightsReserved: "Все права защищены."
        },
        uz: {
            currentLang: "O'zbek",
            about: 'Biz haqimizda',
            services: 'Xizmatlar',
            portfolio: 'Portfolio',
            clients: 'Mijozlar',
            testimonials: 'Sharhlar',
            contact: 'Aloqa',
            heroTitle: "Konversiani biz bilan oshiring!",
            heroSubtitle: "Biznesingizni o'stirish va onlayn mavjudligini mustahkamlash uchun ishonchli raqamli marketing yechimlari.",
            getStarted: "Boshlash",
            learnMore: "Batafsil",
            aboutTitle: "B2Lead haqida",
            aboutDescription: "B2Lead — biznesni o'stirishga, onlayn mavjudligini mustahkamlashga va maqsadli auditoriyani jalb qilishga yordam beradigan ishonchli raqamli marketing agentligi. Biz sizning o'ziga xos ehtiyojlaringizga moslashtirilgan keng qamrovli raqamli marketing yechimlarini taqdim etamiz.",
            whyChooseUs: "Nima uchun bizni tanlaysiz?",
            servicesTitle: "Bizning xizmatlarimiz",
            servicesDescription: "Biz biznesingizga internetda muvaffaqiyatli bo'lishga yordam berish uchun keng qamrovli raqamli marketing xizmatlarini taklif qilamiz.",
            portfolioTitle: "Bizning portfolio",
            portfolioDescription: "Bizning muvaffaqiyatli loyihalarimiz va case study'larimiz bilan tanishing.",
            viewAllProjects: "Barcha loyihalarni ko'rish",
            clientsTitle: "Bizning mijozlarimiz",
            clientsDescription: "Turli sohalardagi kompaniyalar bizga ishonadi.",
            testimonialsTitle: "Mijozlar sharhlari",
            testimonialsDescription: "Mijozlarimiz bizning xizmatlarimiz haqida nima deyishini ko'ring.",
            contactTitle: "Biz bilan bog'laning",
            contactDescription: "Raqamli marketing ehtiyojlaringizni muhokama qilish uchun biz bilan bog'laning.",
            contactInfo: "Aloqa ma'lumotlari",
            sendMessage: "Xabar yuborish",
            name: "Ism",
            email: "Email",
            phone: "Telefon raqamingiz",
            message: "Xabar",
            submit: "Xabar yuborish",
            footerDescription: "Biznes o'sishi va internet muvaffaqiyati uchun ishonchli raqamli marketing hamkoringiz.",
            allRightsReserved: "Barcha huquqlar himoyalangan."
        }
    };
    
    // Function to update content based on selected language
    function updateContent(lang) {
        // Update check mark position
        document.querySelectorAll('.current-lang-check').forEach(check => {
            check.style.display = 'none';
        });
        
        const selectedOption = document.querySelector(`.language-dropdown li[data-lang="${lang}"]`);
        if (selectedOption) {
            const checkmark = selectedOption.querySelector('.current-lang-check');
            if (checkmark) {
                checkmark.style.display = 'inline-block';
            }
        }
        
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Save language preference
        localStorage.setItem('language', lang);
    }
    
    // Set initial language based on localStorage or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';
    updateContent(savedLanguage);
    
    // Handle language selection
    languageOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            updateContent(lang);
            languageSwitcher.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Simple form validation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const phoneInput = document.getElementById('phone');
            const messageInput = document.getElementById('message');
            
            let isValid = true;
            
            if (!nameInput.value.trim()) {
                nameInput.style.borderColor = 'red';
                isValid = false;
            } else {
                nameInput.style.borderColor = '';
            }

            if (!phoneInput.value.trim()) {
                phoneInput.style.borderColor = 'red';
                isValid = false;
            } else {
                phoneInput.style.borderColor = '';
            }
            
            if (!messageInput.value.trim()) {
                messageInput.style.borderColor = 'red';
                isValid = false;
            } else {
                messageInput.style.borderColor = '';
            }
            
            if (isValid) {
                // In a real application, you would send the form data to a server
                alert('Form submitted successfully!');
                contactForm.reset();
            }
        });
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Add animation on scroll
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});