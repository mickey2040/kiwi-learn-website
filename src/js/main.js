// KiwiLearn - Enhanced Interactive JavaScript
// Modern animations, interactions, and user experience features

document.addEventListener('DOMContentLoaded', function () {
  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }

  // Initialize GSAP animations
  if (typeof gsap !== 'undefined') {
    initializeGSAPAnimations();
  }

  // Mobile menu functionality
  initializeMobileMenu();
  
  // Form validation and interactions
  initializeForms();
  
  // Interactive elements
  initializeInteractiveElements();
  
  // Progress tracking simulation
  initializeProgressTracking();
  
  // Smooth scrolling
  initializeSmoothScrolling();
  
  // Loading states
  initializeLoadingStates();
  
  // Accessibility enhancements
  initializeAccessibility();
});

// GSAP Animations
function initializeGSAPAnimations() {
  // Hero section animations
  gsap.from('.hero-title', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
  });
  
  gsap.from('.hero-subtitle', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.4
  });
  
  gsap.from('.hero-cta', {
    duration: 0.8,
    scale: 0.8,
    opacity: 0,
    ease: 'back.out(1.7)',
    delay: 0.6
  });
  
  gsap.from('.hero-image', {
    duration: 1.2,
    x: 100,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.3
  });
  
  // Floating animation for hero image
  gsap.to('.hero-image', {
    y: -20,
    duration: 2,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1
  });
  
  // Card hover animations
  gsap.utils.toArray('.interactive-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        duration: 0.3,
        y: -8,
        scale: 1.02,
        ease: 'power2.out'
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,
        scale: 1,
        ease: 'power2.out'
      });
    });
  });
  
  // Progress bar animations
  animateProgressBars();
}

// Mobile Menu
function initializeMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuItems = mobileMenu?.querySelectorAll('a');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuBtn.setAttribute('aria-expanded', 'true');
        
        // Animate menu items
        if (typeof gsap !== 'undefined') {
          gsap.fromTo(menuItems, 
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3, stagger: 0.1 }
          );
        }
      } else {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

// Form Handling
function initializeForms() {
  const contactForm = document.querySelector('#contact form');
  const signupForm = document.querySelector('#signup form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }
  
  if (signupForm) {
    signupForm.addEventListener('submit', handleSignupForm);
  }
  
  // Real-time form validation
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', validateField);
    input.addEventListener('input', clearFieldError);
  });
}

function handleContactForm(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  
  if (validateForm(form)) {
    showLoadingState(form);
    
    // Simulate API call
    setTimeout(() => {
      hideLoadingState(form);
      showSuccessMessage('Thank you for contacting KiwiLearn! We will get back to you soon.');
      form.reset();
    }, 2000);
  }
}

function handleSignupForm(e) {
  e.preventDefault();
  const form = e.target;
  
  if (validateForm(form)) {
    showLoadingState(form);
    
    // Simulate API call
    setTimeout(() => {
      hideLoadingState(form);
      showSuccessMessage('Welcome to KiwiLearn! Your account has been created successfully.');
      form.reset();
    }, 2000);
  }
}

function validateForm(form) {
  let isValid = true;
  const fields = form.querySelectorAll('input[required], textarea[required]');
  
  fields.forEach(field => {
    if (!validateField({ target: field })) {
      isValid = false;
    }
  });
  
  return isValid;
}

function validateField(e) {
  const field = e.target;
  const value = field.value.trim();
  const fieldType = field.type;
  let isValid = true;
  
  // Clear previous errors
  clearFieldError(e);
  
  // Required field validation
  if (field.hasAttribute('required') && !value) {
    showFieldError(field, 'This field is required');
    isValid = false;
  }
  
  // Email validation
  if (fieldType === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showFieldError(field, 'Please enter a valid email address');
      isValid = false;
    }
  }
  
  // Name validation
  if (field.name === 'name' && value) {
    if (value.length < 2) {
      showFieldError(field, 'Name must be at least 2 characters long');
      isValid = false;
    }
  }
  
  return isValid;
}

function showFieldError(field, message) {
  field.classList.add('error');
  field.style.borderColor = 'var(--error)';
  
  // Create or update error message
  let errorElement = field.parentNode.querySelector('.error-message');
  if (!errorElement) {
    errorElement = document.createElement('div');
    errorElement.className = 'error-message text-error text-caption mt-1';
    field.parentNode.appendChild(errorElement);
  }
  errorElement.textContent = message;
}

function clearFieldError(e) {
  const field = e.target;
  field.classList.remove('error');
  field.style.borderColor = '';
  
  const errorElement = field.parentNode.querySelector('.error-message');
  if (errorElement) {
    errorElement.remove();
  }
}

// Interactive Elements
function initializeInteractiveElements() {
  // Activity cards
  const activityCards = document.querySelectorAll('.activity-card');
  activityCards.forEach(card => {
    card.addEventListener('click', () => {
      showActivityModal(card.dataset.activity);
    });
  });
  
  // Testimonial carousel
  initializeTestimonialCarousel();
  
  // Progress indicators
  initializeProgressIndicators();
}

function showActivityModal(activityType) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  modal.innerHTML = `
    <div class="bg-white rounded-2xl p-8 max-w-md mx-4 animate-fade-in-up">
      <h3 class="text-h3 text-primary-main mb-4">${activityType} Activity</h3>
      <p class="text-body mb-6">This feature is coming soon! Get ready for exciting ${activityType.toLowerCase()} activities.</p>
      <div class="flex gap-3">
        <button class="btn btn-primary" onclick="this.closest('.fixed').remove()">Close</button>
        <button class="btn btn-secondary" onclick="scrollToSignup()">Sign Up</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}

function initializeTestimonialCarousel() {
  const testimonials = document.querySelectorAll('.testimonial-card');
  let currentIndex = 0;
  
  if (testimonials.length > 1) {
    setInterval(() => {
      testimonials[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % testimonials.length;
      testimonials[currentIndex].classList.add('active');
    }, 5000);
  }
}

function initializeProgressIndicators() {
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(bar => {
    const fill = bar.querySelector('.progress-fill');
    if (fill) {
      const progress = fill.dataset.progress || '75';
      fill.style.width = `${progress}%`;
    }
  });
}

// Progress Tracking
function initializeProgressTracking() {
  // Simulate progress data
  const progressData = {
    quizzes: 85,
    games: 92,
    worksheets: 78,
    overall: 85
  };
  
  // Update progress bars
  Object.entries(progressData).forEach(([key, value]) => {
    const progressBar = document.querySelector(`[data-progress="${key}"]`);
    if (progressBar) {
      animateProgressBar(progressBar, value);
    }
  });
}

function animateProgressBar(progressBar, targetValue) {
  if (typeof gsap !== 'undefined') {
    gsap.to(progressBar, {
      width: `${targetValue}%`,
      duration: 1.5,
      ease: 'power2.out',
      delay: 0.5
    });
  }
}

function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-fill');
  progressBars.forEach((bar, index) => {
    gsap.fromTo(bar,
      { width: '0%' },
      { 
        width: bar.dataset.progress + '%',
        duration: 1.5,
        delay: 0.5 + (index * 0.2),
        ease: 'power2.out'
      }
    );
  });
}

// Smooth Scrolling
function initializeSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Loading States
function initializeLoadingStates() {
  // Add loading class to buttons when clicked
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (!button.classList.contains('loading')) {
        button.classList.add('loading');
        setTimeout(() => {
          button.classList.remove('loading');
        }, 2000);
      }
    });
  });
}

function showLoadingState(form) {
  const submitBtn = form.querySelector('button[type="submit"]');
  if (submitBtn) {
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
  }
}

function hideLoadingState(form) {
  const submitBtn = form.querySelector('button[type="submit"]');
  if (submitBtn) {
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
  }
}

// Success Messages
function showSuccessMessage(message) {
  const notification = document.createElement('div');
  notification.className = 'fixed top-4 right-4 bg-success text-white px-6 py-3 rounded-full shadow-lg z-50 animate-fade-in-up';
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.remove();
  }, 5000);
  
  // Remove on click
  notification.addEventListener('click', () => {
    notification.remove();
  });
}

// Accessibility
function initializeAccessibility() {
  // Skip to main content link
  const skipLink = document.createElement('a');
  skipLink.href = '#main';
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-main text-white px-4 py-2 rounded-lg z-50';
  skipLink.textContent = 'Skip to main content';
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Close modals
      const modals = document.querySelectorAll('.fixed');
      modals.forEach(modal => modal.remove());
      
      // Close mobile menu
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        document.getElementById('mobile-menu-btn').setAttribute('aria-expanded', 'false');
      }
    }
  });
  
  // Focus management
  const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
  focusableElements.forEach(element => {
    element.addEventListener('focus', () => {
      element.classList.add('focus-visible');
    });
    
    element.addEventListener('blur', () => {
      element.classList.remove('focus-visible');
    });
  });
}

// Utility Functions
function scrollToSignup() {
  const signupSection = document.getElementById('signup');
  if (signupSection) {
    signupSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Lazy loading for images
function initializeLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
if ('IntersectionObserver' in window) {
  initializeLazyLoading();
}
