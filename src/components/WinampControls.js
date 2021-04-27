import "./WinampButton.js";

class WinampControls extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  get styles() {
    return `
      :host {
        display: flex;
        flex-direction: column;
      }

      .duration {
        width: 93%;
        margin: auto;
        height: 14px;
        transform: translate(80px, 3px);
      }

      .duration .button {
        background: url(/assets/posbar.png);
        background-position-x: -248px;
        width: 29px;
        height: 10px;
      }

      .duration .button:active {
        background-position-x: -278px;
        transform: translate(1px, 0);
      }

      .eject {
        background: url(/assets/cbuttons.png);
        background-position: -114px 0;
        width: 22px;
        height: 16px;
        transform: translate(6px, 1px);
      }
      .eject:active {
        background-position: -115px -17px;
        height: 15px;
        width: 21px;
        margin-right: 1px;
        transform: translate(6px, 1px)
      }

      .all-buttons {
        display: flex;
        transform: translate(16px, 5px);
      }

      .player-buttons {
        display: flex;
      }

      .special-buttons {
        display: flex;
        width: 80px;
        height: 14px;
        transform: translate(13px, 1px);
      }

      .shuffle {
        --x: -28px;
        background: url(/assets/shufflerepeat.png);
        width: 46px;
        height: 100%;
      }

      .repeat {
        --x: 0;
        background: url(/assets/shufflerepeat.png);
        width: 29px;
        height: 100%;
      }

      .repeat,
      .shuffle {
        background-position: var(--x) 0;
      }

      .shuffle:active {
        background-position: var(--x) -16px;
      }

      .repeat:active {
        background-position: var(--x) -16px;
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
        <div class="duration">
          <div class="button"></div>
        </div>
        <div class="all-buttons">
          <div class="player-buttons">
            <winamp-button type="prev"></winamp-button>
            <winamp-button type="play"></winamp-button>
            <winamp-button type="pause"></winamp-button>
            <winamp-button type="stop"></winamp-button>
            <winamp-button type="next"></winamp-button>
          </div>
          <div class="other-button">
            <div class="eject"></div>
          </div>
          <div class="special-buttons">
            <div class="shuffle"></div>
            <div class="repeat"></div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("winamp-controls", WinampControls);
