import demoAudio from "/assets/demo.mp3";

const demo = new Audio(demoAudio);

const MAIN_BUTTON_POSITION = {
  prev: 0,
  play: -23,
  pause: -46,
  stop: -69,
  next: -92
};

class WinampButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  get styles() {
    return `
      .button {
        background: url(assets/cbuttons.png);
        background-position-x: var(--x, 0);
        width: 22px;
        height: 18px;
      }
      .button:active {
        background-position-x: calc(var(--x) - 1px);
        background-position-y: 17px;
        height: 17px;
        width: 21px;
        margin-right: 1px;
      }
    `;
  }

  connectedCallback() {
    this.type = this.getAttribute("type") ?? "play";
    this.render();
    const position = MAIN_BUTTON_POSITION[this.type];
    const button = this.shadowRoot.querySelector(".button");
    button.style.setProperty("--x", `${position}px`);

    if (this.type === "play") {
      button.addEventListener("click", () => demo.play());
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>
      <div class="button"></div>
    `;
  }
}

customElements.define("winamp-button", WinampButton);
