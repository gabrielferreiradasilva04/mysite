import Product1 from './images/batom1.webp';
import Product2 from './images/batom2.webp';
import Product3 from './images/batom3.jpg';
import Product4 from './images/batom4.jpg';
import './BodyProducts.css';
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
register();


function BodyProducts() {
  const data = [
    { id: '1', image: Product1 },
    { id: '2', image: Product2 },
    { id: '3', image: Product3 },
    { id: '4', image: Product4 },
  ]

  return (
    <div>
      <Swiper slidesPerView={1}
        pagination={{ clickable: true }}
        navigation>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image}
              alt='slider'
              className='slide-item'>
            </img>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>


  );

}

export default BodyProducts;