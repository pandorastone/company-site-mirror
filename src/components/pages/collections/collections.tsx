import Submenu from "../../common/submenuPage";
import quartzImg from "../../../assets/quartz.jpg"
import porcelainImg from "../../../assets/porcelain.jpg"
import Head from "../../common/Head";

export default function Collections() {
  return (
    <>
      <Head title="Collections | Pandora Stone" desc="Pandora Stone Quartz and Porcelain Collections"/>
      <Submenu list={[{
        title: "quartz",
        link: "quartz",
        img: quartzImg
      }, {
        title: "porcelain",
        link: "porcelain",
        img: porcelainImg
      }]} />
    </>
  )
}