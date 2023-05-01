import { list, companyIntro } from "../../../constants/data";
import TextBox from "../../common/textbox";
import Hero from "../../common/hero";
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <>
      <Hero isFullScreen img="/showcase/pandora.png">
        <h1 className="text-2xl md:text-4xl p-4 border-2 border-white select-none">Elegant and Durable</h1>
        <h1 className="text-2xl md:text-4xl p-4 select-none">Redefining Luxury Houses</h1>
      </Hero>
      <TextBox title="Our Collections" desc={companyIntro} />
      <div className="pt-4 pb-12">
        <Swiper
          modules={[Autoplay]}
          autoplay = {{delay: 5000}}
          breakpoints={{
            426: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 4
            }
          }}
          spaceBetween={16}
          slidesPerView={1}
        >
          {list.map(i => (<SwiperSlide key={i.link}><Link to={i.link}><img src={i.img} alt="image" className="w-full h-full object-cover cursor-pointer" /></Link></SwiperSlide>))}
        </Swiper>
      </div>
    </>)
}