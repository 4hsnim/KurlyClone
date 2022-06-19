import React from 'react';
import styled from 'styled-components';
import SimpleImageSlider from 'react-simple-image-slider';
import Carousel from 'react-grid-carousel';


const MainPage = () => {
   const bannerImg = [
      {
         url: 'https://img-cf.kurly.com/banner/main/pc/img/5a5ecfbd-6615-4593-955f-2725c82134d7',
      },
      {
         url: 'https://img-cf.kurly.com/banner/main/pc/img/c02c5036-df56-4cc8-b2b7-6e997e644008',
      },
      {
         url: 'https://img-cf.kurly.com/banner/main/pc/img/bb14e79a-a0ff-4e5e-83a2-a1c06c48d4ae',
      },
      {
         url: 'https://img-cf.kurly.com/banner/main/pc/img/2a6fa583-ef3d-48a5-a07f-593be0adc1b2',
      },
      {
         url: 'https://img-cf.kurly.com/banner/main/pc/img/b3bd843e-c377-41f9-a054-dea26be0bb7a',
      },
      {
         url: 'https://img-cf.kurly.com/banner/main/pc/img/39c28de9-2a7f-43bc-9e41-648befae3c95',
      },
      {
         url: 'https://img-cf.kurly.com/banner/main/pc/img/cc9e301f-bf05-42ca-889b-8d6d0777be4b',
      },
   ];
   

   const Array = [
      {
         url: 'https://img-cf.kurly.com/shop/data/goods/1452166174810l0.jpg',
      },
      {
         url: 'https://img-cf.kurly.com/shop/data/goods/1485857289116l0.jpg',
      },
      {
         url: 'https://img-cf.kurly.com/shop/data/goods/1488949996597l0.jpg',
      },
      {
         url: 'https://img-cf.kurly.com/shop/data/goods/1640765796240l0.jpg',
      },
      {
         url: 'https://img-cf.kurly.com/shop/data/goods/1452154403699l0.jpg',
      },
      {
         url: 'https://img-cf.kurly.com/shop/data/goods/1627632869421l0.jpg',
      },

   ]; 

   return (
      <>
         <Container>
            <SimpleImageSlider
               width={'100%'}
               height={370}
               images={bannerImg}
               showBullets={true}
               showNavs={true}
               speed={500}
            />
         </Container>

         <Container2>
            <CarouselBox>
               <CarouselTitle>이 상품 어때요?</CarouselTitle>
               <Carousel rows={1} cols={4} gap={1}>
                  {Array.map((val, i) => {
                     return (
                        <Carousel.Item key={i}>
                           <Img
                              src={val.url}
                              style={{
                                 margin: '0 10px',
                                 background: '#ff000040',
                                 textAlign: 'center',
                                 lineHeight: '200px',
                                 width: '239px',
                                 height: '320px',
                              }}
                           />
                        </Carousel.Item>
                     );
                  })}
                  <p>상품</p>
               </Carousel>

               <Img src="https://img-cf.kurly.com/banner/random-band/pc/img/9a8968a6-bce6-498a-b2ad-35199762ff1c" />
            </CarouselBox>

            <CarouselBox>
               <CarouselTitle>놓치면 후회할 가격</CarouselTitle>
               <Carousel rows={1} cols={4} gap={1}>
                  {Array.map((val, i) => {
                     return (
                        <Carousel.Item key={i}>
                           <Img
                              src={val.url}
                              style={{
                                 display: 'block-inline',
                                 margin: '0 10px',
                                 background: '#ff000040',
                                 textAlign: 'center',
                                 lineHeight: '200px',
                                 width: '239px',
                                 height: '320px',
                              }}
                           />
                           <span type="prev"></span>
                        </Carousel.Item>
                     );
                  })}
               </Carousel>
            </CarouselBox>
         </Container2>
      </>
   );
};
const Container = styled.div`
   position: relative;
   top: 120px;
   margin: 50px auto;
`;

const Container2 = styled.div`
   position: relative;
   top: 120px;
   margin: 40px auto;
`;
const CarouselBox = styled.div`
   display: block;
   width: 70%;
   position: relative;
   bottom: 10px;
   margin: auto;
   padding: 0;
`;

const CarouselTitle = styled.h2`
   font-size: 28px;
   display: flex;
   justify-content: center;
   margin: auto;
   padding: 10px;
`;

const Img = styled.img`
   position: relative;
   top: 30px;
   width: 100%;
   height: 100%;
   object-fit: cover;
`;


const CarouselBox2 = styled.div`


`
const Btn = styled.button`
    background: #0000004e;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    padding: 8px 12px;

`;
export default MainPage;
