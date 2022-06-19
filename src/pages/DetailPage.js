import React from "react";
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
/*COMPONENTS*/
import Detail from "../components/detail/Detail";
import Review from "../components/detail/Review";


const DetailPage = (props) => {


  return (
     <>
        <Detail />
        <Review />
        <Container>
           <h1>Detail page</h1>
        </Container>
     </>
  );
  
};

const Container = styled.div`
   display: block;
   margin: 16em;
   text-align: center;
   position: relative;
   top: 100px;
`;
export default DetailPage;