// Use standard `img` element instead of `next/image` for static site

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => <img {...rest} />

export default Image
