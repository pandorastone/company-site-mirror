import Submenu from "../../common/submenuPage";
import warrantyImg from "../../../assets/warranty.jpg"
import maintenanceImg from "../../../assets/maintenance.jpg"
import faqImg from "../../../assets/faq.jpg"
import Head from "../../common/Head";

export default function Services() {
  return (
    <>
      <Head title="Customer Service | Pandora Stone" desc="Pandora Stone Customer Service" />
      <Submenu list={[{
        title: "Warranty",
        link: "/warranty",
        img: warrantyImg
      },
      {
        title: "Maintenance Guide",
        link: "/maintenance",
        img: maintenanceImg
      },
      {
        title: "faq",
        link: "/faq",
        img: faqImg
      }]}
        isBackdrop
      />
    </>
  )
}