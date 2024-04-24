'use strict';

const $ = document;
AOS.init();
//!--------- LOADER
const loaderContainerEl = $.querySelector('.loader__container');
window.addEventListener('load', () => {
  loaderContainerEl.style.display = 'none';
});

//!--------- Footer Btn
$.getElementById(`upBtn`).addEventListener(`click`, () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

//!--------- check User Net With Sweet Alert
window.addEventListener(`offline`, () => {
  swal({
    title: 'شما آفلاین هستید !',
    icon: 'error',
    dangerMode: true,
    closeOnClickOutside: false,
    closeOnEsc: false,
  });
});
window.addEventListener(`online`, () => {
  swal({
    title: 'شما آنلاین هستید :)',
    icon: 'success',
    dangerMode: false,
    closeOnClickOutside: false,
    closeOnEsc: false,
  });
});

//!--------- Check User Browser

window.addEventListener('load', () => {
  let userAgent = navigator.userAgent;
  let userBrowser = null;
  if (userAgent.match(/chrome/i)) {
    userBrowser = `chrome`;
  }
  if (userBrowser !== `chrome`) {
    swal({
      title: `استفاده از مرورگر گوگل کروم باعث بهبود تجربه شما هنگام استفاده از سایت میشود .`,
      icon: 'info',
      dangerMode: false,
      closeOnClickOutside: false,
      closeOnEsc: false,
    });
  }
});

//!--------- Components

import { SiteHeader } from '../components/header/header.js';
window.customElements.define(`site-header`, SiteHeader);

import { SiteLoader } from '../components/loader-site/loader.js';
window.customElements.define('site-loader', SiteLoader);

import { SiteStory } from '../components/story/story.js';
window.customElements.define(`site-story`, SiteStory);
