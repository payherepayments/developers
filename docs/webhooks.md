---
id: webhooks
title: Webhooks
---

Webhooks allow us to securely communicate with your backend platform and offer the best means of advanced integration between PayHere and your service. You can [read about how we use webhooks](https://medium.com/payhere/how-payhere-powers-benmudge-com-4b7827dc2ae) to securely integrate with benmudge.com.

## Verifying webhooks are legitimate

First things first, we sign all of our webhooks with a shared secret, you can find yours in the [merchants admin](https://payhere.co/merchants/integrations).

Our example below is in Ruby, the first step to receiving webhooks is to verify that they came from PayHere, you can do that by generating an HMAC digest of the entire request body and signing it with the shared secret you got above. If these don't match up we can return an HTTP unauthorized code.

```ruby
module Events
  class PayhereWebhooksController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      return head 401 unless valid_signature?

      # do something with the webhook...

      head :no_content
    end

    private

    def valid_signature?
      digest = OpenSSL::Digest.new("sha1")
      expected = OpenSSL::HMAC.hexdigest(digest, ENV["PAYHERE_SHARED_SECRET"].to_s, request.raw_post)

      Rack::Utils.secure_compare(expected, request.headers["HTTP_X_SIGNATURE"])
    end
  end
end
```

## Handling event types

PayHere will send webhooks with an `event` key in the body, you can use this to determine the nature of the webhook and wether you need to act on it or not.

```rb
def create
  return head 401 unless valid_signature?

  case params[:event]
  when "payment.success"
    user = find_or_create_user
    payment = find_or_create_payment_for(user)
    SlackNotifierJob.perform_async("#{user.name} (#{user.email}) just paid #{payment.amount}")
  when "payment.failed"
    user = find_or_create_user
    SlackNotifierJob.perform_async("#{user.name} (#{user.email}) payment of #{payment.amount} failed!")
  else
    # no-op
  end

  head :no_content
end
```

### payment.success

Triggers upon successful payment, either first time or when recurring payment is successful.

#### Example response body

```json
{
  "event": "payment.success",
  "payment": {
    "id": 2680839,
    "type": "payments",
    "amount": 24.99,
    "hashid": "7ESVZLr",
    "status": "success",
    "reference": "SUB816",
    "card_brand": "visa",
    "card_last4": null,
    "company_id": 636211471,
    "created_at": "2018-01-03T00:00:00.000Z",
    "updated_at": "2018-01-03T00:00:00.000Z",
    "secure_token": "BhuI1f5fuNBEbLFIB8mHUg"
  },
  "customer": {
    "id": 989899294,
    "name": "Geoff Williams",
    "type": "customers",
    "email": "g.williams01@example.org",
    "location": {},
    "created_at": "2019-03-02T11:51:28.640Z",
    "ip_address": null,
    "updated_at": "2019-03-02T11:51:28.640Z"
  },
  "membership_plan": {
    "id": 372786875,
    "qty": 0,
    "name": "Void Pro Subscription",
    "slug": "void-pro-subscription",
    "type": "membership_plans",
    "price": 24.99,
    "hidden": false,
    "currency": "gbp",
    "created_at": "2019-03-02T11:51:28.700Z",
    "updated_at": "2019-03-02T11:51:28.852Z",
    "description": "Annual subscription to Void pro",
    "limited_qty": false,
    "price_in_cents": 2499,
    "billing_interval": "year",
    "min_billing_cycles": 1,
    "billing_interval_count": 1
  }
}
```

### payment.failed

Triggers upon failed payment, either first time or when recurring payment fails.

#### Example response body

```json
{
  "event": "payment.failed",
  "payment": {
    "id": 2680839,
    "type": "payments",
    "amount": 24.99,
    "hashid": "7ESVZLr",
    "status": "failed",
    "reference": "SUB816",
    "card_brand": "visa",
    "card_last4": null,
    "company_id": 636211471,
    "created_at": "2018-01-03T00:00:00.000Z",
    "updated_at": "2018-01-03T00:00:00.000Z",
    "secure_token": "BhuI1f5fuNBEbLFIB8mHUg"
  },
  "customer": {
    "id": 989899294,
    "name": "Geoff Williams",
    "type": "customers",
    "email": "g.williams01@example.org",
    "location": {},
    "created_at": "2019-03-02T11:51:28.640Z",
    "ip_address": null,
    "updated_at": "2019-03-02T11:51:28.640Z"
  },
  "membership_plan": {
    "id": 372786875,
    "qty": 0,
    "name": "Void Pro Subscription",
    "slug": "void-pro-subscription",
    "type": "membership_plans",
    "price": 24.99,
    "hidden": false,
    "currency": "gbp",
    "created_at": "2019-03-02T11:51:28.700Z",
    "updated_at": "2019-03-02T11:51:28.852Z",
    "description": "Annual subscription to Void pro",
    "limited_qty": false,
    "price_in_cents": 2499,
    "billing_interval": "year",
    "min_billing_cycles": 1,
    "billing_interval_count": 1
  }
}
```

### Coming soon

- subscription.created
- subscription.cancelled

Let us know if you need any additional event types and we'll strongly consider adding them.
