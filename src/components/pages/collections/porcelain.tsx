import { porcelain, porcelainSeries } from "../../../constants/data";
import Hero from "../../common/hero";
import Filter from "./filter";
import porcelainImg from "../../../assets/porcelain.jpg"

export default function Porcelain() {
  return (
    <>
      <Hero img={porcelainImg}>Porcelain Collections</Hero>
      <Filter listProp={porcelain} series={porcelainSeries}/>
    </>
  )
}