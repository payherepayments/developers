---
id: payment-button-js
title: Payment button embed
sidebar_label: Simple embed
---

## Payment button embed

We try to make getting setup with Payhere as easy as possible, that's why you can easily copy and paste two lines of code and have an integrated payment modal operating on your site. Our base install is as easy as copy pasting a snippet from your plan in the merchant admin.

![Embed code](/img/docs/embed.png)

This code is very straightforward:

```html
<button data-payhere-embed="https://app.payhere.co/altlabs/coffee">Payhere</button>
<script src="https://payhere.co/embed/embed.js"></script>
```

### Additional parameters available

- `data-payhere-embed="url-to-payment-form"` **Required** - this is the only required param and must link directly to your payment form.
- `data-payhere-customer-name="customer-name"` *Optional* - allows you to prefill customers name
- `data-payhere-customer-email="customer@email.com"` *Optional* - allows you to prefill customers email address
- `data-payhere-disable-customer="yes"` *Optional* - disables the customer fields so they cannot edit their details, this is useful if you want to ensure the customers email address on your system matches up with Payhere

A complete example:

```html
<button
  data-payhere-embed="https://app.payhere.co/altlabs/coffee"
  data-payhere-customer-name="Pete Hawkins"
  data-payhere-customer-email="pete@example.org"
  data-payhere-disable-customer="yes"
>
  Buy me a coffee
</button>
<script src="https://payhere.co/embed/embed.js"></script>
```

### Multiple plans per page

One other thing to bear in mind, you can have multiple plans on your page, for this you'll only need to include the embed code once.

```html
<button data-payhere-embed="https://app.payhere.co/altlabs/coffee">Buy me an americano</button>
<button data-payhere-embed="https://app.payhere.co/altlabs/coffee-flat-white">Buy me a flat white</button>
<button data-payhere-embed="https://app.payhere.co/altlabs/coffee-late">Buy me a latte</button>
<script src="https://payhere.co/embed/embed.js"></script>
```
