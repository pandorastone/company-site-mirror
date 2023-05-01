import Submenu from "../../common/submenuPage";
import quartzImg from "../../../assets/quartz.jpg"
import porcelainImg from "../../../assets/porcelain.jpg"

export default function Collections() {
  return (
    <>
      <Submenu list={[{
        title: "quartz",
        link: "quartz",
        img: quartzImg
      },{
        title: "porcelain",
        link: "porcelain",
        img: porcelainImg
      }]}/>
    </>
  )
}