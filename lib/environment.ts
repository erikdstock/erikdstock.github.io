import { PostFrontMatter } from 'types/PostFrontMatter'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'
const SHOW_DRAFTS_IN_DEVELOPMENT = true

export const isDevelopment = process.env.NODE_ENV === 'development'

/**
 * Logic to show draft posts on the site in whilst in development mode.
 */
export const isVisiblePost = (
  frontMatter: PostFrontMatter | AuthorFrontMatter
): frontMatter is PostFrontMatter =>
  !('draft' in frontMatter) ||
  frontMatter.draft !== true ||
  (SHOW_DRAFTS_IN_DEVELOPMENT && isDevelopment)
