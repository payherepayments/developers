---
id: api-refunds
title: POST /api/v1/refunds
sidebar_label: POST /
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

This will refund a customer the amount specified, can be a partial refund.

## Request

<Tabs>
<TabItem value="curl" label="Curl">

```sh
$ curl -X POST https://api.payhere.co/api/v1/refunds \
       -H "Accept: application/json" \
       -H "Content-Type: application/json" \
       -H "Authorization: Bearer ${api_key_here}" \
       -d '{"payment_id": 373, "amount": 0.5, "reason": "requested_by_customer"}'
```

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
require "http"
require "json"

resp = HTTP.auth("Bearer #{api_key_here}")
           .post(
              "https://api.payhere.co/api/v1/refunds",
              payment_id: 373,
              amount: 0.5,
              reason: "requested_by_customer"
            )

success = resp.status == 204
```

</TabItem>
</Tabs>

### Params

- **payment_id** - ID of the payment to refund
- **amount** - amount to refund the customer, uses the currency of their payment, if USD, amount should be in dollars and can use decimal point i.e. 1.5 is $1.50 USD
- **reason** - Reason for the refund, one of: `requested_by_customer`, `duplicate` or `fraudulent`

## Response

```json
204 No content
```

## Errors

- **400** Bad request - if validation fails
- **401** Unauthorized
