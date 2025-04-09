---
id: link
title: Simple link
sidebar_label: Simple link
---

## The easiest way to start accepting payments

The easiest way to use Payhere is simply to copy the URL to your payment form and share it directly with your customers. That could be in an email, whats app message or by adding a link to your website. You can copy the link from the merchants admin when viewing your plans.

![Copy plan link](/img/docs/copy-link.png)

Once you have this setup you can start receiving payments, and even [use our webhooks](webhooks.md) to integrate further with your own system or website.

For more seamless integrations see our [Embed SDK](embed-sdk.md).

## Payment amount

If you create a Donation type link, you can pass in the payment amount and disable the customer editing it, so you can calculate payment amount in your application before redirecting your customer to Payhere.

```text
https://sandbox.payhere.co/your-co/payment-link-name?amount_in_cents=4200&hide_amount=yes
```

## Supported query params

- `link_title` - The title of your payment link (replaces plan name)
- `link_description` - Description to display (could be a summary of their basket)
- `customer_name` - To pre-fill the customer's name
- `customer_email` - To pre-fill the customer's email address
- `disable_customer_fields` - Set this to 'yes' to disable the customer fields so they can't make changes
- `amount_in_cents` - The amount to charge the customer in cents (make sure your plan is set to donation)
- `hide_amount` - Set this to 'yes' to hide the user editable amount section (useful if you are treating the payment link like a basket and passing your own `amount_in_cents`).

To use your Payhere payment link like a shopping basket, set it up like the example below and make sure to pass whatever `amount_in_cents` you calculate on your site.

```text
https://sandbox.payhere.co/your-co/payment-link-name?link_title=Cart&customer_name=Fred&customer_email=fred@example.org&disable_customer_fields=yes&amount_in_cents=10000&hide_amount=yes
```

### Custom fields

You can pass custom fields to your Payment Links through URL query parameters. If you have a custom field called `User ID` you would pass the query param `custom_field_user_id=42` as follows

```text
https://sandbox.payhere.co/your-co/payment-link-name?custom_field_user_id=42
```
