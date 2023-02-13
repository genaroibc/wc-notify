import { defineWCNotify } from "./wc-notify.js";

defineWCNotify();

function uuid() {
  return String(Math.random() * Math.random());
}

function createNotificationItem(message) {
  const item = document.createElement("span");
  const itemId = uuid();
  const notificationContainer = document.querySelector(
    "wc-notify .wc-notify-container"
  );

  item.setAttribute("data-wc-notify-item-id", itemId);
  item.classList.add("wc-notify-item", "wc-notify-item-visible");
  item.textContent = message;

  notificationContainer.appendChild(item);

  setTimeout(() => {
    const notificationItems = Array.from(
      notificationContainer.querySelectorAll("[data-wc-notify-item-id]")
    );

    const notificationItemToRemove = notificationItems?.find(
      item => item.getAttribute("data-wc-notify-item-id") === itemId
    );

    if (notificationItemToRemove) {
      notificationContainer.removeChild(notificationItemToRemove);
    }
  }, 4000);
}

export function notify(message) {
  createNotificationItem(message);
}
