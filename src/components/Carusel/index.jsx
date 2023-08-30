import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { sildes } from '../../mock/silide';
import { useCompany } from '../../context/Company';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const checkCompany = (e) => {
  switch (e) {
    case 0:
      return 'uzmobile';
    case 1:
      return 'beeline';
    case 2:
      return 'ucell';
    case 3:
      return 'mobiuz';
    default:
      return 'uzmobile';
  }
};

export default function Carosel() {
  const [activeSlideIndex, setActiveSlide] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);
  const [, dispatch] = useCompany();

  useEffect(() => {
    const storedIndex = localStorage.getItem('lastActiveSlide');
    if (storedIndex !== null) {
      setActiveSlide(Number(storedIndex));
      if (swiperRef) {
        swiperRef.slideTo(Number(storedIndex), 0);
      }
    }
  }, [swiperRef]);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    setActiveSlide(activeIndex);
    dispatch({
      type: 'setCompany',
      payload: checkCompany(activeIndex),
    });
    localStorage.setItem('lastActiveSlide', activeIndex);
  };

  return (
    <>
      <div className=' h-[190px] bg-[var(--bg-color)] pt-[10px] pb-[24px]'>
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          pagination={{ clickable: true }}
          modules={[Navigation]}
          initialSlide={Number(activeSlideIndex)}
          className='w-full'
          onSlideChange={handleSlideChange}
          onSwiper={setSwiperRef}
        >
          {sildes?.map((el) => (
            <SwiperSlide key={el.id} className='flex justify-center'>
              <img
                className='w-[291px] img-carusel  rounded-lg'
                src={el.image}
                alt='img'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
