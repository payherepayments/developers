---
id: intro
title: Getting Started
sidebar_label: Getting Started
---

Payhere makes it simple to integrate with your existing service. We are always improving our integrations, so keep an eye out here for changes.

## Simple link

The most basic way to get started with Payhere is by emailing your customers a link to a payment form, or setting up a link on your website.

[Read more](link.md)

## Simple embed

Our simple embed is the next level up, but it still only requires two lines of code

```html
<button data-payhere-embed="https://sandbox.payhere.co/altlabs/coffee">Payhere</button>
<script src="https://payhere.co/embed/embed.js"></script>
```

## Using with React

We have a react plugin available, we think it’s the easiest way to collect one-off and recurring payments using React.

```jsx
<Payhere
  selector="#payhere-modal"
  embedURL={"https://sandbox.payhere.co/altlabs/coffee"}
  open={true}
  onSuccess={() => {}}
  onFailure={() => {}}
  onClose={() => {}}
/>
```

[Read more](react-sdk.md)

## JavaScript Embed SDK

Our JavaScript embed SDK allows advanced integrations in all frameworks.

```js
Payhere.launch({
  embedURL: "https://sandbox.payhere.co/altlabs/coffee",
  onSuccess: () => {},
  onFailure: () => {},
  onClose: () => {}
})
```

[Read more](embed-sdk.md)

## Webhooks

Webhooks provide a secure way for us to communicate payment and customer information with your backend.

[Read more](webhooks.md)

## API

Use our API to build advanced integrations.

[Read more](api-auth.md)
