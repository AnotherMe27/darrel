## DNS Setup for www.soniaganda.com

## 1. Configure DNS

GitHub Pages is already configured for `www.soniaganda.com`. At the domain registrar, remove conflicting A, AAAA, or CNAME records and add:

| Type | Name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `AnotherMe27.github.io` |

The repository includes `public/CNAME`, so future GitHub Pages deployments preserve the custom domain.

## 2. Verify the domain

After DNS propagates, check:

```powershell
nslookup www.soniaganda.com
nslookup soniaganda.com
```

In the repository, open **Settings → Pages** and wait for **DNS Check** to complete. GitHub will then enable HTTPS. Configure the registrar to redirect the apex domain `soniaganda.com` to `www.soniaganda.com` if your DNS provider offers URL forwarding.

DNS changes may take up to 48 hours.