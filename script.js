// Dilan's – scroll-animationer
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.getElementById('year').textContent = new Date().getFullYear();

  // Elementer glider ind, når de kommer i syne
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  if (reduce) return;

  var rows = document.querySelectorAll('.marquee__row');
  var spinners = document.querySelectorAll('[data-spin]');
  var parallax = document.querySelectorAll('[data-parallax]');
  var box = document.querySelector('[data-float]');
  var t0 = performance.now();

  function frame(now) {
    var y = window.scrollY;
    var t = (now - t0) / 1000;

    // Tekstbånd kører af sig selv og skubbes ekstra af scroll
    rows.forEach(function (row) {
      var dir = Number(row.dataset.dir);
      var half = row.scrollWidth / 2;
      var x = ((t * 60 + y * 0.6) % half);
      row.style.transform = 'translateX(' + (dir < 0 ? -x : x - half) + 'px)';
    });

    // Pizzaer drejer, når man scroller
    spinners.forEach(function (el) {
      el.style.rotate = (y * 0.25) + 'deg';
    });

    parallax.forEach(function (el) {
      var r = el.getBoundingClientRect();
      var c = r.top + r.height / 2 - window.innerHeight / 2;
      var max = r.height * 0.06; // billedet er skaleret 1.15, så det kan flytte sig lidt uden at kanten ses
      var off = Math.max(-max, Math.min(max, c * Number(el.dataset.parallax)));
      el.style.transform = 'translateY(' + off + 'px) scale(1.15)';
    });

    // Pizzaæsken svæver og vipper
    if (box) {
      var bob = Math.sin(t * 1.4) * 14;
      var tilt = Math.sin(t * 0.9) * 8;
      box.style.transform = 'translateY(' + bob + 'px) rotateX(52deg) rotateZ(' + (-18 + tilt + y * 0.02) + 'deg)';
    }

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
