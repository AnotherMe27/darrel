cd C:\workspace\website\sonia-ganda-website
npm install
npm run build
npx vercel login
npx vercel --prod# DNS Setup for www.soniaganda.com

## 1. Deploy the project

Run these commands in the VS Code terminal:

```powershell
cd C:\workspace\website\sonia-ganda-website
npm install
npm run build
npx vercel login
npx vercel --prod
```

## 2. Add the custom domains

In Vercel, open **Project → Settings → Domains** and add:

- `soniaganda.com`
- `www.soniaganda.com`

## 3. Configure DNS

At your domain registrar, add the records shown by Vercel. Typically:

| Type | Name | Value |
|---|---|---|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

Remove conflicting A, AAAA, or CNAME records.

## 4. HTTPS and redirect

Vercel automatically provisions HTTPS/SSL after DNS verification. Set `www.soniaganda.com` as the preferred domain and redirect the root domain to it.

DNS changes may take up to 48 hours.i