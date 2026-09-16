// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // RSVP form handling.
  // NOTE: This is a static GitHub Pages site with no backend yet, so this
  // just shows a confirmation message locally. To actually collect RSVPs,
  // connect the form to a service like Formspree, Google Forms, or
  // Netlify Forms, then set the <form action="... under construction ... updates coming soon!"> and remove
  // preventDefault() below (or follow that service's setup instructions).
  document.querySelectorAll('.rsvp-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.classList.add('hidden');
      var success = form.parentElement.querySelector('.form-success');
      if (success) success.classList.add('visible');
    });
  });

  // Schedule page tabs
  var tabButtons = document.querySelectorAll('.schedule-toggle button');
  if (tabButtons.length) {
    tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        tabButtons.forEach(function (b) { b.setAttribute('aria-selected', 'false'); });
        document.querySelectorAll('.schedule-panel').forEach(function (p) { p.classList.remove('active'); });
        btn.setAttribute('aria-selected', 'true');
        document.getElementById(btn.dataset.target).classList.add('active');
      });
    });
  }
});
