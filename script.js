/* ============================================================
   MOJO SCHOOL & OFFICE SUPPLIES — Main Script
   ============================================================ */

// ── Mobile Nav Toggle ────────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
  });
});

// Close nav on outside click
document.addEventListener('click', e => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
  }
});

// ── Sticky Navbar Shadow ─────────────────────────────────────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// ── Active Nav Link on Scroll ────────────────────────────────
const sections  = document.querySelectorAll('section[id], div[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === '#' + entry.target.id
        );
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(sec => sectionObserver.observe(sec));

// ── Scroll Animations ────────────────────────────────────────
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target); // fire once
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

// ── Back to Top Button ───────────────────────────────────────
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 400 ? 'flex' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Smooth Scroll for Anchor Links ──────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navHeight = navbar.offsetHeight;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  });
});

// ── Pause announcement ticker on hover ───────────────────────
const ticker = document.querySelector('.announcement-track');
if (ticker) {
  ticker.addEventListener('mouseenter', () => ticker.style.animationPlayState = 'paused');
  ticker.addEventListener('mouseleave', () => ticker.style.animationPlayState = 'running');
}

// ── Order Form Submission (Formspree AJAX) ────────────────────
const orderForm   = document.getElementById('orderForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn   = document.getElementById('submitBtn');

if (orderForm) {
  orderForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Prevent double-submit
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    const data = new FormData(orderForm);

    try {
      const response = await fetch(orderForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        // Show success, hide form
        orderForm.style.display = 'none';
        formSuccess.style.display = 'block';
        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        // Show error inline
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Order Request';
        alert('Something went wrong. Please message us directly on WhatsApp or Messenger.');
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Order Request';
      alert('Network error. Please message us directly on WhatsApp or Messenger.');
    }
  });
}
