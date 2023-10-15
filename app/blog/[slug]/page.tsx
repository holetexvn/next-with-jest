type Params = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` }
}

export default function Page({ params }: Params) {
  return <div>
    <h1>Slug: {params.slug}</h1>
    <p>HoleTex</p>
  </div>
}
