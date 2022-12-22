![tailwind-nextjs-banner](/public/static/images/site-banner.png)

# Tailwind Nextjs Starter Blog (Static version)

This is a static site version of the [timlrx/tailwind-nextjs-starter-blog][forked-starter] blogging starter template. It features typescript, a comprehensive setup for handling markdown and MDX files, automatic deployment to github pages and commit hooks for code quality. The original repo's instructions (as of v1.5) are available in the [archived starter files](./base-archive).

Because the base was tweaked to make a static website, certain server-only features - namely `next/image` and the api routes used for newsletter subscriptions - will not work. The former has been removed; the latter routes remain because they affect layout and you may want to implement your own newsletter provider.

## Using this base

The base of this blog, adapted from `timlrx/tailwind-nextjs-starter-blog#typescript`, is available on the `static-base` branch. You can make a fresh copy of it:

```bash
npx degit erikdstock/erikdstock.github.io#static-base
```

From there follow the [original README](./docs/README.md), ignoring references to features like `next/image`:

1.  Personalize `siteMetadata.js` (site related information)
2.  Personalize `authors/default.md` (main author)
3.  Modify `projectsData.js`
4.  Modify `headerNavLinks.js` to customize navigation links
5.  Add blog posts
6.  Test that the site can build: `yarn build && yarn export && yarn serve:static`
7.  Enjoy the many easter eggs (unmarked TODOs) I have left for you to enjoy! These likely include
    - Updating default styles
    - Updating dependencies
    - Deciding whether you want to implement the discussion or newsletter functionality
    - Optionally, make a pull request back to the `static-base` branch to help others.

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

Run `yarn compose` to bootstrap a new post.

Follow the interactive prompt to generate a post with pre-filled front matter. `PostLayout` is the default layout, while `PostSimple` is... simpler.

## Deploy

This blog is based on a starter that must deploy to a server environment, but has been modified to work with any static hosting service. It is configured to automatically deploy to github pages if you name your repo `YOUR_USERNAME.github.io`. If you don't need that or are not using github as your git host, edit or remove the files in the [.github](./github) folder.

## Support

This template is provided as-is, though I'll happily accept issues or PRs to fix bugs related to the static site customizations here. For other issues see the [original starter][https://github.com/timlrx/tailwind-nextjs-starter-blog#support].

## License

[MIT](https://github.com/erikdstock/erikdstock.github.io/blob/master/LICENSE) © [Erik Stockmeier](https://erikdstock.github.io)

[forked-starter]: https://github.com/timlrx/tailwind-nextjs-starter-blog
