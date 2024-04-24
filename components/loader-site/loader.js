'use strict';

const template = document.createElement(`template`);

class SiteLoader extends HTMLElement {
  constructor() {
    super();

    template.innerHTML = `<link rel="stylesheet" href="./components/loader-site/loader.css"><div class="loader__container flex h-screen items-center justify-center">
        <div class="loader"></div>
        </div>`;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const loaderContainerEl =
      this.shadowRoot.querySelector('.loader__container');

    window.addEventListener('load', () => {
      loaderContainerEl.style.display = 'none';
    });
  }
}

export { SiteLoader };
