const elBarBtn = document.querySelector('.js-bar-btn');
const elNav = document.querySelector('.js-nav');
const elCloseBtn = document.querySelector('.js-close-btn');
const elTestimonialList = document.querySelector('.testimonials__list');
const elTestimonialItems = document.querySelectorAll('.testimonials__item');
const elFooterBtn = document.querySelector('.js-footer-btn');
const elDarkModeBtn = document.querySelector('.js-dark-mode-btn');
const elHeroSection = document.querySelector('.js-hero-section');
const elSolutionsList = document.querySelector('.js-solutions-list');
const elContactSection = document.querySelector('.js-contact-section');
const elPricingLists = document.querySelectorAll('.js-pricing-inner-list');
const elNewsList = document.querySelector('.js-news-list');
const elNewsLinks = document.querySelectorAll('.js-news-link');
const elSliderPrevBtn = document.querySelector('.js-slider-prev-btn');
const elSliderNextBtn = document.querySelector('.js-slider-next-btn');
const elModalVideoBtn = document.querySelector('.js-modal-video-btn');
const elModal = document.querySelector('.js-modal');
const elOverlay = document.querySelector('.js-overlay');
const elModalCloseBtn = document.querySelector('.js-modal-close-btn');
const elVideoIframe = document.querySelector('.js-video-iframe');
if (localStorage.getItem('dark') && localStorage.getItem('dark') === 'true') {
  darkModeEnabled();
}

elDarkModeBtn.addEventListener('click', (evt) => {

  darkModeEnabled();

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('dark', true);
  } else {
    localStorage.setItem('dark', false);
  }

});

elBarBtn.addEventListener('click', (evt) => {
  elNav.classList.toggle('site-header__nav--move');
});

elCloseBtn.addEventListener('click', (evt) => {
  elNav.classList.remove('site-header__nav--move');
});

elTestimonialItems.forEach(item => {
  item.addEventListener('click', (evt) => {
    elTestimonialItems.forEach(item => {
      if (item.classList.contains('testimonials__item--active')) {
        item.classList.remove('testimonials__item--active');
      }
    });
    item.classList.add('testimonials__item--active');
  });
});

elNewsList.childNodes.forEach(item => {
  if (item.classList) {
    elNewsLinks.forEach(item => {
      item.classList.toggle('dark-mode-news-link-after-bg');
    });
  }
});

elModalVideoBtn.addEventListener('click', (evt) => {

  elOverlay.style.display = 'block';
  elModal.style.top = '10px';

});

elModalCloseBtn.addEventListener('click', (evt) => {
  elOverlay.style.display = 'none';
  elModal.style.top = '-250vh';
  let source = elVideoIframe.src;
  elVideoIframe.src = source;
});

elOverlay.addEventListener('click', (evt) => {
  elOverlay.style.display = 'none';
  elModal.style.top = '-250vh';
  console.log(elVideoIframe.childNodes);
  let source = elVideoIframe.src;
  elVideoIframe.src = source;
});

window.addEventListener('resize', (evt) => {
  if (screen.width < 500) {
    elFooterBtn.innerHTML = 'Sign Up';
  } else {
    elFooterBtn.innerHTML = 'Subscribe';
  }
});


function darkModeEnabled() {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('dark-mode-bg');
  elDarkModeBtn.classList.toggle('dark-mode-img-btn');
  elHeroSection.classList.toggle('dark-mode-hero-bg-img');
  elContactSection.classList.toggle('dark-mode-contact-bg');

  for (const items of elPricingLists) {
    items.childNodes.forEach(item => {
      if (item.classList) {
        if (item.classList.contains('pricing__inner-item')) {
          item.classList.toggle('dark-mode-piricing-list-item-check-color');
        }
      }
    });
  }

  elSliderPrevBtn.classList.toggle('dark-mode-slider-prev-btn-bg-img');
  elSliderNextBtn.classList.toggle('dark-mode-slider-next-btn-bg-img');
  elSolutionsList.childNodes.forEach(item => {
    item.childNodes.forEach(item => {
      if (item.classList) {
        if (item.classList.contains('solution-item__details-wrapper')) {
          item.childNodes.forEach(item => {
            if (item.classList) {
              if (item.classList.contains('solution-item__link')) {
                item.classList.toggle('dark-mode-solution-link-color');
              }
            }
          });
        }
      }
    });
  });
}