class WCNotification extends HTMLElement {
  constructor(args) {
    super(args);
  }

  attributeHasChangedCallback(...atrs) {}

  connectedCallback() {
    this.innerHTML = `<style>
wc-notification .wc-notification-container {
  display: flex;
  flex-direction: column-reverse;
  pointer-events: none;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: absolute;
  top: 0;
  left: 50%;
  translate: -50% 0;
}

wc-notification .wc-notification-item {
  transition: all .3s;

  pointer-events: auto;

  max-width: 100vw;
  margin-top: 1rem;
  box-shadow: 0px 2px 5px #0003;
  padding: 1rem;
  opacity: 0;
  background-color:var(--wc-notification-bg, #000);
  color:var(--wc-notification-color, #eee);
  height: min-content;
  transition: transform .5s ease;
  animation: fadeIn 0.5s ease forwards, fadeOut 0.5s ease 3s forwards;
}

@media screen and (max-width: 768px) {
  wc-notification .wc-notification-item {
    font-size: .8rem
  }

  wc-notification .wc-notification-container {
    gap: 12px
  }
}

@keyframes fadeOut {
   to { opacity: 0; }
}

@keyframes fadeIn {
   to { opacity: 1; }
}
</style>
<div class="wc-notification-container"></div>`;
  }

  disconnectedCallback() {}
}

export function defineWCNotification() {
  if (window.customElements.get("wc-notification")) return;

  window.customElements.define("wc-notification", WCNotification);
}
