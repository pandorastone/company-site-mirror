import { Link } from "react-router-dom";
import { HiOutlinePhone } from "react-icons/hi"

export default function ContactBanner(){
  return (
    <div className="bg-gray-300">
        <div className="p-4 m-auto w-[1200px] max-w-full flex justify-between items-center">
          <div className="hidden md:block first-letter:md:block text-xl md:text-2xl">
            <p>Any questions?</p>
            <p>Contact our <b>customer services</b> and we will be willing to help.</p>
          </div>
          <div className="relative group">
            <div className="flex items-center justify-between gap-2 text-lg border-black">
              <HiOutlinePhone />
              <Link to="/contacts">Contact Us</Link>
            </div>
            <span className="absolute bottom-0 left-1/2 right-1/2 bg-black h-[2px] group-hover:left-0 group-hover:right-0 transition-all"></span>
          </div>
        </div>
      </div>
  )
}