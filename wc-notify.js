class WCNotify extends HTMLElement {
  constructor(args) {
    super(args);
  }

  attributeHasChangedCallback(...atrs) {}

  connectedCallback() {
    const TRANSITION_DURATION = "0.2s";

    this.innerHTML = `<style>
wc-notify .wc-notify-container {
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

wc-notify .wc-notify-item {
  transition: all .3s;

  pointer-events: auto;

  max-width: 100vw;
  margin-top: 1rem;
  box-shadow: 0px 2px 5px #0003;
  padding: 1rem;
  opacity: 0;
  background-color:var(--wc-notify-bg, #000);
  color:var(--wc-notify-color, #eee);
  height: min-content;
  transition: transform ${TRANSITION_DURATION} ease;
  animation: fadeIn ${TRANSITION_DURATION} ease forwards,
   fadeOut ${TRANSITION_DURATION} ease calc(var(--wc-notify-item-duration) - ${TRANSITION_DURATION}) forwards;
}

@media screen and (max-width: 768px) {
  wc-notify .wc-notify-item {
    font-size: .8rem
  }

  wc-notify .wc-notify-container {
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
<div class="wc-notify-container"></div>`;
  }

  disconnectedCallback() {}
}

const wcNotifyIdentifier = "wc-notify";

export function defineWCNotify() {
  if (window.customElements.get(wcNotifyIdentifier)) return;

  window.customElements.define(wcNotifyIdentifier, WCNotify);
}
