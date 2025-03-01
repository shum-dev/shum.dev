// Icons set. Thanks to Phosphor Icons (https://phosphoricons.com/)
class IconSet extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <svg style="display: none" xmlns="http://www.w3.org/2000/svg">
      <!-- external Link -->
      <symbol id="i-external-link" viewBox="0 0 256 256" role="img">
        <rect width="256" height="256" fill="none"></rect>
        <polyline
          points="216 100 216 40 156 40"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
        <line
          x1="144"
          y1="112"
          x2="216"
          y2="40"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <path
          d="M184,144v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h64"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
      </symbol>

      <!-- Github -->
      <symbol
        id="i-github"
        viewBox="0 0 24 24"
        role="img"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        ></path>
      </symbol>

      <!-- LinkedIn -->
      <symbol id="i-linkedin" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"></rect>
        <rect
          x="36"
          y="36"
          width="184"
          height="184"
          rx="8"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></rect>
        <line
          x1="120"
          y1="112"
          x2="120"
          y2="176"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="88"
          y1="112"
          x2="88"
          y2="176"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <path
          d="M120,140a28,28,0,0,1,56,0v36"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
        <circle cx="88" cy="80" r="12"></circle>
      </symbol>

      <!-- Telegram -->
      <symbol id="i-telegram" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"></rect>
        <path
          d="M88,134.9,177.9,214a8,8,0,0,0,13.1-4.2L228.6,45.6a8,8,0,0,0-10.7-9.2L33.3,108.9c-7.4,2.9-6.4,13.7,1.4,15.3Z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
        <line
          x1="88"
          y1="134.9"
          x2="224.1"
          y2="36.6"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <path
          d="M132.9,174.4l-31.2,31.2A8,8,0,0,1,88,200V134.9"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
      </symbol>

      <!-- Email -->
      <symbol viewBox="0 0 256 256" id="i-email">
        <rect width="256" height="256" fill="none"></rect>
        <polyline
          points="224 56 128 144 32 56"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
        <path
          d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
        <line
          x1="110.5"
          y1="128"
          x2="34.5"
          y2="197.7"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="221.5"
          y1="197.7"
          x2="145.5"
          y2="128"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
      </symbol>

      <!-- Location -->
      <symbol id="i-location" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"></rect>
        <circle
          cx="128"
          cy="104"
          r="32"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></circle>
        <path
          d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
      </symbol>

      <!-- Upwork -->
      <symbol id="i-upwork" viewBox="0 0 64 64">
        <path
          d="M49.487 15.034c-6.86.033-12.074 4.57-14.026 11.8-3.275-5.04-5.83-10.805-7.295-15.672l-7.22.034.1 19.138a6.861 6.861 0 0 1-13.722.065l-.1-19.138L0 11.296.1 30.435C.128 38.377 6.474 44.67 14.24 44.63s14.055-6.386 14.02-14.33l-.015-3.25c1.456 2.88 3.276 5.94 5.276 8.64l-4.415 21.144 7.4-.034 3.18-15.362c2.896 1.793 6.15 2.86 9.94 2.842C57.57 44.245 64.04 37.717 64 29.41c-.036-7.946-6.568-14.413-14.512-14.377zm.103 21.846c-2.888.013-5.782-1.236-8.138-3.213l.708-2.9v-.182c.528-3.074 2.126-8.316 7.542-8.34a7.244 7.244 0 0 1 7.257 7.188c-.163 4.153-3.577 7.42-7.37 7.437z"
          fill="currentColor"
        />
      </symbol>

      <!-- Doc file -->
      <symbol id="i-doc-file" fill="currentColor" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"></rect>
        <path
          d="M58,216a24,24,0,0,0,0-48H44v48Z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
        <ellipse
          cx="130"
          cy="192"
          rx="22"
          ry="24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></ellipse>
        <path
          d="M212,210.5a21,21,0,0,1-14,5.5c-12.2,0-22-10.7-22-24s9.8-24,22-24a21,21,0,0,1,14,5.5"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
        <path
          d="M48,128V40a8,8,0,0,1,8-8h96l56,56v40"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
        <polyline
          points="152 32 152 88 208 88"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
      </symbol>
      <!-- Pdf file -->
      <symbol id="i-pdf-file" fill="currentColor" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"></rect>
        <path
          d="M48,128V40a8,8,0,0,1,8-8h96l56,56v40"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
        <polyline
          points="152 32 152 88 208 88"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
        <path
          d="M48,200H64a16,16,0,0,0,0-32H48v48"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
        <polyline
          points="216 168 188 168 188 216"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
        <line
          x1="212"
          y1="196"
          x2="188"
          y2="196"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <path
          d="M128,216a24,24,0,0,0,0-48H114v48Z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
      </symbol>
    </svg>
    `;
  }
}

customElements.define("icon-set", IconSet);
