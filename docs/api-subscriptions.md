---
id: api-subscriptions
title: GET /api/v1/subscriptions
sidebar_label: GET /
---

List all of your subscriptions, ordered chronologically, most recent payment first.

## Request

<!--DOCUSAURUS_CODE_TABS-->
<!--Curl-->
```sh
$ curl -X GET https://api.payhere.co/api/v1/subscriptions?page=1&per_page=50 \
       -H "Accept: application/json" \
       -H "Authorization: Bearer ${api_key_here}"
```
<!--Ruby-->
```ruby
require "http"
require "json"

resp = HTTP.auth("Bearer #{api_key_here}")
           .get(
              "https://api.payhere.co/api/v1/subscriptions",
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
      "id": 173524457,
      "customer_id": 989899294,
      "last_charged": "2018-01-03T00:00:00.000Z",
      "next_charge_at": "2018-02-03T00:00:00.000Z",
      "status": "active",
      "stripe_subscription_id": "2e72dabd",
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
        "created_at": "2019-03-04T17:06:36.240Z",
        "updated_at": "2019-03-04T17:06:36.240Z",
        "type": "customers"
      }
    }
  ],
  "meta": {
    "current_page": 1,
    "next_page": null,
    "prev_page": null,
    "total_pages": 1,
    "total_count": 1
  }
}
```

## Errors

- **400** Bad request
- **401** Unauthorized



