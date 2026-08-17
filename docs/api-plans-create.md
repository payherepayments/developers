---
id: api-plans-create
title: POST /api/v1/plans
sidebar_label: POST /
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Create a new plan.

## Request

<Tabs>
<TabItem value="curl" label="Curl">

```sh
$ curl -X POST https://api.payhere.co/api/v1/plans \
       -H "Accept: application/json" \
       -H "Authorization: Bearer ${api_key_here}"
       -d '{"name": "New name"}'
```

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
require "http"
require "json"

resp = HTTP.auth("Bearer #{api_key_here}")
           .post("https://api.payhere.co/api/v1/plans", json: { name: "New name" })

parsed = JSON.parse(resp.body)
```

</TabItem>
</Tabs>

### Params

- **payment_type** - One of "recurring" or "one_off"
- **user_selects_amount** - Set to true for donations
- **name** - Display name of the plan
- **description** - Description of the product/service, displayed to end customer
- **price** - Set the price of the plan, leave empty for donations.
- **currency** - 3 letter currency code for the plan i.e. "usd", "gbp", "eur"
- **receipt_text** - Custom message to be added to the email receipt
- **hidden** - Hide this plan from your payments landing page
- **success_url** - URL to redirect customer to after successful payment
- **webhook_url** - URL for Payhere to send webhooks to about the status of payments on this plan
- **pay_button_text** - Defaults to "Pay", you could change it to "Subscribe", "Donate" or anything really.

#### Params only applicable to one-off plans:

- **show_qty** - Show a quantity field on payment form, allowing customers to purchase more than one.

##### Digital downloads

- **digital_download** - Set to `true` to enable digital downloads for this payment link (file or external URL).
- **download_type** - Either `"upload"` (attach a file with the request) or `"url"` (use an external download URL).
- **download_file** - The file to deliver when `download_type` is `"upload"`. Must be sent as `multipart/form-data` (ActiveStorage); not available in a JSON-only body.
- **download_url** - HTTPS URL to the file when `download_type` is `"url"`.

#### Params only applicable to recurring plans:

- **billing_interval** - One of "week", "month" or "year"
- **setup_fee** - Add a one-off setup fee to the first payment
- **min_billing_cycles** - Customer cannot cancel this plan through Payhere until N payments have been made.
- **billing_day** - Day of the month to charge customer
- **cancel_after** - Cancel plan automatically after N payments.

### Digital downloads

For one-off plans you can create a payment link that delivers a digital product either by uploading a file or by pointing to an external URL.

**File upload** — use `multipart/form-data` and field `download_file`:

```sh
curl -X POST https://api.payhere.co/api/v1/plans \
  -H "Accept: application/json" \
  -H "Authorization: Bearer ${api_key_here}" \
  -F "payment_type=one_off" \
  -F "name=My Ebook" \
  -F "price=15" \
  -F "currency=gbp" \
  -F "digital_download=true" \
  -F "download_type=upload" \
  -F "download_file=@/path/to/your-file.pdf"
```

**External URL** — send JSON (or form fields) including `download_url`:

```json
{
  "payment_type": "one_off",
  "name": "External Download",
  "price": 10,
  "currency": "gbp",
  "digital_download": true,
  "download_type": "url",
  "download_url": "https://example.com/file.zip"
}
```

## Response

```json
{
  "data": {
    "id": 64,
    "payment_type": "recurring",
    "name": "New name",
    "description": "",
    "price": 0,
    "price_in_cents": 0,
    "currency": "eur",
    "slug": "new-name",
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
}
```

## Errors

- **401** Unauthorized
- **400** Bad request - validation erros returned
