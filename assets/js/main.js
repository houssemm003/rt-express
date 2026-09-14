// Main interactive behaviors: mobile nav toggle, scroll reveal, simple counters
document.addEventListener('DOMContentLoaded', function(){
  // Mobile nav toggle
  var toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(function(btn){
    btn.addEventListener('click', function(){
      var nav = btn.closest('.nav');
      var links = nav.querySelector('.links');
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', (!expanded).toString());
      links.classList.toggle('show');
    });
  });

  // Scroll reveal
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('inview');
        // once in view, unobserve
        io.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.reveal, .fade-in').forEach(function(el){ io.observe(el); });

  // Simple count-up for stat numbers (if numeric)
  document.querySelectorAll('.stat .num').forEach(function(el){
    var txt = el.textContent.trim();
    if(/^[0-9]+(%|)$/.test(txt)){
      var target = parseInt(txt,10);
      var start = 0; var dur = 900; var startAt = performance.now();
      function step(ts){
        var p = Math.min(1,(ts-startAt)/dur);
        el.textContent = Math.round(p*target) + (txt.endsWith('%')? '%':'');
        if(p<1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
  });
});
