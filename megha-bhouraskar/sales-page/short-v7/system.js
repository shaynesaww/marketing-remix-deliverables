/* =============================================================================
   SYSTEM.JS — reveal engine for the Megha sales page
   Shared by the three depth studies and the final build.

   Three jobs, and deliberately nothing else:
   1. Reveal BLOCKS on entry, never individual items. The old build observed 25
      elements across 11 sections; at 14 sections that becomes ~60 and the page
      turns into a slot machine. Budget is ~20 observed nodes page-wide.
   2. Stagger via a CSS custom property so the transition itself stays in CSS.
   3. Stop an anchor CTA from detonating every observer between the top of the
      page and its target. This is a real bug on a page this tall.

   No scroll listeners. IntersectionObserver only.
   ============================================================================= */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* Reduced motion, or no IO support: show everything, keep the layering. */
  function showAll() {
    var nodes = document.querySelectorAll('[data-reveal],[data-wake]');
    for (var i = 0; i < nodes.length; i++) nodes[i].classList.add('in');
  }

  if (reduced.matches || !('IntersectionObserver' in window)) {
    showAll();
    return;
  }

  /* --- reveal ------------------------------------------------------------ */
  var io = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      if (!e.isIntersecting) continue;
      var el = e.target;

      /* Stagger only against siblings that are themselves revealing, and cap
         it at 5 so a long list never leaves the reader waiting on the page. */
      if (!el.hasAttribute('data-wake')) {
        var sibs = el.parentNode.querySelectorAll(':scope > [data-reveal]');
        var idx = Array.prototype.indexOf.call(sibs, el);
        if (idx > 0) el.style.setProperty('--d', Math.min(idx, 5) * 70 + 'ms');
      }

      el.classList.add('in');
      io.unobserve(el);
    }
  }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });

  var targets = document.querySelectorAll('[data-reveal],[data-wake]');
  for (var i = 0; i < targets.length; i++) io.observe(targets[i]);

  /* --- anchor jumps ------------------------------------------------------
     scroll-behavior:smooth is deliberately NOT set in CSS. Clicking a CTA at
     the top of an 18,000px page would otherwise drag the viewport through
     every observer on the way down and fire all of them at once. Instead:
     mark everything above the destination as already seen, with no transition,
     then scroll.                                                            */
  function jump(hash) {
    var dest = document.querySelector(hash);
    if (!dest) return false;

    var y = dest.getBoundingClientRect().top + window.pageYOffset;
    root.classList.add('is-jumping');

    var pending = document.querySelectorAll('[data-reveal]:not(.in),[data-wake]:not(.in)');
    for (var i = 0; i < pending.length; i++) {
      var n = pending[i];
      if (n.getBoundingClientRect().top + window.pageYOffset < y) {
        n.style.setProperty('--d', '0ms');
        n.classList.add('in');
        io.unobserve(n);
      }
    }

    var nav = document.querySelector('[data-nav]');
    window.scrollTo({ top: y - (nav ? nav.offsetHeight : 0), behavior: 'smooth' });
    window.setTimeout(function () { root.classList.remove('is-jumping'); }, 900);
    return true;
  }

  document.addEventListener('click', function (ev) {
    var a = ev.target.closest ? ev.target.closest('a[href^="#"]') : null;
    if (!a) return;
    var hash = a.getAttribute('href');
    if (hash.length < 2) return;
    if (jump(hash)) {
      ev.preventDefault();
      if (history.replaceState) history.replaceState(null, '', hash);
    }
  });

  /* If the reader flips reduced-motion on mid-session, stop hiding things. */
  if (reduced.addEventListener) {
    reduced.addEventListener('change', function (e) { if (e.matches) showAll(); });
  }
}());
