class WCNotification extends HTMLElement {
  constructor(args) {
    super(args);
  }

  attributeHasChangedCallback(...atrs) {}

  connectedCallback() {
    this.innerHTML = `<style>
wc-notification .wc-notification-item {
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  background-color: red;
  translate: -50% 0;
  margin-top: 1rem;
  background-color: #000;
  box-shadow: 0px 2px 5px 2px #0009;
  padding: 1rem;
  opacity: 0;

  transition: transform .5s ease;
  animation: fadeIn 0.5s ease forwards, fadeOut 0.5s ease 3s forwards;
}

@keyframes fadeOut {
   to { opacity: 0; color: red}
}

@keyframes fadeIn {
   to { opacity: 1; }
}
</style>
`;
  }

  disconnectedCallback() {}
}

export function defineWCNotification() {
  if (window.customElements.get("wc-notification")) return;

  window.customElements.define("wc-notification", WCNotification);
}
