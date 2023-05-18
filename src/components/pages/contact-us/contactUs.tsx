import Hero from "../../common/hero";
import ContactForm from "./contactForm";
import ContactInfo from "./contactInfo";
import contactImg from "../../../assets/contact-us.jpg"
import Head from "../../common/Head";

export default function ContactUs() {
  return (
    <>
    <Head title="Contacts | Pandora Stone" desc="Contact Us - Pandora Stone"/>
    <Hero img={contactImg}>Contact Us</Hero>
    <div className="flex flex-col md:flex-row gap-4 m-auto max-w-[1200px] w-full px-4 py-12">
      <div className="flex-1"><ContactInfo/></div>
      <div className="flex-1"><ContactForm/></div>
    </div>
    </>
  )
}