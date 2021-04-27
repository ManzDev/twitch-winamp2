import "./WinampTitlebar.js";
import "./WinampBody.js";

class WinampMain extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
      .winamp-main {
        display: flex;
        flex-direction: column;
        width: 275px;
        height: 116px;
        background: url(/assets/main.png);
        image-rendering: pixelated;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${WinampMain.styles}</style>
      <div class="winamp-main">
        <winamp-titlebar></winamp-titlebar>
        <winamp-body></winamp-body>
      </div>
    `;
  }
}

customElements.define("winamp-main", WinampMain);
