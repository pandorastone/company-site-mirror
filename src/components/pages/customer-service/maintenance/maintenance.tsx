import { Link } from "react-router-dom";
import ContactBanner from "../contactBanner";

export default function Maintenance() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="mx-auto w-[1200px] max-w-full px-4 py-12">
        <h3 className="text-2xl uppercase mb-4">Maintenance Guide</h3>
        <p className="mb-4">Our products are manufactured to be durable and care-free. Only simple care is needed to maintain its quality and maintenance. But there are still tips that can help to protect the product for maximized product longevity.</p>
        <p className="mb-2">You can:</p>
        <ul className="mb-4 list-disc ml-6">
          <li>Simply use wet towel to wipe the surface of our product for cleaning.</li>
          <li>Use daily home cleansing products for stain removal.</li>
          <li>Always use cutting board and clear away sharp objects although our products have food-grade safety.</li>
          <li>Avoid hard knocks on exposed areas that are prone to breaking of the product, particularly on corners and edges.</li>
          <li>Always add insulation pads when placing high temperature items on product surfaces to avoid direct contact.</li>
        </ul>
        <p>Check our <Link to="/warranty"><b>warranty scheme</b></Link> to see what it covers.</p>
      </div>
      <ContactBanner/>
    </div>
  )
}