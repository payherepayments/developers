---
id: embed-sdk
title: JavaScript Embed SDK
sidebar_label: Embed SDK
---

## Installation

Firstly make sure to load the embed code on your page.

```html
<script src="https://payhere.co/embed/embed.js"></script>
```

Alternatively install via npm.

```sh
# If using npm
$ npm install payhere-embed-sdk --save
# or using yarn
$ yarn add payhere-embed-sdk
```

## How it works

This more advanced integration will allow success and failure callbacks and support more options than the payment buttons above. [See a complete example](https://gist.github.com/phawk/1fcea088772c7249617654c0a226463c)

```js
PayHere.launch({
  embedURL: "https://app.payhere.co/altlabs/buy/coffee",
  customerName: "Pete Hawkins", // optional
  customerEmail: "pete@example.org", // optional
  disableCustomer: "yes", // optional
  amountInCents: 4000, // optional
  hideAmount: "yes", // optional
  customFields: {
    street_address: "14 Anystreet",
    town: "Anytown",
    postcode: "A1 1AB",
    size: "XL",
  }, // optional
  onSuccess: function({ customerName, customerEmail, quantityPurchased, requiresFurtherAuthentication, plan: { id, name }, paymentAmount }) {
    //
  },
  onFailure: function(error) {
    //
  },
  onClose: function() {
    //
  }
})
```

### Properties

- **embedURL** - the link to your Payhere payment form
- **customerName** - optional name to prefill customer info
- **customerEmail** - optional email to prefill customer info
- **disableCustomer** - optionally disable the customer fields so they can't be edited, set this to `"yes"` to disable
- **amountInCents** - optionally pass in the price for a plan setup as "Customer sets price (donation)"
- **hideAmount** - optionally when passing "amountInCents" option you can hide the price selection from the end user to fix it to the price you have set
- **customFields** - optionally pass in set values for custom fields
- **onSuccess** - optional callback - returns a payment info
- **onFailure** - optional callback - returns an error

    ```json
    {
      error: "Card declined"
    }
    ```
- **onClose** - optional callback - called when payment form is closed

### Custom fields

When passing custom fields the key will be a lowercased version of the label, with spaces replaced by '_'. I.e. if you have a custom field called 'House number' and 'Postcode' you will pass their values as follows:

```
customFields: {
  house_number: "42",
  postcode: "BT1 1AB"
}
```

If you have marked custom fields as 'hidden' you can still pass the values in using the embed SDK, this allows you to pass hidden metadata.
