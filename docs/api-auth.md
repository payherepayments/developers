---
id: api-auth
title: API Authentication
sidebar_label: Authentication
---

Our API is secured by API keys, please make sure you **don’t share these keys** with anyone! They should only be used in a secure server side environment, our API isn't supported for use in the browser, [see our Embed SDK](embed-sdk.md) instead.

**You can [find your API](https://app.payhere.co/merchants/integrations) key in the integrations section of the merchants admin.**

---

### Authorization Header (recommended)

We recommend passing your API key in the Authorization header, like so:

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


### access_token parameter

If you are wanting to test GET endpoints quickly you can pass your API key as a parameter labelled `access_token`

```sh
GET https://api.payhere.co/api/v1/user?access_token=${api_key_here}
```
