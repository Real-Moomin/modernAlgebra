(function () {
  'use strict';

  // 해설 토글
  document.querySelectorAll('.toggle-solution').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var sol = this.closest('.exercise').querySelector('.solution');
      if (!sol) return;
      sol.classList.toggle('open');
      this.textContent = sol.classList.contains('open') ? '해설 접기' : '해설 보기';
    });
  });

  // 챕터 내 앵커 링크 시 현재 섹션 하이라이트
  var navLinks = document.querySelectorAll('.chapter-nav a[href^="#"]');
  if (navLinks.length) {
    window.addEventListener('scroll', function () {
      var sections = document.querySelectorAll('.section[id]');
      var top = window.scrollY + 80;
      var current = null;
      sections.forEach(function (sec) {
        if (sec.offsetTop <= top) current = sec.id;
      });
      navLinks.forEach(function (a) {
        var id = a.getAttribute('href').slice(1);
        a.classList.toggle('active', id === current);
      });
    });
  }
})();
