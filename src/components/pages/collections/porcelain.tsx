import { porcelain, porcelainSeries } from "../../../constants/data";
import Hero from "../../common/hero";
import Filter from "./filter";
import porcelainImg from "../../../assets/porcelain.jpg"
import Head from "../../common/Head";

export default function Porcelain() {
  return (
    <>
      <Head title="Porcelain Collections | Pandora Stone" desc="Pandora Stone Porcelain Collections" />
      <Hero img={porcelainImg}>Porcelain Collections</Hero>
      <Filter listProp={porcelain} series={porcelainSeries} />
    </>
  )
}