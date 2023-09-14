import Product1 from './img/Base.jpg';
import Product2 from './img/Batom.jpg';
import Product3 from './img/mascara1.jpg';
import Product4 from './img/BatomRosa.jpg';
import Product5 from './img/Colonia.jpg';
import Product6 from './img/perfume.jpg';
import Product7 from './img/corretivo.jpg';
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Products.css'
register();

function Products() {
    const data = [
        { id: '1', image: Product1, price: 'R$200,00', nickname: 'Base Sérum Avon FPS 30' },
        { id: '2', image: Product2, price: 'R$250,00', nickname: 'Batom Matte Hydramatic' },
        { id: '3', image: Product3, price: 'R$230,00', nickname: 'Máscara Para Cílios Genius Multibeneficios' },
        { id: '4', image: Product4, price: 'R$210,00', nickname: 'Batom Renew Sérum de Tratamento Labial Incolor' },
        { id: '5', image: Product5, price: 'R$220,00', nickname: 'Colônia Deo Lov | U Parfum' },
        { id: '6', image: Product6, price: 'R$1200,00', nickname: 'Far Away Gold Deo Parfum' },
        { id: '7', image: Product7, price: 'R$600,00', nickname: 'Corretivo Líquido Avon Power Stay' },
    ]
    return (
        <body className='products-body'>
            <div id="title-div">
                <h1 id="cuide-da-sua-pele">Cuide da Sua Pele</h1>
            </div>
            <div className="products-container">
                <Swiper slidesPerView={3}
                    pagination={{ clickable: true }}
                    navigation>
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img src={item.image}
                                alt='slider'
                                className='slide-product'>
                            </img>
                            <div className='details-container'>
                                <p>{item.nickname}</p>
                                <p id='value'>Valor: {item.price}</p>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </body>
    );
}
export default Products