import React from 'react';
import styled from 'styled-components';

const CartPage = () => {
   return (
      <>
         <Container>
            <Caption>장바구니</Caption>
            <Section>
            <Article>

            </Article>
            <Aside>

            </Aside>
            </Section>
         </Container>
      </>
   );
};

const Container = styled.div`
   display: block;
   margin: 16em;
   text-align: center;
   position: relative;
   top: 40px;
`;

const Caption = styled.h3`
   margin: 2em;
   text-align: center;
   color: #333;
   font-size: 28px;
`;
const Section = styled.section`
   width: 1903px;
   margin: auto;
`;
const Article = styled.article`
background: #222;
width: 70%;
`;
const Aside = styled.aside`
background: #333;
width: 30%;
`;

export default CartPage;