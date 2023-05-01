import TextBox from "../../common/textbox"
import Hero from "../../common/hero"
import { companyIntro, porcelainFeatures, quartzFeatures } from "../../../constants/data"
import bg from "../../../assets/about-bg.jpg"
import Tab from "../../common/tab"
import { useMediaQuery } from "../../../hooks"

const TabChildren = ({ list, perRow }: {
  list: {
    title: string,
    content: string,
    icon: React.ReactNode
  }[]
  perRow: number
}) => {
  const mdBreakpoint = useMediaQuery("(min-width: 768px)")

  return (
    <div>
      <div className="flex flex-wrap flex-col md:flex-row justify-center">
        {list.map(i => (
          <div key={i.title} style={{ width: mdBreakpoint ? `${1 / perRow * 100}%` : "100%" }} className={`text-center py-4 md:p-4`}>
            <div className="mb-4 flex justify-center items-center">{i.icon}</div>
            <div className="mb-2 uppercase"><h2>{i.title}</h2></div>
            <div><h3>{i.content}</h3></div>
          </div>))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <>
      <Hero img={bg}>
        About Us
      </Hero>
      <TextBox title="Our Brand" desc={companyIntro} />
      <Tab list={[
        {
          title: "Quartz",
          content: <TabChildren list={quartzFeatures} perRow={3} />
        },
        {
          title: "Porcelain",
          content: <TabChildren list={porcelainFeatures} perRow={4} />
        },
      ]} />
      <iframe className="md:m-auto md:mb-8 w-full max-w-[560px] aspect-video" src="https://www.youtube.com/embed/nL6RTPfGL5Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </>)
}