import { Link } from "react-router-dom";
import ContactBanner from "../contactBanner";
import Head from "../../../common/Head";

export default function Warranty() {
  return (
    <>
      <Head title="Warranty | Pandora Stone" desc="Pandora Stone Warranty" />
      <div className="h-full flex flex-col justify-between">
        <div className="mx-auto w-[1200px] max-w-full px-4 py-12">
          <h3 className="text-2xl uppercase mb-4">Lifetime Warrenty</h3>
          <p className="mb-4">Our products, manufactured with our own source of raw material with our top level production line imported from Italy, should last for many years while retaining its quality and appearance under both residential and commercial use.</p>
          <p className="mb-2">Please be reminded that:</p>
          <ul className="mb-4 list-disc ml-6">
            <li>The warranty scheme will cover for the replacement of any defected products that were damaged during transportation, or before installation, or due to crafting techniques such as seam performance.</li>
            <li>The warranty scheme will <b>not</b> cover for the repair and replacement of any defected products after installation confirmed by our customer.</li>
            <li>The warranty scheme will <b>not</b> cover for any natural wear and tear from daily usage.</li>
            <li>The warranty scheme will <b>not</b> cover for any damage due to movement of your home or cabinetry.</li>
          </ul>
          <p>Visit our <Link to="/maintenance"><b>maintenance guide</b></Link> to know more about maintaining our products.</p>
        </div>
        <ContactBanner />
      </div>
    </>
  )
}