---
title: Embed SDK improvements
author: Pete Hawkins
authorURL: https://twitter.com/peteyhawkins
---

We've been working hard on a few major new features the past few weeks, some of the most notable are custom fields, donations (pay what you want) and GoCardless integration.

### Custom fields

With the launch of custom fields we have improved our Embed SDK, allow you to pass along custom field values. You can also mark custom fields as hidden from the payment form. This allows you to pass custom metadata along with a payment that your end customer doesn't have to see. It could be as simple as an order ID, so that when webhooks come in you can easily connect up a payment and order in your system.

### Donations

One-off and recurring donations open up the usefulness of payhere, not only for charitable or pay-what-you-want products, but also allow you to figure out the customers price on your website and simply pass that into the payhere plan.

When creating your plan just remember to check the 'Customer sets price (donation)' box.

This opens the doors to custom shopping carts pluging into a payhere checkout etc.

---

We'll be working on some open source examples of how we think you can use payhere, no doubt you will all come up with your own creative solutions, if you have any questions or ideas please [email us](mailto:hello@payhere.co)!

You can find further documentation on both of these in our [Advanced Embed SDK docs](/docs/embed-sdk#advanced-javascript-embed)

Thanks,
Pete and the Payhere team
