import { porcelain, quartz } from "../../../constants/data";

export default function Showcase() {
  const imgUrl = (name: string) => {
    return name.toLowerCase().replace(/ /g, "-")
  }

  return (
    <>
      <div className="p-4 w-[1200px] max-w-full m-auto">
        <div className="columns-1 md:columns-3 gap-4">
          {quartz.map(i => (
            <img key={i.code} src={`/showcase/${imgUrl(i.name)}.png`} alt={`showcase-${i.name}`} loading="lazy" className="mb-4"/>
          ))}
          {porcelain.map(i => (
            <img key={i.code} src={`/showcase/${imgUrl(i.name)}.png`} alt={`showcase-${i.name}`} loading="lazy" className="mb-4"/>
          ))}
        </div>
      </div>
    </>
  )
}