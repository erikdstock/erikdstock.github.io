import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import NewsletterForm from '@/components/NewsletterForm'
import artworks from '@/data/artworksData'
import Card from '@/components/Card'

const ARTWORK_SRC_DIR = '/static/images/art'

export default function ArtGallery() {
  return (
    <>
      <PageSEO title="Erik's Art Barn" description="My explorations as an amateur artist" />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Erik's Art Barn
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A curated exhibition of artworks I have produced over the years.
          </p>
        </div>
        <div className="container py-12">
          <div className="justify-center gap-6 md:columns-2">
            {artworks.map((a) => (
              <Card
                key={a.title}
                title={a.title}
                cover={false}
                description={`${a.date} (${a.medium}) - ${a.description}`}
                imgSrc={`${ARTWORK_SRC_DIR}/${a.images[0]}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
