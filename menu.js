// Dilan's – menu og kurv
(function () {
  var MENU = window.DILANS_MENU || [];
  var PHONE = '35 37 19 09';
  var OPEN = 11, CLOSE = 23; // åbent hver dag 11–23
  var STORE_KEY = 'dilans-kurv';
  var CFG = window.DILANS_CONFIG || {};
  var ONLINE = !!(CFG.supabaseUrl && CFG.supabaseKey); // ellers: kunden ringer bestillingen ind

  var $ = function (id) { return document.getElementById(id); };
  var kr = function (n) { return n.toLocaleString('da-DK') + ',-'; };
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  };

  document.getElementById('year').textContent = new Date().getFullYear();

  // ---------- Byg menuen ----------
  // Lav priserne om til en ens liste: [{ label, price }]
  function pricesOf(sec, item) {
    var p = item[3];
    if (typeof p === 'number') return [{ label: '', price: p }];
    if (Array.isArray(p[0])) return p.map(function (x) { return { label: x[0], price: x[1] }; });
    return p.map(function (v, i) { return { label: (sec.sizes || [])[i] || '', price: v }; })
            .filter(function (x) { return x.price != null; });
  }

  var list = $('menu-list'), links = $('catlinks');
  var byKey = {};
  MENU.forEach(function (sec) {
    var section = document.createElement('section');
    section.className = 'msec msec--' + sec.id;
    section.id = sec.id;
    var html = '<div class="msec__head"><h2 class="display">' + esc(sec.title) + '</h2>' +
      (sec.note ? '<p>' + esc(sec.note) + '</p>' : '') + '</div><ul class="dishes">';
    sec.items.forEach(function (item, i) {
      var nr = item[0], name = item[1], desc = item[2], tag = item[4];
      var search = (nr + ' ' + name + ' ' + desc + ' ' + sec.title).toLowerCase();
      html += '<li class="dish' + (nr ? '' : ' dish--plain') + '" data-search="' + esc(search) + '">' +
        '<span class="dish__nr">' + esc(nr) + '</span>' +
        '<div class="dish__main"><h3 class="dish__name">' + esc(name) +
        (tag ? '<span class="dish__tag">' + esc(tag) + '</span>' : '') + '</h3>' +
        (desc ? '<p class="dish__desc">' + esc(desc) + '</p>' : '') + '</div>' +
        '<div class="dish__prices">';
      pricesOf(sec, item).forEach(function (p) {
        var key = sec.id + '|' + i + '|' + p.label;
        byKey[key] = {
          key: key, nr: nr, name: name, desc: desc, size: p.label, price: p.price,
          section: sec.id === 'frokost' ? 'Frokosttilbud' : (sec.id === 'pizza' ? '' : sec.title)
        };
        html += '<button class="price" type="button" data-key="' + esc(key) + '" aria-label="Læg ' +
          esc(name + (p.label ? ' ' + p.label : '')) + ' i kurven, ' + p.price + ' kr">' +
          (p.label ? '<small>' + esc(p.label) + '</small>' : '') + kr(p.price) + '</button>';
      });
      html += '</div></li>';
    });
    section.innerHTML = html + '</ul>';
    list.appendChild(section);

    var a = document.createElement('a');
    a.href = '#' + sec.id; a.textContent = sec.title; a.dataset.id = sec.id;
    links.appendChild(a);
  });

  // ---------- Søgning ----------
  $('search').addEventListener('input', function () {
    var q = this.value.trim().toLowerCase();
    var any = false;
    document.querySelectorAll('.msec').forEach(function (sec) {
      var shown = 0;
      sec.querySelectorAll('.dish').forEach(function (d) {
        var hit = !q || d.dataset.search.indexOf(q) !== -1;
        d.hidden = !hit; if (hit) shown++;
      });
      sec.hidden = shown === 0; if (shown) any = true;
    });
    $('menu-empty').hidden = any;
  });

  // ---------- Aktiv kategori ----------
  if ('IntersectionObserver' in window) {
    var current = null;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var id = e.target.id;
        if (id === current) return;
        current = id;
        links.querySelectorAll('a').forEach(function (a) {
          var on = a.dataset.id === id;
          a.classList.toggle('is-active', on);
          if (on) links.scrollTo({ left: a.offsetLeft - 40, behavior: 'smooth' });
        });
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    document.querySelectorAll('.msec').forEach(function (s) { io.observe(s); });
  }

  // ---------- Kurv ----------
  var cart = [];
  try { cart = JSON.parse(localStorage.getItem(STORE_KEY)) || []; } catch (e) { cart = []; }
  cart = cart.filter(function (l) { return byKey[l.key]; });

  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(cart)); } catch (e) {} }
  function total() { return cart.reduce(function (s, l) { return s + byKey[l.key].price * l.qty; }, 0); }
  function count() { return cart.reduce(function (s, l) { return s + l.qty; }, 0); }
  function label(it) {
    return (it.nr ? it.nr + '. ' : '') + (it.section ? it.section + ': ' : '') + it.name + (it.size ? ' (' + it.size + ')' : '');
  }

  function render() {
    var n = count();
    $('cartbtn').hidden = n === 0;
    $('cartcount').textContent = n;
    $('carttotal-btn').textContent = kr(total());
    $('carttotal').textContent = kr(total());
    $('cartempty').hidden = n > 0;
    $('orderform').querySelector('button[type=submit]').disabled = n === 0;
    $('cartitems').innerHTML = cart.map(function (l, i) {
      var it = byKey[l.key];
      return '<li class="citem"><div><div class="citem__name">' + esc(label(it)) + '</div>' +
        (it.desc ? '<div class="citem__meta">' + esc(it.desc) + '</div>' : '') +
        '<div class="qty"><button type="button" data-q="-1" data-i="' + i + '" aria-label="Fjern én">−</button>' +
        '<span>' + l.qty + '</span>' +
        '<button type="button" data-q="1" data-i="' + i + '" aria-label="Tilføj én">+</button></div></div>' +
        '<div class="citem__price">' + kr(it.price * l.qty) + '</div></li>';
    }).join('');
    save();
  }

  var toastTimer;
  function toast(msg) {
    var t = $('toast');
    t.textContent = msg; t.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('is-on'); }, 1800);
  }
  function bump(el, cls) { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }

  list.addEventListener('click', function (e) {
    var btn = e.target.closest('.price');
    if (!btn) return;
    var key = btn.dataset.key;
    var line = cart.filter(function (l) { return l.key === key; })[0];
    if (line) line.qty++; else cart.push({ key: key, qty: 1 });
    render();
    bump(btn, 'is-added');
    bump($('cartbtn'), 'is-bump');
    toast(byKey[key].name + ' er lagt i kurven');
  });

  $('cartitems').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-q]');
    if (!b) return;
    var l = cart[Number(b.dataset.i)];
    l.qty += Number(b.dataset.q);
    if (l.qty <= 0) cart.splice(Number(b.dataset.i), 1);
    render();
  });

  // Åbn og luk kurven
  var cartEl = $('cart');
  function openCart() {
    fillTimes();
    if ($('step-sent').hidden) showStep('cart');
    cartEl.classList.add('is-open'); cartEl.setAttribute('aria-hidden', 'false');
    $('scrim').hidden = false; $('cartbtn').setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    setTimeout(function () { $('cartclose').focus(); }, 50);
  }
  function closeCart() {
    cartEl.classList.remove('is-open'); cartEl.setAttribute('aria-hidden', 'true');
    $('scrim').hidden = true; $('cartbtn').setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  $('cartbtn').addEventListener('click', openCart);
  $('cartclose').addEventListener('click', closeCart);
  $('scrim').addEventListener('click', closeCart);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeCart(); });

  // Afhentningstider i kvarterer inden for åbningstiden
  function fillTimes() {
    var sel = $('o-time'), keep = sel.value;
    var now = new Date();
    var opts = [];
    var mins = now.getHours() * 60 + now.getMinutes();
    var open = OPEN * 60, close = CLOSE * 60;
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    var fmt = function (m) { return pad(Math.floor(m / 60)) + '.' + pad(m % 60); };
    if (mins >= open && mins < close - 20) opts.push(['asap', 'Hurtigst muligt (ca. 20 min)']);
    var start = Math.max(open + 15, Math.ceil((mins + 30) / 15) * 15);
    var prefix = '';
    if (mins >= close - 30) { start = open + 15; prefix = 'I morgen '; }
    for (var m = start; m <= close - 15; m += 15) opts.push([fmt(m), prefix + 'kl. ' + fmt(m)]);
    sel.innerHTML = opts.map(function (o) { return '<option value="' + o[0] + '">' + o[1] + '</option>'; }).join('');
    if (keep && opts.some(function (o) { return o[0] === keep; })) sel.value = keep;
  }

  // Videre til bestilling
  function showStep(s) {
    $('step-cart').hidden = s !== 'cart';
    $('step-sent').hidden = s !== 'sent';
    $('step-done').hidden = s !== 'done';
  }
  $('orderform').addEventListener('submit', function (e) {
    e.preventDefault();
    var name = $('o-name').value.trim(), phone = $('o-phone').value.trim();
    var err = $('formerror');
    if (!count()) return;
    if (!name || phone.replace(/\D/g, '').length < 8) {
      err.textContent = !name ? 'Skriv dit navn, så vi ved, hvem maden er til.' : 'Skriv et telefonnummer med 8 cifre, så vi kan ringe, hvis der er spørgsmål.';
      err.hidden = false;
      (!name ? $('o-name') : $('o-phone')).focus();
      return;
    }
    err.hidden = true;
    var sel = $('o-time');
    var pickup = sel.options[sel.selectedIndex].text;
    if (ONLINE) { sendOrder(name, phone, pickup, $('o-note').value.trim()); return; }
    var lines = cart.map(function (l) {
      var it = byKey[l.key];
      return l.qty + ' × ' + label(it) + '   ' + kr(it.price * l.qty);
    });
    var note = $('o-note').value.trim();
    $('summary').textContent =
      'Bestilling til afhentning\n' +
      'Navn: ' + name + '\nTelefon: ' + phone + '\nAfhentning: ' + sel.options[sel.selectedIndex].text + '\n\n' +
      lines.join('\n') + '\n\nI alt: ' + kr(total()) + (note ? '\n\nBemærkning: ' + note : '');
    showStep('done');
    cartEl.scrollTop = 0;
  });
  $('back').addEventListener('click', function () { showStep('cart'); });

  // ---------- Send bestillingen til restauranten ----------
  function sendOrder(name, phone, pickup, note) {
    var btn = $('orderform').querySelector('button[type=submit]');
    var err = $('formerror');
    var items = cart.map(function (l) {
      var it = byKey[l.key];
      return { qty: l.qty, nr: it.nr, name: it.name, desc: it.desc, size: it.size, section: it.section, price: it.price };
    });
    var sum = total();
    btn.disabled = true; btn.textContent = 'Sender bestilling …';
    fetch(CFG.supabaseUrl.replace(/\/$/, '') + '/rest/v1/rpc/place_order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', apikey: CFG.supabaseKey, Authorization: 'Bearer ' + CFG.supabaseKey },
      body: JSON.stringify({ p_name: name, p_phone: phone, p_pickup: pickup, p_note: note, p_items: items, p_total: sum })
    }).then(function (r) {
      return r.json().then(function (body) {
        if (!r.ok) throw new Error(body && body.message ? body.message : 'Fejl');
        return body;
      });
    }).then(function (id) {
      $('sent-name').textContent = name.split(' ')[0];
      $('sent-id').textContent = id;
      $('sent-time').textContent = pickup;
      $('sent-total').textContent = kr(sum);
      cart = []; render();
      $('o-note').value = '';
      showStep('sent');
      cartEl.scrollTop = 0;
    }).catch(function (e) {
      err.textContent = 'Bestillingen kunne ikke sendes' + (e.message && e.message !== 'Fejl' && e.message !== 'Failed to fetch' ? ': ' + e.message : '') +
        '. Prøv igen, eller ring på 35 37 19 09.';
      err.hidden = false;
    }).then(function () {
      btn.textContent = 'Send bestilling'; btn.disabled = count() === 0;
    });
  }
  $('sent-new').addEventListener('click', function () { closeCart(); showStep('cart'); });
  $('copy').addEventListener('click', function () {
    var text = $('summary').textContent;
    var done = function () { toast('Bestillingen er kopieret'); };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(done, selectSummary);
    } else selectSummary();
  });
  function selectSummary() {
    var r = document.createRange(); r.selectNodeContents($('summary'));
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    toast('Teksten er markeret, så du kan kopiere den');
  }
  $('clear').addEventListener('click', function () {
    cart = []; render(); closeCart(); toast('Kurven er tømt');
  });

  if (ONLINE) {
    $('orderform').querySelector('button[type=submit]').textContent = 'Send bestilling';
    document.querySelector('.cart__fine').textContent = 'Du betaler, når du henter maden. Vi leverer ikke.';
  }
  render();

  // Pizzaen i toppen drejer, når man scroller
  var spin = document.querySelector('[data-spin]');
  if (spin && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', function () { spin.style.rotate = (window.scrollY * 0.25) + 'deg'; }, { passive: true });
  }

  // Hop direkte til en kategori fra et link, fx menu.html#pizza
  if (location.hash && document.querySelector(location.hash)) {
    setTimeout(function () { document.querySelector(location.hash).scrollIntoView(); }, 50);
  }
})();
