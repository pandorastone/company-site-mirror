import { useLoaderData } from "react-router-dom"
import Hero from "../../common/hero"
import { Product } from "../../../types/interfaces"

export default function ProductDetail() {
  const detail = useLoaderData() as Product

  const imgUrl = (name: string) => {
    return name.toLowerCase().replace(/ /g, "-")
  }

  function Gallery({ list }: { list: string[] }) {
    return (
      <div>{list.map(i => (<img key={i} src={`/showcase/${i}.png`} alt="gallery" loading="lazy" className="m-auto" />))}</div>
    )
  }

  return (
    <>
      <Hero img={`/material/${imgUrl(detail.name)}.png`} isBackdrop>{detail.code}</Hero>
      <div className="m-auto max-w-[1200px] w-full p-4">
        <div className="pt-12 pb-16">
          <h3 className="text-2xl text-center mb-4">Specifications</h3>
          <div className="flex justify-center items-start gap-8">
            <div className="capitalize">
              {Object.keys(detail).map(i => (<p key={i}>{i}:</p>))}
            </div>
            <div>
              <div>{detail.code}</div>
              <div>{detail.name}</div>
              <div>{detail.series}</div>
              {detail.style ? ( <div>{detail.style}</div>) : null}
              <div>{detail.size.split(',').map(i => <div key={i}>{i}</div>)}</div>
            </div>
          </div>
        </div>
        <Gallery list={[imgUrl(detail.name)]} />
      </div>
    </>
  )
}