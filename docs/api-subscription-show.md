---
id: api-subscription-show
title: GET /api/v1/subscriptions/:id
sidebar_label: GET /:id
---

Fetch a subscription by ID, this will also pull down the customer and payments.

## Request

<!--DOCUSAURUS_CODE_TABS-->
<!--Curl-->
```sh
$ curl -X GET https://api.payhere.co/api/v1/subscriptions/:id \
       -H "Accept: application/json" \
       -H "Authorization: Bearer ${api_key_here}"
```
<!--Ruby-->
```ruby
require "http"
require "json"

resp = HTTP.auth("Bearer #{api_key_here}")
           .get("https://api.payhere.co/api/v1/subscriptions/:id")

parsed = JSON.parse(resp.body)
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Params

- **id** - Subscription ID to lookup

## Response

```json
{
  "data": {
    "id": 173524457,
    "customer_id": 989899294,
    "last_charged": "2018-01-03T00:00:00.000Z",
    "next_charge_at": "2018-02-03T00:00:00.000Z",
    "status": "active",
    "stripe_subscription_id": "d44ea881",
    "stripe_plan_id": "void_pro_sub_1",
    "billing_interval": "month",
    "membership_plan_id": 372786875,
    "provider": "stripe",
    "metadata": {},
    "billing_interval_count": 1,
    "min_billing_cycles": null,
    "created_at": "2018-01-03T00:00:00.000Z",
    "updated_at": "2018-01-03T00:00:00.000Z",
    "type": "subscriptions",
    "customer": {
      "id": 989899294,
      "name": "Geoff Williams",
      "email": "g.williams01@example.org",
      "ip_address": null,
      "location": {},
      "created_at": "2019-03-04T17:08:19.453Z",
      "updated_at": "2019-03-04T17:08:19.453Z",
      "type": "customers"
    },
    "payments": [
      {
        "id": 2680839,
        "hashid": "7ESVZLr",
        "reference": "SUB816",
        "amount": 24.99,
        "company_id": 636211471,
        "card_brand": "visa",
        "card_last4": null,
        "secure_token": "-zLiIKE-7MEqgeWJgDJpww",
        "status": "success",
        "created_at": "2018-01-03T00:00:00.000Z",
        "updated_at": "2018-01-03T00:00:00.000Z",
        "type": "payments"
      }
    ]
  }
}
```

## Errors

- **404** Not found
- **401** Unauthorized
