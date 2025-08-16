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

        // Update active nav link on scroll
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                if (window.pageYOffset >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });

        // Login form handling
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            if (!email || !password) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Simulate login
            alert('Login successful! Welcome back to YOGA site.');
            bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
            this.reset();
        });

        // Register form handling
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('registerFirstName').value;
            const lastName = document.getElementById('registerLastName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const experienceLevel = document.getElementById('experienceLevel').value;
            const agreeTerms = document.getElementById('agreeTerms').checked;
            
            // Validation
            if (!firstName || !lastName || !email || !password || !confirmPassword || !experienceLevel) {
                alert('Please fill in all required fields.');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }
            
            if (!agreeTerms) {
                alert('Please agree to the Terms of Service and Privacy Policy.');
                return;
            }
            
            // Simulate registration
            alert(`Welcome to YOGA site, ${firstName}! Your account has been created successfully.`);
            bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
            this.reset();
        });

        // Contact form handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                newsletter: document.getElementById('newsletter').checked
            };
            
            if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            alert('Thank you for your message! We will get back to you within 24 hours.');
            this.reset();
        });

        // Newsletter subscription
        document.querySelector('footer .btn-primary').addEventListener('click', function() {
            const email = this.previousElementSibling.value;
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                this.previousElementSibling.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });