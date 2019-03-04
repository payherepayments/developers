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
    "id": 845088515,
    "hashid": "VRSgg9kvB",
    "reference": "GW8264",
    "amount": 12.99,
    "company_id": 636211471,
    "card_brand": "visa",
    "card_last4": null,
    "secure_token": "Vt-ixl7oXL2OgVQagjUkdg",
    "status": "part_refund",
    "created_at": "2017-06-03T00:00:00.000Z",
    "updated_at": "2017-06-03T00:00:00.000Z",
    "type": "payments"
  }
}
```

## Errors

- **404** Not found
- **401** Unauthorized



