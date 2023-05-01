import Hero from "../../common/hero";
import Filter from "./filter";
import { quartz, quartzSeries } from "../../../constants/data";
import quartzImg from "../../../assets/quartz.jpg"

export default function Quartz() {
  return (
    <>
      <Hero img={quartzImg}>Quartz Collections</Hero>
      <Filter listProp={quartz} series={quartzSeries}/>
    </>
  )
}