import { info } from "../../../constants/data";
import { RiHome2Line, RiSuitcaseLine } from "react-icons/ri"

export default function ContactInfo() {
  return (
    <>
      <div className="mb-4 flex items-start gap-4">
        <RiHome2Line />
        <div>
          <p>{info.address}</p>
          <p>{info.email}</p>
          <p>{info.phone}</p>
        </div>
      </div>
      <div className="mb-4 flex items-start gap-4">
        <RiSuitcaseLine />
        <div>
          <p>Opening hours</p>
          <p>{info.openHours}</p>
        </div>
      </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.6403201810067!2d-79.26440192331897!3d43.82181954150799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d6cc0946b4fd%3A0x47b6cee2b10bef58!2s795%20Middlefield%20Rd%2C%20Scarborough%2C%20ON%20M1V%202T9!5e0!3m2!1sen!2sca!4v1681336141681!5m2!1sen!2sca" loading="lazy" className="w-full h-72"></iframe>
      </div>
    </>
  )
}