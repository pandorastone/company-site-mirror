import Hero from "../../common/hero";
import Filter from "./filter";
import { quartz, quartzSeries } from "../../../constants/data";
import quartzImg from "../../../assets/quartz.jpg"
import Head from "../../common/Head";

export default function Quartz() {
  return (
    <>
      <Head title="Quartz Collections | Pandora Stone" desc="Pandora Stone Quartz Collections" />
      <Hero img={quartzImg}>Quartz Collections</Hero>
      <Filter listProp={quartz} series={quartzSeries} />
    </>
  )
}