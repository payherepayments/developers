---
id: api-current-company-stats
title: GET /api/v1/current_company/stats
sidebar_label: GET /stats
---

Fetch payment stats for last 30 days. Comparison fields are 30-60days to give a comparison value from last month.

## Request

<!--DOCUSAURUS_CODE_TABS-->
<!--Curl-->
```sh
$ curl -X GET https://api.payhere.co/api/v1/current_company/stats \
       -H "Accept: application/json" \
       -H "Authorization: Bearer ${api_key_here}"
```
<!--Ruby-->
```ruby
require "http"
require "json"

resp = HTTP.auth("Bearer #{api_key_here}")
           .get("https://api.payhere.co/api/v1/current_company/stats")

parsed = JSON.parse(resp.body)
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Params

N/A

## Response

```json
{
  "currency": "gbp",
  "payments_last_30": 329.40,
  "payments_comparison": 278.42,
  "subscribers_last_30": 7,
  "subscribers_comparison": 5,
  "payments_all_time": 6239.76
}
```

## Errors

- **401** Unauthorized
