# Web Component Notification

A simple and customizable notification web component.

## Getting started

Quick instalation in three simple steps:

1. Install

```
npm i wc-notify
```

2. Add at the root of your project ([see examples in some popular frameworks](#examples))

```html
<wc-notify></wc-notify>
```

3. Use

```js
import { notify } from "wc-notify";

notify("An awesome notification 🥳");
```

## Customization

You can pass an object as second argument to the `notify` function to customize the notification:

```js
notify("Logged in successfully!", {
  duration: 4000 // in milliseconds
});
```

## Examples

### NextJS

### React (Vite)

### Astro
