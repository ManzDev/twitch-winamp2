import "./WinampLCDDisplay.js";
import "./WinampVolumeSlider.js";
import "./WinampBalanceSlider.js";
import "./WinampEQPLButton.js";

const TITLE = "1. DJ Mike Llama - Llama Whippin' Intro - Winamp2 WebComponent Twitch Edition";

class WinampDisplay extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  get styles() {
    return `
      :host {
      }

      .display {
        display: flex;
      }

      .right-display {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 14px;
        padding-left: 10px;
      }

      .right-display > div {
      }

      .audio-data {
        width: 154px;
        height: 8px;
        overflow: hidden;
      }

      .audio-data span {
        width: 500px;
        display: inline-block;
        animation: slideText 5s linear infinite alternate;
      }

      .audio-data,
      .kbps,
      .khz {
        font-family: "W95FA";
        font-size: 9px;
        color: #00f800;
      }

      .audio-info {
        height: 20px;
        display: flex;
      }

      .audio-info > div {
        display: flex;
        justify-content: space-between;
      }

      .audio-info > div:first-child {
        width: 54px;
      }

      .kbps,
      .khz {
        margin-top: 8px;
      }

      .audio-info > div:last-child {
        margin-left: 48px;
        width: 54px;
      }

      .mono,
      .stereo {
        transform: translate(0, 6px);
        background: url(/assets/monostereo.png);
        width: 29px;
        height: 12px;
      }

      .mono { background-position: -30px -12px }
      .stereo { background-position: 0 0 }

      .audio-controls {
        height: 15px;
        display: flex;
      }

      @keyframes slideText {
        0% { transform: translate(0, 0); }
        100% { transform: translate(-35%, 0); }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>
      <div class="display">
        <winamp-lcd-display></winamp-lcd-display>
        <div class="right-display">
          <div class="audio-data">
            <span>${TITLE}</span>
          </div>
          <div class="audio-info">
            <div>
              <div class="kbps">128</div>
              <div class="khz">44</div>
            </div>
            <div>
              <div class="mono"></div>
              <div class="stereo"></div>
            </div>
          </div>
          <div class="audio-controls">
            <winamp-volume-slider></winamp-volume-slider>
            <winamp-balance-slider></winamp-balance-slider>
            <winamp-eqpl-button type="eq"></winamp-eqpl-button>
            <winamp-eqpl-button type="pl"></winamp-eqpl-button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("winamp-display", WinampDisplay);
