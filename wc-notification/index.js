import { defineWCNotification } from "./wc-notification.js";

defineWCNotification();

const NOTIFICATION_ITEM_HEIGHT = 80;
const config = {
  nOfNotifications: 0
};

function uuid() {
  return String(Math.random() * Math.random());
}

function createNotificationItem(message) {
  const item = document.createElement("span");
  const itemId = uuid(); // add a random uuid
  const notificationContainer = document.querySelector("wc-notification");
  const notificationItems = Array.from(
    notificationContainer.querySelectorAll("[data-wc-notification-item-id]")
  );

  notificationItems.reverse().forEach((item, index) => {
    item.style = `transform: translateY(${
      NOTIFICATION_ITEM_HEIGHT * (index + 1)
    }px)`;
  });

  item.setAttribute("style", `translate: -50% 0`);
  item.setAttribute("data-wc-notification-item-id", itemId);
  item.classList.add("wc-notification-item", "wc-notification-item-visible");
  item.textContent = message;

  notificationContainer.appendChild(item);

  config.nOfNotifications++;

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

    config.nOfNotifications--;
  }, 4000);
}

export function notificate(message) {
  createNotificationItem(message);
}
