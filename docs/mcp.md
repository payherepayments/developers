---
id: mcp
title: Model Context Protocol (MCP)
sidebar_label: MCP
---

Connect an MCP-compatible app to Payhere to explore your payments and customers, or make changes if you grant write access. The connection is limited to the company you choose when signing in.

## Connect your app

1. In your MCP client, add a **remote MCP server** using the URL for the environment you want:

   **Live**

   ```text
   https://api.payhere.co/mcp
   ```

   **[Sandbox](testing.md)**

   ```text
   https://sandbox.payhere.co/mcp
   ```

2. Follow the sign-in prompt, choose the Payhere company to connect, and approve the requested access.
3. Ask your client to list your recent payments or use `whoami` to confirm which company is connected.

Your MCP client handles OAuth sign-in automatically. You don't need to create an API key or paste one into the client. Use a client that supports remote MCP servers and OAuth; the server uses Streamable HTTP.

## What can it do?

- **Read:** Browse payments, payment links, customers, subscriptions, coupons, and invoices; view your storefront and company settings.
- **Write:** Create payment links, coupons, and draft invoices, or update your storefront and company settings. Creating a draft invoice does **not** send it to the customer.

Read access (`mcp:read`) is required. The connection normally requests write access (`mcp:write`) too; if your client lets you choose scopes, request only `mcp:read` for a read-only connection. Connect only apps you trust with your company data and grant write access only when you need it.

To use a different company, reconnect and select it during sign-in. Switching the active company in the Payhere app won't change an existing MCP connection.
