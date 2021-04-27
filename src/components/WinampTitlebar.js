class WinampTitlebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  get styles() {
    return `
      .winamp-titlebar {
        display: flex;
        width: 100%;
        height: 12px;
      }

      .winamp-titlebar > div {
        height: 100%;
      }

      .winamp-titlebar:active {
        background-position: -27px 0;
      }

      .top-button {
        width: 11px;
        height: 11px;
      }

      .first-button {
        width: 15px;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
      }

      .about {
        background: url(assets/titlebar.png);
        image-rendering: pixelated;
        background-position: 0 0;
        width: 9px;
        height: 9px;
      }

      .about:active {
        background-position-y: -9px;
      }

      .titlebar {
        background: gold;
        background: url(assets/titlebar.png);
        background-position: -42px -15px;
        width: 228px;
      }

      .titlebar:active {
        background-position-y: 0;
      }

      .top-button.minimize {
        background: url(assets/titlebar.png);
        background-position: -269px -15px;
      }
      .top-button.minimize:active {
        background-position-y: 0;
      }

      .top-button.maximize {
        background: url(assets/titlebar.png);
        background-position: -281px -15px;
      }
      .top-button.maximize:active {
        background-position-y: 0;
      }

      .top-button.close {
        background: url(assets/titlebar.png);
        background-position: -292px -15px;
      }
      .top-button.close:active {
        background-position-y: 0;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>
      <div class="winamp-titlebar">
        <div class="first-button">
          <div class="about"></div>
        </div>
        <div class="titlebar"></div>
        <div class="top-button minimize"></div>
        <div class="top-button maximize"></div>
        <div class="top-button close"></div>
      </div>
    `;
  }
}

customElements.define("winamp-titlebar", WinampTitlebar);
