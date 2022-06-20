import React, {useState} from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
const Review = ({ productId, name }) => {
   const navigate = useNavigate();
   const [modal, setModal] = useState(false);
   const reviewList = [
      {
         boardId: 1,
         title: '맛있음',
         nickName: 'sparta123',
         date: '2022-06-10',
         helped: 0,
         view: 3,
      },
      {
         boardId: 2,
         title: '???',
         content: '냠냠',
         nickName: 'sparta',
         date: '2022-06-10',
         helped: 0,
         view: 1,
      },
      {
         boardId: 3,
         title: '맛있음???',
         content: '냠냠',
         nickName: 'spar',
         date: '2022-06-10',
         helped: 0,
         view: 4,
      },
      {
         boardId: 4,
         title: '맛있음...',
         content: '냠냠',
         nickName: 'spa',
         date: '2022-06-10',
         helped: 0,
         view: 5,
      },
      {
         boardId: 5,
         title: '맛있음!!!',
         content: '냠냠',
         nickName: 'sparta123',
         date: '2022-06-10',
         helped: 0,
         view: 3,
      },
   ];

 const Modal = () =>{
   return (
      <ModalContainer>
  
            <h5>siasi</h5>

      </ModalContainer>
   ); 
 }
 const goComment = () => {
   navigate('/detail/:productId/write')
 }

  return (
     <>
        <Container>
           <div>
              <Form>
                 <Title>
                    <Name>PRODUCT REVIEW</Name>

                    <Content>
                       <ContentTxt>
                          상품에 대한 문의를 남기는 공간입니다. 해당 게시판의
                          성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될
                          수 있습니다.
                       </ContentTxt>
                       <ContentTxt>
                          배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은
                          마이컬리 내1:1 문의에 남겨주세요.
                       </ContentTxt>
                    </Content>
                 </Title>

                 <Table>
                    <thead>
                       <tr>
                          <Info
                             style={{
                                width: '70px',
                                textAlign: 'center',
                             }}
                          >
                             번호
                          </Info>
                          <Info
                             style={{
                                width: '592px',
                                textAlign: 'center',
                             }}
                          >
                             제목
                          </Info>
                          <Info
                             style={{
                                width: '51px',
                                textAlign: 'center',
                             }}
                          ></Info>
                          <Info
                             style={{
                                width: '77px',
                                textAlign: 'left',
                             }}
                          >
                             작성자
                          </Info>
                          <Info
                             style={{
                                width: '100px',
                                textAlign: 'center',
                             }}
                          >
                             작성일
                          </Info>
                          <Info
                             style={{
                                width: '40px',
                                textAlign: 'center',
                             }}
                          >
                             도움
                          </Info>
                          <Info
                             style={{
                                width: '80px',
                                textAlign: 'center',
                             }}
                          >
                             조회
                          </Info>
                       </tr>
                    </thead>

                    <Tbody
                       onClick={() => {
                          setModal(!modal);
                       }}
                    >
                      
                       {reviewList.map((val, i) => {
                          return (
                             <TbodyTr>
                                <td
                                   style={{
                                      width: '70px',
                                      textAlign: 'center',
                                   }}
                                >
                                   {val.boardId}
                                </td>
                                <td
                                   style={{
                                      width: '592px',
                                      textAlign: 'center',
                                   }}
                                >
                                   {val.title}
                                </td>
                                <td></td>
                                <td
                                   style={{
                                      width: '100px',
                                      textAlign: 'left',
                                   }}
                                >
                                   {val.nickName}
                                </td>
                                <td
                                   style={{
                                      width: '100px',
                                      textAlign: 'center',
                                   }}
                                >
                                   {val.date}
                                </td>
                                <td
                                   style={{
                                      width: '40px',
                                      textAlign: 'center',
                                   }}
                                >
                                   {val.helped}
                                </td>
                                <td
                                   style={{
                                      width: '80px',
                                      textAlign: 'center',
                                   }}
                                >
                                   {val.view}
                                </td>
                             </TbodyTr>
                          );
                       })}
                       
                       {reviewList.map((val, i) => {
                        return (
                           <tr>
                              <td colspan={6}>{modal ? <Modal /> : ''}</td>
                           </tr>
                        );
                       })}
                    </Tbody>
                 </Table>
                 {/* <div>
              {post_list.map((item, idx) => {
                return <Comment name={name} key={idx} {...item} />;
              })}
            </div> */}
              </Form>
           </div>
        </Container>
        <WriteBtnContainer>
           <WriteBtn onClick={goComment}>후기쓰기</WriteBtn>
        </WriteBtnContainer>
     </>
  );
};

export default Review;



const Container = styled.div`
   display: flex;
   width: 1000px;
   margin: 50px auto;
   padding-top: 20px;
`;

const Form = styled.form`
  font-weight: 400;
  letter-spacing: 0;
`;

const Table = styled.table`
   width: 100%;
   height: 65.8px;
   justify-content: space-between;
   align-items: center;
   border-bottom: 1px solid #e2e2e2;
   border-top: 2px solid #522772;
   margin: 15px 0;
`;

const Info = styled.th`
  padding: 25px 0px 23px 0;
  line-height: 140%;
  letter-spacing: 0px;
  vertical-align: middle;
  font-size: 13px;
  color: #353535;
`;

const Title = styled.div`
  font-weight: 300;
  letter-spacing: 0;
  color: #4c4c4c;
  font-size: 12px;
`;

const Name = styled.h2`
  font-size: 13px;
  font-weight: 700;
  padding-bottom: 5px;
`;

const Content = styled.div`
  position: relative;
  font-weight: 200;
  letter-spacing: 0;
`;

const ContentTxt = styled.li`
   width: 100%;
`;
const Tbody = styled.tbody`
   width: 100%;
   height: 60px;
   justify-content: space-between;
   align-items: center;
   margin: 15px 0;
   border-top: 1px solid #e2e2e2;
   border-bottom: 1px solid #e2e2e2;
`;

const TbodyTr = styled.tr`
   &:hover {
      background-color: #eee;
   }
`;
const WriteBtnContainer = styled.div`
   display: block;
   width: 100px;
   height: 40px;
   text-align: center;
   background-color: #795b8f;
   border: 1px solid #5f0080;
   margin-left: 1290px;
   cursor: pointer;
`;

const WriteBtn = styled.button`
   color: #fff;
   border-style: none;
   background-color: #795b8f;
   padding: 10px;
   font-weight: 500;
   font-size: 12px;
   cursor: pointer;
`;

const ModalContainer = styled.div`
   width: 100%;
   margin: 20px;
`