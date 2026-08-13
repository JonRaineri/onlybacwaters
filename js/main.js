document.addEventListener('DOMContentLoaded', function() {

  // Mobile menu
  var menuBtn = document.querySelector('.mobile-menu-btn')
  var mobileMenu = document.querySelector('.mobile-menu')
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active')
    })
    mobileMenu.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() { mobileMenu.classList.remove('active') })
    })
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function(item) {
    item.querySelector('.faq-q').addEventListener('click', function() {
      var open = item.classList.contains('active')
      document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('active') })
      if (!open) item.classList.add('active')
    })
  })

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var id = a.getAttribute('href')
      if (id === '#') return
      var el = document.querySelector(id)
      if (el) {
        e.preventDefault()
        var offset = document.querySelector('.navbar').offsetHeight + 16
        window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - offset, behavior: 'smooth' })
      }
    })
  })

  // Fade-in on scroll
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
        obs.unobserve(entry.target)
      }
    })
  }, { threshold: 0.08 })

  document.querySelectorAll('.product-card, .review, .lab-card, .faq-item').forEach(function(el) {
    el.style.opacity = '0'
    el.style.transform = 'translateY(16px)'
    el.style.transition = 'opacity .5s ease, transform .5s ease'
    obs.observe(el)
  })

})
