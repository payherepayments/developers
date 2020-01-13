---
id: testing
title: Testing your payhere integration
sidebar_label: Testing
---

If you are integrating payhere with your website or into a platform, it's important to test your integration before going live. We provide a [Sandbox](https://sandbox.payhere.co) site that runs Stripe and GoCardless in test mode to allow you to easily test your integration without using your own money.

## Sandbox

You can sign up for a new payhere account on our [Sandbox](https://sandbox.payhere.co) site. This functions exactly the same as our live site apart from using test card numbers. You will have to connect your Stripe and GoCardless accounts up again, this will connect in test mode and won't affect your live account.

### Testing cards

You can use [Stripe's test card numbers](https://stripe.com/docs/testing#cards).

**Valid VISA payment:**

```
Card number: 4242 4242 4242 4242
Expiry: [Any date in the future e.g. 12/25]
CVV: [Any 3 digits e.g. 404]
```

### Testing direct debits

Similarly [GoCardless provides test details](https://developer.gocardless.com/getting-started/developer-tools/test-bank-details/).

**Testing BACS in the UK:**

```
Sort code:
20-00-00
Account number:
55779911
```
