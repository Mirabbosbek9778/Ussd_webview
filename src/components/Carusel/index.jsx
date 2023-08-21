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
      <div className='w-max-[375px] h-[190px] bg-[var(--bg-color)]'>
        <Swiper
          // spaceBetween={}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Navigation]}
          className='w-full h-full'
        >
          {sildes?.map((el) => (
            <SwiperSlide key={el.id} className=' rounded-md flex justify-end'>
              <img
                className='w-11/12 h-11/12 rounded-lg'
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
