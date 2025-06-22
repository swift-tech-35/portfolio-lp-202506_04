// --- GSAP基本セットアップ ---
window.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Hero背景Ken Burns
  gsap.to("#heroBg", {
    scale: 1.08,
    y: "-3%",
    ease: "power1.out",
    duration: 8
  });

  // 2. Hero内要素（タイトル等）をスタッガで登場
  gsap.from(".hero-title, .hero-sub, .hero-content .btn-primary", {
    opacity: 0,
    y: 40,
    duration: 0.7,
    stagger: 0.15,
    delay: 0.2,
    ease: "cubic-bezier(0.18,0.89,0.32,1.28)"
  });

  // 3. セクション見出し fade-up
  gsap.utils.toArray('.section-title').forEach(el => {
    gsap.fromTo(el, {
      opacity: 0,
      y: 20
    }, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 0.45,
      ease: "cubic-bezier(0.25,0.8,0.5,1)"
    });
  });

  // 4. お知らせカード fade-up stagger
  gsap.utils.toArray('.info-card').forEach((el, i) => {
    gsap.fromTo(el, {
      opacity: 0,
      y: 30
    }, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: i * 0.12,
      ease: "cubic-bezier(0.25,0.8,0.5,1)"
    });
  });

  // 5. 3サービスカード scale-in
  gsap.utils.toArray('.service-card').forEach((el, i) => {
    gsap.fromTo(el, {
      scale: 0.95,
      opacity: 0
    }, {
      scrollTrigger: {
        trigger: el,
        start: "top 92%",
        toggleActions: "play none none none"
      },
      scale: 1,
      opacity: 1,
      duration: 0.55,
      delay: i * 0.13,
      ease: "cubic-bezier(0.18,0.89,0.32,1.28)"
    });
  });

  // 6. コラム・FAQカード fade-up + rotateX
  gsap.utils.toArray('.column-card, .faq-list details').forEach((el, i) => {
    gsap.fromTo(el, {
      opacity: 0,
      y: 40,
      rotateX: 4
    }, {
      scrollTrigger: {
        trigger: el,
        start: "top 92%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.55,
      delay: i * 0.11,
      ease: "cubic-bezier(0.18,0.89,0.32,1.28)"
    });
  });

  // 7. CTA（ページ末） fade-up
  gsap.fromTo('.cta', {
    opacity: 0,
    y: 20
  }, {
    scrollTrigger: {
      trigger: '.cta',
      start: "top 92%",
      toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    duration: 0.55,
    ease: "cubic-bezier(0.25,0.8,0.5,1)"
  });
});

// --- ヘッダー クロスフェード ---
const header = document.getElementById('header');
const hero = document.getElementById('hero');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const trigger = hero.offsetHeight * 0.6;
  if (scrollY > trigger) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// --- ハンバーガーメニュー ---
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  const isOpen = mobileMenu.style.display === 'flex';
  mobileMenu.style.display = isOpen ? 'none' : 'flex';
  document.body.style.overflow = isOpen ? '' : 'hidden';
});

// --- ページトップボタン ---
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  if(window.scrollY > 600) {
    toTop.classList.add('show');
    toTop.classList.remove('hide');
  } else {
    toTop.classList.remove('show');
    toTop.classList.add('hide');
  }
});
toTop.addEventListener('click', () => {
  gsap.to(window, { scrollTo: 0, duration: 0.7, ease: "power2.out" });
});

// --- FAQ 開閉アニメ用（オマケ） ---
document.querySelectorAll('.faq-list details').forEach((details) => {
  details.addEventListener('toggle', function() {
    if(this.open) {
      gsap.fromTo(this.querySelector('.answer'), {opacity:0, y:10}, {opacity:1, y:0, duration:0.28});
    }
  });
});
