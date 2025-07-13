// Enhanced Mobile Navigation Toggle with Animation
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")
const navbar = document.querySelector(".navbar")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")

  // Animate hamburger bars
  const bars = navToggle.querySelectorAll(".bar")
  if (navMenu.classList.contains("active")) {
    bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)"
    bars[1].style.opacity = "0"
    bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)"
  } else {
    bars[0].style.transform = "none"
    bars[1].style.opacity = "1"
    bars[2].style.transform = "none"
  }
})

// Close mobile menu when clicking on a link with smooth animation
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    const bars = navToggle.querySelectorAll(".bar")
    bars[0].style.transform = "none"
    bars[1].style.opacity = "1"
    bars[2].style.transform = "none"
  })
})

// Enhanced scroll effect for navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.98)"
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)"
    navbar.style.backdropFilter = "blur(20px)"
  } else {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
    navbar.style.boxShadow = "none"
    navbar.style.backdropFilter = "blur(15px)"
  }
})

// Add stagger animation to hero elements
window.addEventListener("load", () => {
  const heroElements = document.querySelectorAll(".badge, .hero-title, .hero-description, .hero-buttons")
  heroElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.2}s`
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Form submission
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)
  const firstName = formData.get("firstName")
  const lastName = formData.get("lastName")
  const email = formData.get("email")
  const company = formData.get("company")
  const message = formData.get("message")

  // Simple validation
  if (!firstName || !lastName || !email || !message) {
    alert("Please fill in all required fields.")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.")
    return
  }

  // Simulate form submission
  const submitBtn = this.querySelector('.submit-btn')
  const originalText = submitBtn.textContent

  submitBtn.textContent = "Sending..."
  submitBtn.disabled = true

  setTimeout(() => {
    alert("Thank you for your message! We will get back to you within 24 hours.")
    this.reset()
    submitBtn.textContent = originalText
    submitBtn.disabled = false
  }, 2000)
})

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all cards and sections
document.querySelectorAll(".service-card, .about-content, .contact-form-card").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('active')
    const bars = navToggle.querySelectorAll(".bar")
    bars[0].style.transform = "none"
    bars[1].style.opacity = "1"
    bars[2].style.transform = "none"
  }
})
