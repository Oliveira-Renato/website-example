//==== Import Swiper React components ==== \\
import { Mousewheel , Pagination, Keyboard ,Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';

import {ContainerMedia} from '../../styles/media.js';
import data from './testimonials.json';


export function Testimonials(){

  const newData = data.map((valor,index,array)=>{

    return (
      <SwiperSlide key ={array[index]['id']}>
        
        <div className="testimonials" >

            <blockquote>
              <p>
                <span>&ldquo;</span>
                {array[index]['content']}
                <br/><br/>
                {array[index]['data']}
              </p>
              <cite>
              <img src={`${array[index]['image']}`} alt="Foto da pessoa"  />
                {array[index]['titulo']}
              </cite>
            </blockquote> 
          </div>
      </SwiperSlide>
    )

  })

  return (
    <>
    <ContainerMedia />
      {/*====  TESTIMONIALS ====  */}
      <section className="section" id="testimonials">
          <div className="container">
            <header>
              <h2 className="title">Depoimentos de quem já utilizou o <strong>SYSCARE</strong></h2>
            </header>
            
            <Swiper 
              // install Swiper modules
              modules={[Pagination, Mousewheel, Keyboard , Navigation]}
              slidesPerView={'auto'}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet'
              }}
              // mousewheel={true}
              keyboard={true}
              >
              {/* //aqui */}
              {newData}
                        

            </Swiper>
            
          </div>
        </section>
    </>
  )
}