type ArtworkData = {
  title: string
  date: string | number
  medium: string
  description: string
  images: string[]
}

const artworksData: ArtworkData[] = [
  {
    title: 'George bush skull face',
    date: '2004',
    medium: 'Stencil + spraypaint on various mediums',
    description: 'I was into Banksy way before the fine art world caught on.',
    images: ['bush-skull.jpeg'],
  },
  {
    title: 'Chuck Palahniuk',
    date: 2006,
    medium: 'Stencil + spraypaint on paper',
    description: 'I made this for my then-partner who was really into the author Chuck Palahniuk.',
    images: ['chuck.jpeg'],
  },
  {
    title: 'Adam holding Fentry',
    date: 2017,
    medium: 'Watercolor on canvas panel',
    description:
      'Portrait of a man holding Fentry (chicken). Noone told me that watercolor is for paper.',
    images: ['adam-fentry.jpeg'],
  },
  {
    title: 'Clint on phone',
    date: 2018,
    medium: 'Acrylic on canvas panel',
    description: 'Portrait of a man on the phone with his roommate.',
    images: ['clint-phone.jpeg'],
  },
  {
    title: 'Coffee man',
    date: 2020,
    medium:
      'Inked rubber stamp, printer toner, coffee bag, paper grocery bag, coffee wash, mug stain, acrylic paint on canvas panel',
    description: 'Portrait of a man who roasts coffee.',
    images: ['coffee-man.jpeg'],
  },
  {
    title: 'Selfie',
    date: 2017,
    medium: 'Watercolor on canvas panel',
    description: 'An exploration into artist-as-medium in the 21st century.',
    images: ['selfie.jpeg'],
  },
]

export default artworksData
