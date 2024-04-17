---
id: wix-embed-sdk
title: Wix Embed SDK
sidebar_label: Wix Embed SDK
---

## Installation

First, set up your payment links in Wix to like to Payhere, you can see how to do that using [the following guide](https://payhere.co/integrations/wix/).

Once you have your buttons connected, you’ll want to add a `Custom Code` marketing element.

![Add wix custom code element](/img/docs/add-element.png)

1. First you’ll want to select the 'Add element' button on the right hand menu in the Wix editor
2. Then choose 'Embed code', and 'Marketing tools', and finally click the 'Custom Code' element.
3. Next you’ll see a screen showing some areas of the page you can add custom code to. Inside the 'Head` section, click the 'Add code' button

![Add wix custom code](/img/docs/add-code.png)

1. Paste the code snippet below into the first box.
2. Give your embed code a name, this can be anything you want, but I’ve used 'Payhere auto embed' in this example.
3. Click 'Apply'
4. Publish the changes to your website

Now any Payhere links that you setup using the previous guide will open embedded within your website 🎉

```html
<script src="https://app.payhere.co/embed/embed.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("a").forEach(function (link) {
      const text = link.innerText.trim()
      if (link.href.startsWith("https://sandbox.payhere.co") || link.href.startsWith("https://app.payhere.co")) {
        console.log("link", link.href)
        link.addEventListener("click", function(event) {
          event.preventDefault()

          PayHere.launch({
            embedURL: link.href
          })
        })
      }
    })
  });
</script>
```

![Wix subscription payment example](/img/docs/wix-embed.gif)
