---
id: api-current-company-show
title: GET /api/v1/current_company
sidebar_label: GET /
---

Fetch the company information for currently authenticated user

## Request

<!--DOCUSAURUS_CODE_TABS-->
<!--Curl-->
```sh
$ curl -X GET https://api.payhere.co/api/v1/current_company \
       -H "Accept: application/json" \
       -H "Authorization: Bearer ${api_key_here}"
```
<!--Ruby-->
```ruby
require "http"
require "json"

resp = HTTP.auth("Bearer #{api_key_here}")
           .get("https://api.payhere.co/api/v1/current_company")

parsed = JSON.parse(resp.body)
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Params

N/A

## Response

```json
{
  "data": {
    "id": 1,
    "name": "Alt Labs",
    "legal_name": "Alternate Labs Ltd",
    "slug": "altlabs",
    "ready": true,
    "country_code": "GB",
    "button_color": "#db0031",
    "button_text": "white",
    "role": "testing",
    "stripe_connected": true,
    "gocardless_connected": true,
    "currency": "gbp",
    "vat_registered": true,
    "vat_rate": "20.0",
    "small_logo_url": "/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--97d9b8735289a37e5608957b945238bc2f3ce635/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lKTVRJd1BnWTZCa1ZVIiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--17d9ac51d4981847d662a03a1dd07633eb2dcaa3/logo1000.png",
    "created_at": "2018-06-07T21:54:53.617Z",
    "updated_at": "2020-04-05T18:39:28.637Z",
    "type": "companies",
    "plan": "pro",
    "subscription_status": "trial",
    "active_until": "2020-04-08T18:28:12.798Z",
    "testing_access": true,
    "support_email": "hello@alternatelabs.co",
    "website": "https://alternatelabs.co",
    "address": "Unit 131 Moat House,\r\n54 Bloomfield Avenue,\r\nBelfast, BT5 5AD",
    "vat_registration_number": "301026671",
    "vat_mechanism": "always",
    "custom_domain": null,
    "users": [
      {
        "id": 1,
        "display_name": "Pete Hawkins",
        "email": "pete@alternatelabs.co",
        "role": "user",
        "created_at": "2018-06-07T21:54:53.778Z",
        "updated_at": "2020-04-06T10:37:28.065Z",
        "type": "users"
      }
    ]
  }
}
```

## Errors

- **401** Unauthorized
