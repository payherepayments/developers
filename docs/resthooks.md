---
id: resthooks
title: REST Hooks
---

If you are integrating Payhere to your own website, [Webhooks](/docs/webhooks) are probably what you are after.

REST Hooks give a bit more control to platforms such as Zapier to subscribe and unsubscribe different *listeners* to webhook endpoints.

If you are building a platform integration [please reach out to us](mailto:support@payhere.co) and we’ll help with the integration were we can.

## Subscribing to a REST hook

In order to start receiving REST hooks, you first need to subscribe to a resource or event for a given Company. Follow our [API authentication guide](/docs/api-auth) to provide an API token.

<!--DOCUSAURUS_CODE_TABS-->
<!--Curl-->
```sh
$ curl -X POST https://api.payhere.co/api/v1/hooks \
       -H "Accept: application/json" \
       -H "Authorization: Bearer ${api_key_here}"
       -d '{"resource": "payment_received", "post_url": "https://mycool.app/resthooks", "integration": "mycool.app"}'
```
<!--Ruby-->
```ruby
require "http"
require "json"

resp = HTTP.auth("Bearer #{api_key_here}")
           .post("https://api.payhere.co/api/v1/hooks", json: { resource: "payment_received", post_url: "https://mycool.app/resthooks", integration: "mycool.app" })

parsed = JSON.parse(resp.body)
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Params

- **resource** - The event to listen for, one of: `payment_received`, `subscription_cancelled`, `subscription_created`
- **post_url** - Endpoint on your platform to receive POST requests when REST hooks send
- **integration** - Friendly name of your platform, helps us with metrics and debugging.

### Response

```json
{
  "data": {
    "id": 64,
    "company_id": 472,
    "resource": "payment_received",
    "post_url": "https://mycool.app/resthooks",
    "integration": "mycool.app",
    "created_at": "2020-03-29T09:31:47.428Z",
    "updated_at": "2020-04-01T22:06:04.296Z",
    "type": "rest_hooks",
  }
}
```

### Errors

- **401** Unauthorized
- **400** Bad request - validation erros returned

## List all active REST hooks

<!--DOCUSAURUS_CODE_TABS-->
<!--Curl-->
```sh
$ curl -X GET https://api.payhere.co/api/v1/hooks \
       -H "Accept: application/json" \
       -H "Authorization: Bearer ${api_key_here}"
```
<!--Ruby-->
```ruby
require "http"
require "json"

resp = HTTP.auth("Bearer #{api_key_here}")
           .get("https://api.payhere.co/api/v1/hooks")

parsed = JSON.parse(resp.body)
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Response

```json
{
  "data": [
    {
      "id": 64,
      "company_id": 472,
      "resource": "payment_received",
      "post_url": "https://mycool.app/resthooks",
      "integration": "mycool.app",
      "created_at": "2020-03-29T09:31:47.428Z",
      "updated_at": "2020-04-01T22:06:04.296Z",
      "type": "rest_hooks",
    }
  ]
}
```

### Errors

- **401** Unauthorized

## Removing a REST hook listener

When you are done receiving events you can cleanup the listener by unsubscribing.

<!--DOCUSAURUS_CODE_TABS-->
<!--Curl-->
```sh
$ curl -X DELETE https://api.payhere.co/api/v1/hooks/:id \
       -H "Accept: application/json" \
       -H "Authorization: Bearer ${api_key_here}"
```
<!--Ruby-->
```ruby
require "http"
require "json"

resp = HTTP.auth("Bearer #{api_key_here}")
           .delete("https://api.payhere.co/api/v1/hooks/:id")

if resp.status == 204
  # successfully unsubscribed
end
```
<!--END_DOCUSAURUS_CODE_TABS-->

### URL Params

- **id** - The ID of the REST hook to delete.

### Response

- **204** No content - successfully unsubscribed

### Errors

- **401** Unauthorized
- **404** Not found - the rest hook was not found

## Response format

REST Hooks follow the following format when we send POST requests to your subscribed endpoints.

For more info on the data, use a service such as [HTTPdump](https://httpdump.app) to test it out.

```js
{
  id: 12,  // ID of the resource, usually an Integer
  trigger: "payment_received", // resource_name
  data: {
    "a json object": "that represents the resource"
  }
}
```
