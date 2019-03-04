---
id: api-payments
title: GET /api/v1/payments
sidebar_label: GET /
---

List all of your payments, ordered chronologically, most recent first.

## Request

<!--DOCUSAURUS_CODE_TABS-->
<!--Curl-->
```sh
$ curl -X GET https://api.payhere.co/api/v1/payments?page=1&per_page=50 \
       -H "Accept: application/json" \
       -H "Authorization: Bearer ${api_key_here}"
```
<!--Ruby-->
```ruby
require "http"
require "json"

resp = HTTP.auth("Bearer #{api_key_here}")
           .get(
              "https://api.payhere.co/api/v1/payments",
              page: 1,
              per_page: 50
            )

parsed = JSON.parse(resp.body)
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Params

- **page** - Page number
- **per_page** - Records per page, default 20, max 100.

## Response

```json
{
  "data": [
    {
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
  ],
  "meta": {
    "current_page": 1,
    "next_page": 2,
    "prev_page": null,
    "total_pages": 2,
    "total_count": 2
  }
}
```

## Errors

- **400** Bad request
- **401** Unauthorized
