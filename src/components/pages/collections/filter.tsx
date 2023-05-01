import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Product } from "../../../types/interfaces"
// import { cld } from "../../../cloudinary";
// import { AdvancedImage } from '@cloudinary/react';

export default function Filter({ listProp, series }: {
  listProp: Product[]
  series: string[]
}) {
  const defaultStatus = "All"
  const [list, setList] = useState<Product[]>([])
  const [seriesFilter, setSeriesFilter] = useState<string[]>([defaultStatus])
  const currentRoute = useLocation()

  function FilterInput() {
    function SearchField() {
      const [searchInput, setSearchInput] = useState("")

      function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault()
        if (searchInput.length > 0) {
          setList(listProp.filter(i => i.code.toLowerCase().includes(searchInput)))
        }
      }

      return (
        <form className="mb-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="search by product code" className="border border-gray-200 rounded-l px-3 py-2" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
          <button type="submit" className="border border-gray-400 bg-gray-400 rounded-r px-3 py-2 text-white hover:bg-gray-500 transition-[background-color]">Search</button>
        </form>
      )
    }

    return (
      <div className="mb-8 text-center">
        <SearchField />
        <div className="flex flex-wrap justify-center items-center gap-4 text-lg">
          {seriesFilter.map((i, idx) => (<h3 key={idx} className={`cursor-pointer border-white border-b-2 hover:border-black transition-all`} onClick={() => setList(listProp.filter(p => p.series === i || i === defaultStatus))}>{i}</h3>))}
        </div>
      </div>
    )
  }

  function FilterDisplay() {
    const parseUrl = (url: string) => {
      return url.toLowerCase()
    }

    // const cldUrl = (name: string) => {
    //   return cld.image(`material/${name.toLowerCase().replace(/ /g, "-")}`)
    // }

    const imgUrl = (name: string) => {
      return name.toLowerCase().replace(/ /g, "-")
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {list.length > 0 ? list.map(i => (
          <Link to={`${currentRoute.pathname}/${parseUrl(i.code)}`} key={i.code} className="overflow-hidden group relative text-lg cursor-pointer">
            {/* <AdvancedImage cldImg={cldUrl(i.name)} /> */}
            <img src={`/material/${imgUrl(i.name)}.png`} alt="img" className="w-full h-full object-cover" loading="lazy" />
            <div className="md:group-hover:h-auto md:group-hover:py-4 md:h-0 md:py-0 px-4 py-4 absolute bottom-0 left-0 right-0 bg-gray-600 bg-opacity-60 text-white transition-all">
              <h3>{i.code}</h3>
              <p>{i.name}</p>
            </div>
          </Link>
        )) : <div className="col-span-3 text-center text-lg">Products not found</div>}
      </div>
    )
  }

  useEffect(() => {
    setList(listProp)
    setSeriesFilter(prev => [...prev, ...series])
  }, [])

  return (
    <div className="m-auto max-w-[1200px] w-full px-4 py-12">
      <FilterInput />
      <FilterDisplay />
    </div>
  )
}