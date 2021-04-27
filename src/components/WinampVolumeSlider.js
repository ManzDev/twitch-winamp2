class WinampVolumeSlider extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  get styles() {
    return `
      :host {
        display: block;
        transform: translate(-3px, 0);
      }

      .slider {
        background: url(/assets/volume.png);
        background-position-y: -285px;
        width: 68px;
        height: 14px;
      }

      .button {
        background: url(/assets/volume.png);
        background-position: -15px -422px;
        width: 14px;
        height: 12px;
        transform: translate(40px, 1px);
      }
      .button:active {
        background-position-x: 0;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>
      <div class="slider">
        <div class="button"></div>
      </div>
    `;
  }
}

customElements.define("winamp-volume-slider", WinampVolumeSlider);
