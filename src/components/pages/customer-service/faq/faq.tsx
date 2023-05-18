import Head from "../../../common/Head";
import Accordion from "../../../common/accordion";

export default function FAQ() {
  const questions = [{
    title: "Are you open to the public? What areas do you serve? Do you sell retail?",
    content: "As a supplier, we sell to both the public and the building sector. Our range of customers includes installer, designer, contractor and flooring dealers. Customers can visit our showroom to get more information about our products."
  },
  {
    title: "Where did the raw material came from?",
    content: "The raw materials used in our products are premium, high purity, fine ground sands extracted from feldspar and quartz mines owned by our company. Therefore, we have guaranteed supply of high quality raw materials. This helps us to provide products of superior quality compared to similar products on the market of similar price. Our entire production line and equipment are imported from Italy. You can imagine that our product is equivalent to the famous Italian branded products."
  },
  {
    title: "Where can I see more installations of your products?",
    content: "Follow us on social media to see more photos of showcase projects using our products. You may also visit the collections section of the website to discover more products."
  },
  {
    title: "What technology is in the production process?",
    content: "Our products are made using the world-known Italian production lines that span 800 metres long. Our glaze and glaze sprayer used in production are also Italian made."
  },
  {
    title: "How our sintered stone is made?",
    content: "The production process put the materials to high pressure (30,000 tons) and high temperature (1280 degrees Celsius) that mimics those deep in the earth's crust like marble and granite, resembling the process of natural stone formation."
  },
  {
    title: "What are the advantages of using porcelain slabs?",
    content: "Porcelain slabs are the latest trend in modern home and commercial building design because of its versatile applications and superior physical properties to traditional materials like granite, marble and quartz. Sintered stone can provide a lifetime of beauty without staining or sustaining heat or water damage. And although it is a manufactured stone, it feels just like natural stone."
  },
  {
    title: "How do I care for my Quartz / Porcelain slabs?",
    content: "They are very simple to care for, using only soap, water, and a soft cloth."
  }
  ]

  return (
    <>
      <Head title="Frequently Asked Questions | Pandora Stone" desc="Pandora Stone Frequently Asked Questions" />
      <div className="m-auto w-[1200px] max-w-full px-4 py-12">
        <div className="text-2xl uppercase mb-4"><h2>Frequently Asked Questions</h2></div>
        <div className="flex flex-col">{questions.map((i, idx) => (
          <div className="px-2 py-4 odd:bg-gray-100 even:bg-white" key={idx}>
            <Accordion title={i.title}>{i.content}</Accordion>
          </div>))}</div>
      </div>
    </>
  )
}