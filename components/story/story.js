'use strict';

class SiteStory extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const storyImg = this.getAttribute('story_img');
    const videoSrc = this.getAttribute('video_src');
    const live = this.getAttribute('live');
    const live_text = this.getAttribute('live_text');
    const storyText = this.getAttribute('story_text');

    const template = document.createElement('template');
    template.innerHTML = `
      <link rel="stylesheet" href="./components/story/story.css">
      <link rel="stylesheet" href="./styles/reset.css" />
      <link rel="stylesheet" href="./styles/style.css" />
      <link rel="stylesheet" href="./styles/output_tailwind.css" />
      <div class="story w-20 h-20 cursor-pointer" data-src="${videoSrc}">
        <div class="story-img">
          <img
            src="${storyImg}"
            alt="story-img"
            class="rounded-[50%] w-full h-full object-cover p-1 border-solid border-2 border-purple-700"
          />
        </div>
        ${
          live === 'yes'
            ? `<div class="live text-center w-max p-1 text-white bg-purple-500 top-1 text-xs rounded-md">${live_text}</div>`
            : ''
        }
        <p class="story-text my_elips w-20 text-xs text-center text-neutral-800  mt-3">${storyText}</p>
      </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const storyEl = this.shadowRoot.querySelector('.story');
    const video_containerEl = document.querySelector('.video_container');
    const close_xMarkEl = document.querySelector('.close-xMark');
    const videoEl = document.querySelector('video');
    let src = '';

    storyEl.addEventListener('click', () => {
      src = storyEl.getAttribute('data-src');
      videoEl.src = src;
      video_containerEl.style.display = 'flex';
    });

    close_xMarkEl.addEventListener('click', () => {
      videoEl.pause();
      videoEl.src = '';
      video_containerEl.style.display = 'none';
    });
  }

  static get observedAttributes() {
    return ['story_img', 'video_src', 'live', 'live_text', 'story_text'];
  }
}

export { SiteStory };
