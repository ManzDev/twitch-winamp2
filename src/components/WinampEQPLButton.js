class WinampEQPLButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  get styles() {
    return `
      .button {
        background: url(/assets/shufflerepeat.png);
        background-position-x: var(--x);
        background-position-y: -73px;
        width: 22px;
        height: 12px;
      }
      .button:active {
        background-position-x: var(--active-x);
        background-position-y: -74px;
        height: 11px;
      }
      .button.off {
        background-position-y: -61px;
      }
    `;
  }

  connectedCallback() {
    this.type = this.getAttribute("type") ?? "eq";
    this.render();
    this.shadowRoot.querySelector(".button").style.setProperty("--x", this.type === "eq" ? 0 : "-22px");
    this.shadowRoot.querySelector(".button").style.setProperty("--active-x", this.type === "eq" ? "-47px" : "-70px");
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>
      <div class="button">
      </div>
    `;
  }
}

customElements.define("winamp-eqpl-button", WinampEQPLButton);
