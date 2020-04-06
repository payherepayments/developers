---
id: api-plans
title: GET /api/v1/plans
sidebar_label: GET /
---

List all of your plans.

## Request

<!--DOCUSAURUS_CODE_TABS-->
<!--Curl-->
```sh
$ curl -X GET https://api.payhere.co/api/v1/plans?page=1&per_page=50 \
       -H "Accept: application/json" \
       -H "Authorization: Bearer ${api_key_here}"
```
<!--Ruby-->
```ruby
require "http"
require "json"

resp = HTTP.auth("Bearer #{api_key_here}")
           .get(
              "https://api.payhere.co/api/v1/plans",
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
      "id": 64,
      "payment_type": "recurring",
      "name": "Help us fight COVID-19",
      "description": "",
      "price": 0,
      "price_in_cents": 0,
      "currency": "eur",
      "slug": "help-us-fight-covid-19",
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
