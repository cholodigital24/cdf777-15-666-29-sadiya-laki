// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";



const aboutImage1 = "https://i.ibb.co/1KtKP29/349535414-1482982855570854-2347558841023081651-n.jpg";
const aboutImage2 = "https://i.ibb.co/fDYdcJy/361910856-1280576312849071-3287641205295604784-n.jpg";
const aboutImage3 = "https://i.ibb.co/wWCJpQY/365280362-1287431778830191-8601151475388067559-n.jpg";
const aboutImage4 = "https://i.ibb.co/2FL44HG/404354845-1344845146422187-4412033648779344673-n.jpg";
const aboutImage5 = "https://i.ibb.co/3z926vj/366084310-1290270308546338-4486222954795237032-n.jpg";
const aboutImage6 = "https://i.ibb.co/fNXzgQN/320741369-2053293818199918-6862753961975133883-n.jpg";

const slides = [
  { id: 1, image: aboutImage1, alt: "Slider 1" },
  { id: 2, image: aboutImage2, alt: "Slider 2" },
  { id: 3, image: aboutImage3, alt: "Slider 3" },
  { id: 4, image: aboutImage4, alt: "Slider 4" },
  { id: 5, image: aboutImage5, alt: "Slider 5" },
  { id: 6, image: aboutImage6, alt: "Slider 6" },
];

export default function App() {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="swiper-slide">
            <div className="h-full w-full flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
