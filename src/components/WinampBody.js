import "./WinampControls.js";
import "./WinampDisplay.js";

class WinampBody extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  get styles() {
    return `
      div {
        display: flex;
        flex-direction: column;
      }

      winamp-display {

      }

      winamp-controls {
        height: 45px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>
      <div>
        <winamp-display></winamp-display>
        <winamp-controls></winamp-controls>
      </div>
    `;
  }
}

customElements.define("winamp-body", WinampBody);
