class WinampLCDDisplay extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  get styles() {
    return `
      :host {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        width: 166px;
        height: 52px;
        margin-right: 2px;
      }

      .lcd {
        width: 90px;
        height: 41px;
        background: transparent;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>
      <div class="lcd">
      </div>
    `;
  }
}

customElements.define("winamp-lcd-display", WinampLCDDisplay);
