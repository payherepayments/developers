---
id: api-subscription-destroy
title: DELETE /api/v1/subscriptions/:id
sidebar_label: DELETE /:id
---

Cancel a subscription immediately so there are no further payments, subscription will remain active until period end.

## Request

<!--DOCUSAURUS_CODE_TABS-->
<!--Curl-->
```sh
$ curl -X DELETE https://api.payhere.co/api/v1/subscriptions/:id \
       -H "Accept: application/json" \
       -H "Authorization: Bearer ${api_key_here}"
```
<!--Ruby-->
```ruby
require "http"
require "json"

resp = HTTP.auth("Bearer #{api_key_here}")
           .delete("https://api.payhere.co/api/v1/subscriptions/:id")

success = resp.status == 204
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Params

- **id** - Subscription to cancel

## Response

```json
204 No content
```

## Errors

- **404** Not found
- **401** Unauthorized
