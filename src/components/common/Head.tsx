import { Helmet } from "react-helmet-async"

interface HeadProps {
  title: string
  desc: string
}

export default function Head({title, desc}: HeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  )
}