// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Video Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const videoCards = document.querySelectorAll('.video-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            videoCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Event Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const topic = document.getElementById('topic')?.value;
            const message = document.getElementById('message').value;
            
            if (name && email && topic && message) {
                // Here you would typically send the form data to a server
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Dates remain optional; free-text field requires no extra handling

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Simple rotating gallery
    const belovedImages = [
        'beloved_images/20210626_145041_Original.JPG',
        'beloved_images/IMG_0463_Original.JPG',
        'beloved_images/IMG_20251101_183118712_MP~2_Original.JPG',
        'beloved_images/IMG_20251101_193739712_HDR_Original.JPG',
        'beloved_images/IMG_2920.jpeg',
        'beloved_images/IMG_2934.jpeg',
        'beloved_images/IMG_2941.jpeg',
        'beloved_images/IMG_2962.jpeg',
        'beloved_images/IMG_3010.jpeg',
        'beloved_images/IMG_3061.jpeg',
        'beloved_images/IMG_3120.jpeg',
        'beloved_images/IMG_3525.JPG',
        'beloved_images/IMG_3532.JPG',
        'beloved_images/IMG_4107.JPG',
        'beloved_images/IMG_7102_Original.JPG',
        'beloved_images/IMG_8797.jpeg',
        'beloved_images/PXL_20210626_035123431.MP~2_Original.jpg',
        'beloved_images/PXL_20210626_232008537.MP_Original.jpg',
        'beloved_images/PXL_20210626_232139665.MP_Original.JPG',
        'beloved_images/PXL_20210627_162842977_Original.JPG',
        'beloved_images/PXL_20210627_172225718.MP_Original.jpg',
        'beloved_images/PXL_20251101_233804099_Original.JPG',
        'beloved_images/PXL_20251101_234110411_Original.JPG',
        'beloved_images/PXL_20251102_014109026_Original.JPG'
    ];

    const belovedTeenImages = [
        'beloved_teen/IMG_0640.JPG',
        'beloved_teen/IMG_0693.JPG',
        'beloved_teen/IMG_0703.JPG',
        'beloved_teen/IMG_0706.JPG',
        'beloved_teen/IMG_3458.JPG',
        'beloved_teen/IMG_3512.JPG',
        'beloved_teen/IMG_3525.JPG',
        'beloved_teen/IMG_3532.JPG',
        'beloved_teen/IMG_3563.JPG',
        'beloved_teen/IMG_4107.JPG',
        'beloved_teen/IMG_4608.JPG',
        'beloved_teen/IMG_7347.jpeg',
        'beloved_teen/IMG_7351.jpeg',
        'beloved_teen/IMG_7571.jpeg',
        'beloved_teen/IMG_7572.jpeg',
        'beloved_teen/IMG_7573.jpeg',
        'beloved_teen/IMG_7576.jpeg',
        'beloved_teen/IMG_7600.jpeg',
        'beloved_teen/IMG_7612.jpg',
        'beloved_teen/IMG_8791.jpeg',
        'beloved_teen/IMG_8797.jpeg',
        'beloved_teen/IMG_9715.JPG'
    ];

    const belovedAdultImages = [
        'beloved_adult/20210625_202330_Original 2.JPG',
        'beloved_adult/20210625_202330_Original 3.JPG',
        'beloved_adult/20210625_202330_Original.JPG',
        'beloved_adult/20210626_145041_Original 2.JPG',
        'beloved_adult/20210626_145041_Original.JPG',
        'beloved_adult/IMG_0386.jpeg',
        'beloved_adult/IMG_0463_Original.JPG',
        'beloved_adult/IMG_20251101_193739712_HDR_Original.JPG',
        'beloved_adult/IMG_2923.jpeg',
        'beloved_adult/IMG_2934.jpeg',
        'beloved_adult/IMG_2941.jpeg',
        'beloved_adult/IMG_3027.jpeg',
        'beloved_adult/IMG_3112.jpeg',
        'beloved_adult/IMG_3121.jpeg',
        'beloved_adult/IMG_5416_Original.jpeg',
        'beloved_adult/PXL_20210626_232008537.MP_Original 2.jpg',
        'beloved_adult/PXL_20210626_232008537.MP_Original.jpg',
        'beloved_adult/PXL_20210626_232139665.MP_Original 2.JPG',
        'beloved_adult/PXL_20210626_232139665.MP_Original.JPG',
        'beloved_adult/PXL_20210627_162842977_Original.JPG',
        'beloved_adult/PXL_20210627_172225718.MP_Original.jpg',
        'beloved_adult/PXL_20251101_233804099_Original.JPG',
        'beloved_adult/PXL_20251101_234110411_Original.JPG'
    ];

    const galleryImageSets = {
        beloved_images: belovedImages,
        beloved_teen: belovedTeenImages,
        beloved_adult: belovedAdultImages
    };

    const galleries = document.querySelectorAll('[data-gallery-images], [data-gallery-folder]');
    galleries.forEach(gallery => {
        const img = gallery.querySelector('img');
        let sources = [];

        if (gallery.dataset.galleryFolder && galleryImageSets[gallery.dataset.galleryFolder]) {
            sources = galleryImageSets[gallery.dataset.galleryFolder];
        } else if (gallery.dataset.galleryImages) {
            sources = gallery.dataset.galleryImages
                .split(',')
                .map(src => src.trim())
                .filter(Boolean);
        }

        if (!img || sources.length < 2) return;

        let index = 0;

        // Ensure the first image uses the gallery list
        img.src = sources[index];

        setInterval(() => {
            img.style.opacity = '0.2';
            setTimeout(() => {
                index = (index + 1) % sources.length;
                img.src = sources[index];
                img.onload = () => {
                    img.style.opacity = '1';
                };
            }, 200);
        }, 5000);
    });
});
