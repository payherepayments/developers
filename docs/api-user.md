---
id: api-user
title: /api/v1/user
sidebar_label: /v1/user
---

## Request

<!--DOCUSAURUS_CODE_TABS-->
<!--Curl-->
```sh
$ curl -X GET https://api.payhere.co/api/v1/user -H "Authorization: Bearer ${api_key_here}"
```
<!--Ruby-->
```ruby
require "http"
require "json"

raw_json = HTTP.auth("Bearer #{api_key_here}")
               .get("https://api.payhere.co/api/v1/user")
               .body.to_s

json = JSON.parse(raw_json)
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Response

```json
{
  "data": {
    "id": 2,
    "display_name": "John Smith",
    "email": "john.smith@example.org",
    "created_at": "2015-11-08T14:12:27.962Z",
    "updated_at": "2019-03-04T13:57:32.114Z",
    "type": "users"
  }
}
```

## Errors

