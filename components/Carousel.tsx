import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Phillies from "./images/phillies-test.jpeg";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="w-[25vw] h-[70vh]">
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <Image width={500} height={400} src={Phillies} alt="The NFT" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image width={500} height={400} src={Phillies} alt="The NFT" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image width={500} height={400} src={Phillies} alt="The NFT" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image width={500} height={400} src={Phillies} alt="The NFT" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image width={500} height={400} src={Phillies} alt="The NFT" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image width={500} height={400} src={Phillies} alt="The NFT" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image width={500} height={400} src={Phillies} alt="The NFT" />{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
