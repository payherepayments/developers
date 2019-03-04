---
id: api-customers
title: GET /api/v1/customers
sidebar_label: /v1/customers
---

List all of your customers, ordered chronologically, most recent first.

## Request

<!--DOCUSAURUS_CODE_TABS-->
<!--Curl-->
```sh
$ curl -X GET https://api.payhere.co/api/v1/customers?page=1&per_page=50 \
       -H "Accept: application/json" \
       -H "Authorization: Bearer ${api_key_here}"
```
<!--Ruby-->
```ruby
require "http"
require "json"

resp = HTTP.auth("Bearer #{api_key_here}")
           .get(
              "https://api.payhere.co/api/v1/customers",
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
      "id": 989899294,
      "name": "Geoff Williams",
      "email": "g.williams01@example.org",
      "ip_address": null,
      "location": {},
      "created_at": "2019-03-04T16:28:32.656Z",
      "updated_at": "2019-03-04T16:28:32.656Z",
      "type": "customers"
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



