import { Link } from "react-router-dom"

interface submenuProps {
  list: {
    title: string
    link: string
    img: string
  }[]
  isBackdrop?: boolean
}

export default function Submenu({ list, isBackdrop }: submenuProps) {
  return (
    <div className="w-[1200px] max-w-full m-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-4">
      {list.map(i => (
        <Link to={i.link} key={i.title}>
          <div className="relative cursor-pointer select-none overflow-hidden">
            <img src={i.img} alt={i.title} loading="lazy" className={`w-full aspect-square object-cover hover:scale-150 transition-[transform] ${isBackdrop ? "brightness-75" : null}`} />
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl text-center uppercase">{i.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  )
}