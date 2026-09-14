/* Groupe OCP — comportements de la page unique (sans dépendance hors Leaflet) */
(function () {
  'use strict';

  var IMG = 'assets/images/';

  /* ---------------------------------------------------------------- données
     Implantations (nom, coordonnées, photos) reprises de groupeocp.com */
  var IMPLANTATIONS = 
[
{
"name": "PARC MONCEAU",
"lat": 48.883606,
"lng": 2.316308,
"images": [
"6-rue-Lebouteux-Paris-75017-5-Allege.jpg"
]
},
{
"name": "FAUBOURG MONTMARTRE",
"lat": 48.873252,
"lng": 2.343554,
"images": [
"2-rue-Geoffroy-Marie-Paris-75009-003-Allege.jpg"
]
},
{
"name": "FOLIES BERGÈRES",
"lat": 48.8737,
"lng": 2.344166,
"images": [
"11-rue-Geoffroy-Marie-Paris-75009-1-Allege.jpg",
"11-rue-Geoffroy-Marie-Paris-75009-3-Allege.jpg"
]
},
{
"name": "PASSY",
"lat": 48.86059,
"lng": 2.275924,
"images": [
"20-avenue-Jules-Janin-Paris-75016-006-3-allege.jpg"
]
},
{
"name": "BASTILLE / CHARONNE",
"lat": 48.853268,
"lng": 2.373528,
"images": [
"28-rue-de-Lappe-75011-2.jpg",
"28-rue-de-Lappe-75011.jpg",
"28-rue-de-Lappe-75011-3.jpg",
"28-rue-de-Lappe-75011-4.jpg"
]
},
{
"name": "VENDÔME",
"lat": 48.869397,
"lng": 2.330025,
"images": [
"ESINT_10.jpg",
"DESC_1.jpg",
"ESINT_11.jpg",
"ESINT_7.jpg"
]
},
{
"name": "SENTIER",
"lat": 48.867981,
"lng": 2.351905,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-centre-Sentier-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-centre-Sentier-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-centre-Sentier-3.jpg",
"Groupe-OCP-Paris-immobilier-bureau-centre-Sentier-4.jpg"
]
},
{
"name": "RÉAUMUR",
"lat": 48.866416,
"lng": 2.349724,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-centre-Reaumur-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-centre-Reaumur-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-centre-Reaumur-3.jpg"
]
},
{
"name": "MONTORGUEIL",
"lat": 48.868032,
"lng": 2.348789,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-centre-Montorgueil-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-centre-Montorgueil-3.jpg"
]
},
{
"name": "MAIRIE DU 3e / MARAIS",
"lat": 48.862984,
"lng": 2.363611,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-centre-marais-mairie3-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-centre-marais-mairie3-2.jpg"
]
},
{
"name": "TURENNE / MARAIS",
"lat": 48.862375,
"lng": 2.365153,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-centre-turenne-marais-.jpg",
"Groupe-OCP-Paris-immobilier-bureau-centre-turenne-marais-2.jpg"
]
},
{
"name": "PANTHÉON",
"lat": 48.845431,
"lng": 2.342884,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-centre-pantheon-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-centre-pantheon-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-centre-pantheon-3.jpg"
]
},
{
"name": "MOUFFETARD",
"lat": 48.838894,
"lng": 2.349319,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-centre-mouffetard-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-centre-mouffetard-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-centre-mouffetard-3.jpg"
]
},
{
"name": "CHAMPS-ÉLYSÉES (cédé en 2022)",
"lat": 48.8711,
"lng": 2.306071,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-centre-champs-elysees-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-centre-champs-elysees-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-centre-champs-elysees-3.jpg",
"Groupe-OCP-Paris-immobilier-bureau-centre-champs-elysees-4.jpg"
]
},
{
"name": "MIROMESNIL",
"lat": 48.874653,
"lng": 2.314835,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-centre-miromesnil-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-centre-miromesnil-2.jpg"
]
},
{
"name": "BONNE NOUVELLE (cédé en 2022)",
"lat": 48.873342,
"lng": 2.35521,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-centre-bonne-nouvelle-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-centre-bonne-nouvelle-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-centre-bonne-nouvelle-3.jpg"
]
},
{
"name": "CANAL SAINT-MARTIN",
"lat": 48.87392,
"lng": 2.360964,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-canal-saint-martin-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-canal-saint-martin-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-canal-saint-martin-3.jpg"
]
},
{
"name": "GRANDS BOULEVARDS",
"lat": 48.874411,
"lng": 2.349843,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-grands-boulevards-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-grands-boulevards-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-grands-boulevards-3.jpg"
]
},
{
"name": "REPUBLIQUE",
"lat": 48.870078,
"lng": 2.361739,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-republique-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-republique-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-republique-3.jpg"
]
},
{
"name": "BASTILLE",
"lat": 48.859669,
"lng": 2.375964,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-bastille-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-bastille-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-bastille-3.jpg"
]
},
{
"name": "CHARONNE",
"lat": 48.853165,
"lng": 2.38472,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-charonne-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-charonne-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-charonne-3.jpg"
]
},
{
"name": "BRÉGUET-SABIN",
"lat": 48.858041,
"lng": 2.375048,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-breguet-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-breguet-2.jpg"
]
},
{
"name": "CHAMP-DE-MARS",
"lat": 48.849969,
"lng": 2.292337,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-champ-de-mars-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-champ-de-mars-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-champ-de-mars-3.jpg"
]
},
{
"name": "EXELMANS (cédé en 2021)",
"lat": 48.842075,
"lng": 2.265431,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-exelmans-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-exelmans-2.jpg"
]
},
{
"name": "LA MUETTE",
"lat": 48.856959,
"lng": 2.265189,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-la-muette-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-la-muette-2.jpg"
]
},
{
"name": "WAGRAM (cédé en 2022)",
"lat": 48.887357,
"lng": 2.306748,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-wagram-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-wagram-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-wagram-3.jpg"
]
},
{
"name": "BATIGNOLLES",
"lat": 48.889453,
"lng": 2.32384,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-batignolles-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-batignolles-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-batignolles-3.jpg"
]
},
{
"name": "ÉTOILE",
"lat": 48.877936,
"lng": 2.293421,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-etoile-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-etoile-2.jpg"
]
},
{
"name": "CHAPELLE INTERNATIONAL",
"lat": 48.894676,
"lng": 2.363416,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-Paris-18-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-Paris-18-2.jpg"
]
},
{
"name": "BUTTES CHAUMONT",
"lat": 48.886029,
"lng": 2.390614,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-buttes-chaumont-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-buttes-chaumont-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-buttes-chaumont-3.jpg"
]
},
{
"name": "GAMBETTA",
"lat": 48.868619,
"lng": 2.402017,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-gambetta-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-gambetta-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-gambetta-3.jpg"
]
},
{
"name": "BOULOGNE CASTÉJA",
"lat": 48.830603,
"lng": 2.237749,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-boulogne-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-boulogne-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-boulogne-3.jpg"
]
},
{
"name": "SAINT-MANDÉ (cédé en 2022)",
"lat": 48.845709,
"lng": 2.418086,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-saint-mande-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-saint-mande-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-saint-mande-3-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-saint-mande-4.jpg"
]
},
{
"name": "IVRY – PIERRE & MARIE CURIE",
"lat": 48.819481,
"lng": 2.379464,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-ivry-pierre-et-marie-curie-2.jpg"
]
},
{
"name": "TRINITÉ (cédé en 2019)",
"lat": 48.879002,
"lng": 2.330063,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-trinite-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-trinite-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-trinite-3.jpg"
]
},
{
"name": "SAINT-OUEN MAIRIE (cédé en 2019)",
"lat": 48.910389,
"lng": 2.334307,
"images": [
"Groupe-OCP-Paris-immobilier-bureau-saint-ouen-1.jpg",
"Groupe-OCP-Paris-immobilier-bureau-saint-ouen-2.jpg",
"Groupe-OCP-Paris-immobilier-bureau-saint-ouen-3.jpg"
]
}
];

  /* ---------------------------------------------------------------- header */
  var header = document.querySelector('.site-header');
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.main-nav');

  function onScroll() {
    header.classList.toggle('is-compact', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  /* lien actif dans le menu selon la section visible */
  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
  var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
  function setActive() {
    var y = window.scrollY + 120, current = sections[0];
    sections.forEach(function (s) { if (s.offsetTop <= y) current = s; });
    links.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + current.id); });
  }
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  /* ---------------------------------------------------------------- sliders */
  function makeSlider(root, opts) {
    opts = opts || {};
    var slides = root.querySelectorAll('.slide');
    var index = 0, timer = null;
    if (!slides.length) return null;
    function show(i) {
      index = (i + slides.length) % slides.length;
      for (var k = 0; k < slides.length; k++) slides[k].classList.toggle('is-active', k === index);
      if (opts.onChange) opts.onChange(index, slides.length);
    }
    function start() {
      stop();
      if (slides.length > 1 && opts.autoplay !== false) timer = setInterval(function () { show(index + 1); }, opts.delay || 5000);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    var prev = root.querySelector('.prev'), next = root.querySelector('.next');
    if (prev) prev.addEventListener('click', function () { show(index - 1); start(); });
    if (next) next.addEventListener('click', function () { show(index + 1); start(); });
    if (slides.length < 2) { if (prev) prev.hidden = true; if (next) next.hidden = true; }
    show(0); start();
    return { show: show, start: start, stop: stop };
  }
  Array.prototype.forEach.call(document.querySelectorAll('[data-slider]'), function (el) { makeSlider(el); });

  /* ---------------------------------------------------------------- chiffres animés */
  function animateNumber(el) {
    var target = parseFloat(el.getAttribute('data-chiffre'));
    var decimals = (String(el.getAttribute('data-chiffre')).split('.')[1] || '').length;
    var duration = 1600, start = null;
    function fmt(v) {
      var s = v.toFixed(decimals).replace('.', ',');
      var parts = s.split(','); parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      return parts.join(',');
    }
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * eased);
      if (p < 1) requestAnimationFrame(step); else el.textContent = fmt(target);
    }
    requestAnimationFrame(step);
  }
  var numbers = document.querySelectorAll('[data-chiffre]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateNumber(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    Array.prototype.forEach.call(numbers, function (n) { io.observe(n); });

    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-visible'); reveal.unobserve(e.target); } });
    }, { threshold: 0.12 });
    Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) { reveal.observe(el); });
  } else {
    Array.prototype.forEach.call(numbers, function (n) { n.textContent = n.getAttribute('data-chiffre'); });
    Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) { el.classList.add('is-visible'); });
  }

  /* ---------------------------------------------------------------- implantations : fenêtre */
  var modal = document.getElementById('implantation-modal');
  var modalTitle = modal.querySelector('h3');
  var modalSlides = modal.querySelector('.slides');
  var modalCount = modal.querySelector('.slider-count');
  var modalSlider = null;
  var lastFocus = null;

  function openImplantation(item) {
    modalTitle.textContent = item.name;
    modalSlides.innerHTML = item.images.map(function (src) {
      return '<div class="slide" role="img" aria-label="' + item.name + '" style="background-image:url(' + IMG + src + ')"></div>';
    }).join('');
    if (modalSlider) modalSlider.stop();
    modalSlider = makeSlider(modal.querySelector('.slider'), {
      autoplay: item.images.length > 1,
      onChange: function (i, n) { modalCount.textContent = n > 1 ? (i + 1) + ' / ' + n : ''; }
    });
    lastFocus = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-close').focus();
  }
  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (modalSlider) modalSlider.stop();
    if (lastFocus) lastFocus.focus();
  }
  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal(); });

  /* ---------------------------------------------------------------- carte (Leaflet + fond CARTO) */
  var mapEl = document.getElementById('map');
  if (mapEl && window.L) {
    var map = L.map(mapEl, { scrollWheelZoom: false, zoomControl: true }).setView([48.8651, 2.3580], 12);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    var icon = L.divIcon({ className: '', html: '<span class="marker"></span>', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -16] });
    IMPLANTATIONS.forEach(function (item) {
      var m = L.marker([item.lat, item.lng], { icon: icon, title: item.name }).addTo(map);
      m.bindTooltip(item.name, { direction: 'top', offset: [0, -14] });
      m.on('click', function () { openImplantation(item); });
    });
    /* le rendu de la carte doit être recalculé si la page change de largeur */
    window.addEventListener('resize', function () { map.invalidateSize(); });
  }

  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
