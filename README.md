# next-cms-ghost

[![PRs welcome!](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()

A Next.js app for creating blogs from headless content managment systems (CMS).

## Features

- [x] Ghost CMS integration
- [x] Ghost Casper look & feel
- [x] SEO optimized
- [x] Andvanced Routing
- [x] Featured posts pinned on top
- [x] Sticky navigation headers
- [x] Hover on author avatar
- [x] Fully responsive
- [x] Made type safe with TypeScript
- [x] Next.js feature images
- [x] Sitemap
- [x] Styled 404 page
- [x] Dark Mode
- [x] RSS feed
- [x] Member Subscriptions

## ToDo

- [ ] Commento
- [ ] PrismJS
- [ ] Next.js inline images
- [ ] Table Of Contents
- [ ] Contact Page
- [ ] Pagination
- [ ] Preview Section in Posts
- [ ] Infinite Scroll
- [ ] Preview
- [ ] Incremental Regeneration

## Performance

![Lighthouse Score](https://static.gotsby.org/v1/assets/images/next-lh6-score-desktop.png)

<sup>Scores calculated with Lighthouse 6.4.0.</sup>

## Getting Started

```bash
git clone https://github.com/styxlab/next-cms-ghost.git
cd next-cms-ghost
yarn

# Development
yarn dev

# Production
yarn build
```

## Configuration

Please change the `siteUrl` to your build system in `siteConfig.ts`:

```javascript
export const siteUrl = `http://localhost:3000`
//export const siteUrl = `https://your.blog.org
```

## Next.js image optimizations

You must add all domains that you use for insourcing images in the `next.config.js` file, for example:

```javascript
module.exports = {
  images: {
    domains: ['images.unsplash.com', 'static.gotsby.org'],
  },
}
```

## Ghost Content API keys

All content is sourced from a Ghost CMS. Choose the method according to your build scenario.

### Building locally

Create a new text file `.env.local` in the project root folder:

```
CMS_GHOST_API_URL=http://localhost:2368
CMS_GHOST_API_KEY=9fccdb0e4ea5b572e2e5b92942
```

### Building with cloud providers

If you build your project with a cloud provider, the best option is to provide the keys with environment variables:

| Key               | Value (example)            |
| ----------------- | -------------------------- |
| CMS_GHOST_API_URL | http:\/\/localhost:2368    |
| CMS_GHOST_API_KEY | 9fccdb0e4ea5b572e2e5b92942 |

## Ensure headless mode of Ghost CMS

For best SEO results it is strongly recommended to disable the default Ghost Handlebars theme front-end by selecting the _Make this site private_ flag within your Ghost admin settings.

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/styxlab/next-cms-ghost)

## Contributions

PRs are welcome! Consider contributing to this project if you want to make a better web.

## Reporting issues

Please report all bugs and issues at [next-cms-ghost/issues](https://github.com/styxlab/next-cms-ghost/issues).

## Disclaimer

This project is not affiliated with [NextJS](https://nextjs.org/) or [Ghost](https://ghost.org/).

# Copyright & License

Copyright (c) 2020 styxlab - Released under the [MIT license](LICENSE).
