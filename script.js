// Mobile nav
function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
}
document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('navLinks').classList.toggle('open');
});

// Close nav on outside click
document.addEventListener('click', function(e) {
  const nav = document.querySelector('nav');
  if (!nav.contains(e.target)) closeMenu();
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(function(r) { observer.observe(r); });

// Stagger brand cards
document.querySelectorAll('.brand-card').forEach(function(c, i) {
  c.style.transitionDelay = (i * 0.08) + 's';
});

// Form submit
document.querySelector('.contact-form button').addEventListener('click', function() {
  var name = document.querySelector('.contact-form input').value.trim();
  if (!name) { alert('Please enter your name.'); return; }
  alert('Thank you, ' + name + '! We will be in touch shortly.');
});