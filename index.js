import { defineWCNotification } from "./wc-notification.js";

defineWCNotification();

function uuid() {
  return String(Math.random() * Math.random());
}

function createNotificationItem(message) {
  const item = document.createElement("span");
  const itemId = uuid(); // add a random uuid
  const notificationContainer = document.querySelector(
    "wc-notification .wc-notification-container"
  );

  item.setAttribute("data-wc-notification-item-id", itemId);
  item.classList.add("wc-notification-item", "wc-notification-item-visible");
  item.textContent = message;

  notificationContainer.appendChild(item);

  setTimeout(() => {
    const notificationItems = Array.from(
      notificationContainer.querySelectorAll("[data-wc-notification-item-id]")
    );

    const notificationItemToRemove = notificationItems?.find(
      item => item.getAttribute("data-wc-notification-item-id") === itemId
    );

    if (notificationItemToRemove) {
      notificationContainer.removeChild(notificationItemToRemove);
    }
  }, 4000);
}

export function notify(message) {
  createNotificationItem(message);
}
