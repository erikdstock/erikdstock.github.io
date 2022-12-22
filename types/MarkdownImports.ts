export type PostFrontMatter = {
  title: string
  date: string
  tags: string[]
  lastmod?: string
  draft?: boolean
  summary?: string
  images?: string[]
  authors?: string[]
  layout?: string
  slug: string
  fileName: string
}

export type AuthorFrontMatter = {
  layout?: string
  name: string
  avatar: string
  occupation?: string
  company?: string
  email?: string
  twitter?: string
  mastodon?: string
  linkedin?: string
  github?: string
}
