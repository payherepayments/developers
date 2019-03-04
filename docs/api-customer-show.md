---
id: api-customer-show
title: GET /api/v1/customers/:id
sidebar_label: GET /:id
---

Fetch a customer by ID, this will also pull down their subscriptions and payment history.

## Request

<!--DOCUSAURUS_CODE_TABS-->
<!--Curl-->
```sh
$ curl -X GET https://api.payhere.co/api/v1/customers/:id \
       -H "Accept: application/json" \
       -H "Authorization: Bearer ${api_key_here}"
```
<!--Ruby-->
```ruby
require "http"
require "json"

resp = HTTP.auth("Bearer #{api_key_here}")
           .get("https://api.payhere.co/api/v1/customers/:id")

parsed = JSON.parse(resp.body)
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Params

- **id** - Customer ID to lookup

## Response

```json
{
  "data": {
    "id": 989899294,
    "name": "Geoff Williams",
    "email": "g.williams01@example.org",
    "ip_address": null,
    "location": {},
    "created_at": "2019-03-04T16:29:57.026Z",
    "updated_at": "2019-03-04T16:29:57.026Z",
    "type": "customers",
    "subscriptions": [
      {
        "id": 173524457,
        "customer_id": 989899294,
        "company_id": 636211471,
        "last_charged": "2018-01-03T00:00:00.000Z",
        "next_charge_at": "2018-02-03T00:00:00.000Z",
        "stripe_subscription_id": "b3ed033a",
        "stripe_plan_id": "void_pro_sub_1",
        "billing_interval": "month",
        "created_at": "2018-01-03T00:00:00.000Z",
        "updated_at": "2018-01-03T00:00:00.000Z",
        "status": "active",
        "membership_plan_id": 372786875,
        "provider": "stripe",
        "metadata": {},
        "billing_interval_count": 1,
        "min_billing_cycles": null
      }
    ],
    "payments": [
      {
        "id": 845088515,
        "hashid": "VRSgg9kvB",
        "reference": "GW8264",
        "amount": 12.99,
        "company_id": 636211471,
        "card_brand": "visa",
        "card_last4": null,
        "secure_token": "RksE-jbWnU7oSQjWZ-CFIQ",
        "status": "part_refund",
        "created_at": "2017-06-03T00:00:00.000Z",
        "updated_at": "2017-06-03T00:00:00.000Z",
        "type": "payments"
      },
      {
        "id": 2680839,
        "hashid": "7ESVZLr",
        "reference": "SUB816",
        "amount": 24.99,
        "company_id": 636211471,
        "card_brand": "visa",
        "card_last4": null,
        "secure_token": "9d0rEeM7T3xI8PZf6VjnNg",
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
