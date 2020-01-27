---
id: react-sdk
title: React Embed SDK
sidebar_label: React SDK
---

## Using with React / Gatsby / Next.js

Our [embed SDK](https://github.com/payherepayments/payhere-embed-sdk) supports React natively and makes it one of the easiest ways to collect payments using React. There are no additional steps if you are using create-react-app, Gatsby or Next.js.

### 1. Installation

```sh
# If using npm
$ npm install payhere-embed-sdk --save
# or using yarn
$ yarn add payhere-embed-sdk
```

### 2. Setup a container element

Place a `<div id="payhere-modal"></div>` somewhere in your outer layout, right before `</body>` tag if possible, PayhereEmbed uses a react portal to launch inside, this prevents any z-index issues if your application uses absolute or fixed position elements. This element needs to be in the DOM before you include the Payhere component.

### 3. Load Payhere

Below is a simple example triggering the payment popup when a button is clicked, read on for more advanced usage and additional params.

```jsx
import React, { useState } from "react"
import "payhere-embed-sdk/dist/react.css"
import Payhere from "payhere-embed-sdk/dist/react"

const SubscriptionPage = () => {
  const [success, setSuccess] = useState(false)
  const [showPayhere, setShowPayhere] = useState(false)

  return (
    <div>
      <Button
        onClick={() => setShowPayhere(true)}
      >
        Continue to payment
      </Button>

      <Payhere
        selector="#payhere-modal"
        embedURL={"https://payhere.co/altlabs/coffee"}
        open={showPayhere}
        onSuccess={data => {
          console.log("Payhere success", data)
          setSuccess(true)
        }}
        onFailure={err => {
          console.log("Payhere failed", err)
          setSuccess(true)
        }}
        onClose={() => {
          setShowPayhere(false)
          if (success) {
            console.log("Payment success")
          } else {
            console.log("Payment failed")
          }
        }}
      />
    </div>
  )
}
```

## Advanced options

### Passing in a custom price

When creating a plan with 'User selects amount' it opens up some powerful integrations. We originally designed this feature for donations allowing end users to set their own price, but it also allows developers to calculate the price on their side and pass it through to the embed widget.

We also provide the option of hiding the amount field in our form, so the end user cannot update the price you passed in.

```jsx
<Payhere
  amountInCents={1000}
  hideAmount={"yes"}

  // rest of params
  selector="#payhere-modal"
  embedURL={"https://payhere.co/altlabs/coffee"}
  open={showPayhere}
  onSuccess={() => {}}
  onFailure={() => {}}
  onClose={() => {}}
/>
```

### Passing in customer name / email

If your website/web app performs user authentication before asking for payment you can optionally pass in customer name and email, and even lock the fields in the payment form to disable the customer from updating them.

This is helpful when you want to match up incoming webhooks to your customer via their email address (although you can also setup custom fields and pass in a user_id param).

```jsx
<Payhere
  customerName="Johnathan Appleseed"
  customerEmail="john.appleseed@example.org"
  disableCustomer="yes"

  // rest of params
  selector="#payhere-modal"
  embedURL={"https://payhere.co/altlabs/coffee"}
  open={showPayhere}
  onSuccess={() => {}}
  onFailure={() => {}}
  onClose={() => {}}
/>
```

### Custom fields

Custom fields can be created against your plans, you can either prefill their values, or if you have created hidden custom fields you can pass the values without the end user seeing or being able to edit them.

```jsx
<Payhere
  customFields={{
    gift_aid: true,
    address: "23 Village Road\nBelfast\nBT1 1AA, UK"
  }}

  // rest of params
  selector="#payhere-modal"
  embedURL={"https://payhere.co/altlabs/coffee"}
  open={showPayhere}
  onSuccess={() => {}}
  onFailure={() => {}}
  onClose={() => {}}
/>
```

### All properties

You can find a list of all supported properties and what they do in our [Vanilla JavaScript Embed SDK](/docs/embed-sdk#properties).

### Source code

Source code is available on [GitHub](https://github.com/payherepayments/payhere-embed-sdk) and we welcome any issues or contributions. We’d also love to see how you use Payhere in your React apps, [please contact us](mailto:hello@payhere.co) if you would like your project featured in our examples directory.
