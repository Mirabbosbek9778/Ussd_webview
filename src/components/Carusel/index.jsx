import { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';

import { sildes } from '../../mock/silide';

export default function Carosel() {
  return (
    <Fragment>
      <div className='w-max-[375px] h-[190px] bg-[var(--bg-color)] pt-[10px] pb-[24px]'>
        <Swiper
          // spaceBetween={20}
          // centeredSlides={true}
          // slidesPerView={1}
          spaceBetween={30}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Navigation]}
          className='w-full'
        >
          {sildes?.map((el) => (
            <SwiperSlide key={el.id} className='flex justify-center'>
              <img className='w-[291px] rounded-lg' src={el.image} alt='img' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fragment>
  );
}
