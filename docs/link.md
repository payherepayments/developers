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

## Custom fields

You can pass custom fields to your Payment Links through URL query parameters. If you have a custom field called `User ID` you would pass the query param `custom_field_user_id=42` as follows

```text
https://sandbox.payhere.co/your-co/payment-link-name?custom_field_user_id=42
```
