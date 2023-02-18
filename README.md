# Web Component Notification

A simple and customizable notification web component.

## 🎲 Demo

See a demo using React [here](https://codesandbox.io/s/wc-notify-demo-nn687m)

## ▶️ Getting started

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

## 🎨 Customization

You can pass an object as second argument to the `notify` function to customize the notification:

```js
notify("Logged in successfully!", {
  duration: 4000 // in milliseconds
});
```

## 📂 Examples

### NextJS

Add `<wc-notify />` ihttps://codesandbox.io/s/wc-notify-demo-nn687mn the _\_app.jsx_ (or _\_app.tsx_) file:

```jsx
export default function App({ Component, pageProps }) {
  return (
    <>
      <wc-notify />
      <Component { ...pageProps } />
    </>
  )
}
```

If your linter complains about that <p style="color: #f66;">_Property 'wc-notify' does not exist on type 'JSX.IntrinsicElements'._</p> you can simply create a _global.d.ts_ file in the root of your project and paste the following code:

```ts
// global.d.ts
import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wc-notify': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export {};

```

### React (with Vite)

### Astro
