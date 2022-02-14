![tailwind-nextjs-banner](/public/static/images/twitter-card.png)

# Tailwind Nextjs Starter Blog (Static version)

This is a static site version of the [timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) blogging starter template. It features typescript, a comprehensive setup for handling markdown and MDX files, automatic deployment to github pages and commit hooks for code quality. The original repo's instructions (as of v1.5) are available in the [/docs](./docs/README.md).

Because the base was tweaked to make a static website, certain server-only features - namely `next/image` and the api routes used for newsletter subscriptions - will not work. The former has been removed; the latter routes remain because they affect layout and you may want to implement your own newsletter provider.

## Using this base

The base of this blog, adapted from `timlrx/tailwind-nextjs-starter-blog#typescript`, is available on the `static-base` branch. You can make a fresh copy of it:

```bash
npx degit erikdstock/erikdstock.github.io#static-base
```

From there follow the [original README](./docs/README.md), ignoring references to features like `next/image`:

> 1. Personalize `siteMetadata.js` (site related information)
> 2. Personalize `authors/default.md` (main author)
> 3. Modify `projectsData.js`
> 4. Modify `headerNavLinks.js` to customize navigation links
> 5. Add blog posts
>    ...

## Installation

```bash
yarn install
```

## Development

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Extend / Customize

See the [original README](./docs/README.md).

## Post

### Frontmatter

Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/).

Currently 7 fields are supported.

```
title (required)
date (required)
tags (required, can be empty array)
lastmod (optional)
draft (optional)
summary (optional)
images (optional, if none provided defaults to socialBanner in siteMetadata config)
authors (optional list which should correspond to the file names in `data/authors`. Uses `default` if none is specified)
layout (optional list which should correspond to the file names in `data/layouts`)
```

Here's an example of a post's frontmatter:

```
---
title: 'Introducing Tailwind Nexjs Starter Blog'
date: '2021-01-12'
lastmod: '2021-01-18'
tags: ['next-js', 'tailwind', 'guide']
draft: false
summary: 'Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template.'
images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
authors: ['default', 'sparrowhawk']
layout: PostLayout
---
```

### Compose

Run `node ./scripts/compose.js` to bootstrap a new post.

Follow the interactive prompt to generate a post with pre-filled front matter.

## Deploy

**Vercel**  
The easiest way to deploy the template is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

**Netlify / GitHub Pages / Firebase etc.**  
As the template uses `next/image` for image optimization, additional configurations have to be made to deploy on other popular static hosting websites like [Netlify](https://www.netlify.com/) or [GitHub Pages](https://pages.github.com/). An alternative image optimization provider such as Imgix, Cloudinary or Akamai has to be used. Alternatively, replace the `next/image` component with a standard `<img>` tag. See [`next/image` documentation](https://nextjs.org/docs/basic-features/image-optimization) for more details.

The API routes used in the newsletter component cannot be used in a static site export. You will need to use a form API endpoint provider and substitute the route in the newsletter component accordingly. Other hosting platforms such as Netlify also offer alternative solutions - please refer to their docs for more information.

## Support

Using the template? Support this effort by giving a star on GitHub, sharing your own blog and giving a shoutout on Twitter or becoming a project [sponsor](https://github.com/sponsors/timlrx).

## License

[MIT](https://github.com/erikdstock/erikdstock.github.io/blob/master/LICENSE) © [Erik Stockmeier](https://erikdstock.github.io)
