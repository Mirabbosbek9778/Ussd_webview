import { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';

import { sildes } from '../../mock/silide';

const checkCompany = (e) => {
  console.log(e);
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
      break;
  }
};

export default function Carosel() {
  return (
    <Fragment>
      <div className=' h-[190px] bg-[var(--bg-color)] pt-[10px] pb-[24px]'>
        <Swiper
          // spaceBetween={20}
          // centeredSlides={true}
          // slidesPerView={1}
          // spaceBetween={30}
          slidesPerView={'auto'}
          centeredSlides={true}
          // loop={true}
          pagination={{ clickable: true }}
          modules={[Navigation]}
          className='w-full'
          onSlideChange={(e) => {
            checkCompany(e.activeIndex);
          }}
        >
          {sildes?.map((el) => (
            <SwiperSlide key={el.id} className='flex justify-center'>
              <img
                className='w-[291px] img-carusel  rounded-lg'
                onClick={(e) => console.log(e?.screenY)}
                src={el.image}
                alt='img'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fragment>
  );
}
