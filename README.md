<<<<<<< HEAD
# darrel
for personal use
=======
# Sonia Ganda Website

Welcome to the Sonia Ganda personal brand website project! This repository contains the source code for a modern, elegant, and fully responsive personal brand website designed to showcase Sonia Ganda's personality, work, achievements, interests, and projects.

## Project Structure

The project is organized as follows:

```
sonia-ganda-website
├── app
│   ├── about
│   ├── achievements
│   ├── contact
│   ├── gallery
│   ├── projects
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   └── globals.css
├── components
│   ├── layout
│   ├── sections
│   └── ui
├── data
│   ├── achievements.ts
│   ├── gallery.ts
│   ├── profile.ts
│   └── projects.ts
├── lib
│   ├── metadata.ts
│   └── validations.ts
├── public
│   └── favicon.svg
├── types
│   └── index.ts
├── .env.example
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
├── DNS-SETUP.md
└── README.md
```

## Features

- **Modern Minimalist Design**: A sophisticated and elegant interface that is visually attractive.
- **Responsive Layout**: Fully responsive design that works seamlessly on phones, tablets, and computers.
- **Smooth Animations**: Engaging animations and transitions for a better user experience.
- **SEO Optimized**: Built with SEO best practices to ensure visibility on search engines.
- **Interactive Elements**: Includes features like smooth page transitions, image lightbox, and a contact form.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/sonia-ganda-website.git
   cd sonia-ganda-website
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open Your Browser**:
   Navigate to `http://localhost:3000` to view the website.

## Deployment

The site deploys to GitHub Pages through `.github/workflows/deploy-pages.yml` whenever changes are pushed to `main`.

1. Push this repository to GitHub.
2. In **Settings > Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` or run the **Deploy to GitHub Pages** workflow manually.

The workflow builds the static site into `out/` and configures the repository path automatically. For a custom domain, update the site URL in `app/robots.ts` and `app/sitemap.ts`, then add the domain in GitHub Pages settings.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Thank you for checking out the Sonia Ganda personal brand website project!
>>>>>>> 642d7b45 (Deploy Sonia Ganda website)
