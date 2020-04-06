---
id: api-plans-update
title: PUT /api/v1/plans/:id
sidebar_label: PUT /:id
---

Update a plan.

## Request

<!--DOCUSAURUS_CODE_TABS-->
<!--Curl-->
```sh
$ curl -X PUT https://api.payhere.co/api/v1/plans/:id \
       -H "Accept: application/json" \
       -H "Authorization: Bearer ${api_key_here}"
       -d '{"name": "New name"}'
```
<!--Ruby-->
```ruby
require "http"
require "json"

resp = HTTP.auth("Bearer #{api_key_here}")
           .put("https://api.payhere.co/api/v1/plans/:id", json: { name: "New name" })

parsed = JSON.parse(resp.body)
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Params

- **name** - Display name of the plan
- **description** - Description of the product/service, displayed to end customer
- **receipt_text** - Custom message to be added to the email receipt
- **hidden** - Hide this plan from your payments landing page
- **success_url** - URL to redirect customer to after successful payment
- **webhook_url** - URL for Payhere to send webhooks to about the status of payments on this plan
- **pay_button_text** - Defaults to "Pay", you could change it to "Subscribe", "Donate" or anything really.

#### Params only applicable to one-off plans:

- **price** - Set the price of the plan
- **currency** - 3 letter currency code for the plan i.e. "usd", "gbp", "eur"
- **show_qty** - Show a quantity field on payment form, allowing customers to purchase more than one.

#### Params only applicable to subscription plans:

- **setup_fee** - Add a one-off setup fee to the first payment
- **min_billing_cycles** - Customer cannot cancel this plan through Payhere until N payments have been made.
- **billing_day** - Day of the month to charge customer
- **cancel_after** - Cancel plan automatically after N payments.


## Response

```json
{
  "data": {
    "id": 64,
    "payment_type": "recurring",
    "name": "New name",
    "description": "",
    "price": 0,
    "price_in_cents": 0,
    "currency": "eur",
    "slug": "new-name",
    "billing_interval": "month",
    "billing_interval_count": 1,
    "hidden": false,
    "min_billing_cycles": null,
    "billing_day": null,
    "limited_qty": false,
    "qty": 0,
    "cancel_after": null,
    "success_url": "",
    "trial_period_days": null,
    "show_qty": false,
    "custom_fields": [],
    "user_selects_amount": true,
    "pay_button_text": "",
    "setup_fee": 0,
    "has_setup_fee": false,
    "created_at": "2020-03-29T09:31:47.428Z",
    "updated_at": "2020-04-01T22:06:04.296Z",
    "type": "plans",
    "receipt_text": "",
    "webhook_url": ""
  }
}
```

## Errors

- **401** Unauthorized
- **400** Bad request - validation erros returned
