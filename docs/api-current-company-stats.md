---
id: api-current-company-stats
title: GET /api/v1/current_company/stats
sidebar_label: GET /stats
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Fetch payment stats for last 30 days. Comparison fields are 30-60days to give a comparison value from last month.

## Request

<Tabs>
<TabItem value="curl" label="Curl">

```sh
$ curl -X GET https://api.payhere.co/api/v1/current_company/stats \
       -H "Accept: application/json" \
       -H "Authorization: Bearer ${api_key_here}"
```

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
require "http"
require "json"

resp = HTTP.auth("Bearer #{api_key_here}")
           .get("https://api.payhere.co/api/v1/current_company/stats")

parsed = JSON.parse(resp.body)
```

</TabItem>
</Tabs>

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
