---
id: api-payment-show
title: GET /api/v1/payments/:id
sidebar_label: GET /:id
---

Fetch a payment by ID

## Request

<!--DOCUSAURUS_CODE_TABS-->
<!--Curl-->
```sh
$ curl -X GET https://api.payhere.co/api/v1/payments/:id \
       -H "Accept: application/json" \
       -H "Authorization: Bearer ${api_key_here}"
```
<!--Ruby-->
```ruby
require "http"
require "json"

resp = HTTP.auth("Bearer #{api_key_here}")
           .get("https://api.payhere.co/api/v1/payments/:id")

parsed = JSON.parse(resp.body)
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Params

- **id** - Payment ID to lookup

## Response

```json
{
  "data": {
    "id": 13,
    "hashid": "oPPSd",
    "reference": null,
    "formatted_amount": "£12.99",
    "amount": 12.99,
    "currency": "gbp",
    "refund_amount": 0,
    "amount_paid": 12.99,
    "company_id": 1,
    "card_brand": "Visa",
    "card_last4": "4242",
    "secure_token": "8UCnIBSy8hsPO9mr2mI9IA",
    "status": "success",
    "success": true,
    "object_name": "Office space",
    "created_at": "2019-02-23T16:51:38.189Z",
    "updated_at": "2019-02-23T16:51:45.323Z",
    "type": "payments",
    "customer": {
      "id": 10,
      "name": "Colours",
      "email": "colours@colours.com",
      "ip_address": "127.0.0.1",
      "location": {},
      "created_at": "2019-02-23T16:51:38.135Z",
      "updated_at": "2019-02-23T16:51:39.336Z",
      "type": "customers"
    },
    "subscription": {
      "id": 4,
      "customer_id": 10,
      "last_charged": null,
      "next_charge_at": null,
      "status": "active",
      "stripe_subscription_id": "sub_EaEBPP4DcwFD3X",
      "stripe_plan_id": "office-space-membership-2",
      "billing_interval": "month",
      "membership_plan_id": 2,
      "provider": "stripe",
      "metadata": {
        "card_brand": "Visa",
        "card_last4": "4242"
      },
      "billing_interval_count": 1,
      "min_billing_cycles": null,
      "created_at": "2019-02-23T16:51:45.301Z",
      "updated_at": "2019-02-23T16:51:45.301Z",
      "type": "subscriptions"
    },
    "item": {
      "id": 2,
      "name": "Office space",
      "description": "Shared office space at Alt Labs HQ",
      "price": 100,
      "price_in_cents": 10000,
      "currency": "gbp",
      "slug": "office-space",
      "billing_interval": "month",
      "billing_interval_count": 1,
      "hidden": true,
      "min_billing_cycles": null,
      "limited_qty": false,
      "qty": 0,
      "created_at": "2018-09-25T16:11:00.990Z",
      "updated_at": "2018-09-25T16:11:03.392Z",
      "type": "membership_plans"
    }
  }
}
```

## Errors

- **404** Not found
- **401** Unauthorized



