class WCNotification extends HTMLElement {
  constructor(args) {
    super(args);
  }

  attributeHasChangedCallback(...atrs) {}

  connectedCallback() {
    this.innerHTML = `<style>
wc-notification .wc-notification-item {
  max-width: 100vw;
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  translate: -50% 0;
  margin-top: 1rem;
  box-shadow: 0px 2px 5px #0003;
  padding: 1rem;
  opacity: 0;
  background-color:var(--wc-notification-bg, #000);
  color:var(--wc-notification-color, #eee);

  transition: transform .5s ease;
  animation: fadeIn 0.5s ease forwards, fadeOut 0.5s ease 3s forwards;
}

@media screen and (max-width: 768px) {
wc-notification .wc-notification-item {
  font-size: .8rem
  }
}

@keyframes fadeOut {
   to { opacity: 0; }
}

@keyframes fadeIn {
   to { opacity: 1; }
}
</style>`;
  }

  disconnectedCallback() {}
}

export function defineWCNotification() {
  if (window.customElements.get("wc-notification")) return;

  window.customElements.define("wc-notification", WCNotification);
}
