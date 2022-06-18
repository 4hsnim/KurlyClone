import React from 'react';
import styled from 'styled-components';

const MainPage = () => {
   return (
      <>
         <div>
            <SlideImg />
         </div>
      </>
   );
};

const SlideImg = styled.img`
   background-image: url('https://img-cf.kurly.com/banner/main/pc/img/96d199a4-ce14-43c5-9471-8c816ccd8b64');
`;

export default MainPage;
