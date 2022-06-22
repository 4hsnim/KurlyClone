import React, { useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import{ useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useParams,useLocation } from "react-router";
import detail, {getDetail} from '../../redux/modules/detail'
import { BiMinus, BiPlus } from 'react-icons/bi';

const Detail = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const [num, setNum] = useState(1);
    const [price, setPrice] = useState();
    // const [sum, setSum] = useState();
    const sum = price * num; 
    const total = sum.toLocaleString('ko-KR');
 const ItemList = [
    {
       brand: '벨지오이오소',
       title: '모짜렐라로그',
       url: 'https://img-cf.kurly.com/banner/main/pc/img/c02c5036-df56-4cc8-b2b7-6e997e644008',
       content: '덩어리째로 만나보는 생 모짜렐라의 신선함',
       price: '15,900',
       delivery: '샛별배송/택배배송',
       sum: '15900'
    },
 ];


  const min = () => {
    if (num <= 1) {
      window.alert("최소 주문 수량은 1개입니다.");
    } else setNum(parseInt(num) - 1);
  };

  const max = () => {
    if(num >= 10){
      window.alert("최대 주문 수량은 10개입니다.")
    } else  setNum(parseInt(num) + 1);
  };

  React.useEffect (() => {
    dispatch(getDetail())
  },[])

  const detail_Info = useSelector((state) => state.detail.detailInfo)
  console.log(detail_Info)


  const addCart = () => {
    window.alert('장바구니에 상품을 담았습니다.');
    navigate('/');
  }


  return (
     <>
           <Section>
      {ItemList.map((val,i) => {
        return (
           <Article>
              <ImgContainer>
                 <Img
                    src="https://img-cf.kurly.com/shop/data/goods/1627632869421l0.jpg"
                    alt=""
                 />
              </ImgContainer>

              <Fix>
                 <Wrap>
                    <InfoSection>
                       <BrandName>
                     [{val.brand}] {val.title}
                       </BrandName>
                       <Content>
                        {val.content}
                       </Content>
                    </InfoSection>

                    <Price>
                       <Num>
                        {val.price}
                          <Won>원</Won>
                       </Num>
                    </Price>

                    <P>로그인 후, 회원할인가와 적립혜택이 제공됩니다.</P>

                    <Border />
                    <Description>
                       배송구분 <Txt> {val.delivery}</Txt>
                    </Description>

                    <Border />
                    <Description>
                       구매수량
                       <SectionBtn>
                          <Box>
                             <BiMinus
                                onClick={min}
                                style={{
                                   width: 20,
                                   height: 20,
                                   paddingLeft: 5,
                                }}
                             />

                             <label htmlFor="1">
                                <Input type="number" id="1" />
                                {num}
                             </label>

                             <BiPlus
                                onClick={max}
                                style={{
                                   width: 20,
                                   height: 20,
                                   paddingRight: 5,
                                }}
                             />
                          </Box>
                       </SectionBtn>
                    </Description>
                    <Border />

                    <Order>
                       <div>
                          <Total>
                             총 상품금액 :<TotalTxt>{val.sum}</TotalTxt>원
                          </Total>
                          <IconPoint>적립</IconPoint>로그인 후,회원할인가와
                          적립혜택 적용
                          <Point>
                             <WrapIcon>
                                <LikeBtn />
                                <Alert />

                                <BtnContainer>
                                   <Btn onClick={addCart}>장바구니 담기</Btn>
                                </BtnContainer>
                             </WrapIcon>
                          </Point>
                       </div>
                    </Order>
                 </Wrap>
              </Fix>
           </Article>
        );
      })}
           </Section>

     </>
  );
};

export default Detail;

const Section = styled.section`
  width: 1050px;
  margin: 50px auto;
  padding-top: 20px;
  display: flex;
`;

const IconPoint = styled.div`
  display: inline-block;
  width: 28px;
  height: 20px;
  margin-left: 315px;
  margin-right: 2px;
  border-radius: 10px;
  background-color: #ffbf00;
  font-weight: 700;
  font-size: 11px;
  color: #fff;
  line-height: 20px;
  text-align: center;
`;

const Total = styled.tr`
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: right;
`;

const TotalTxt = styled.span`
   display: flex;
   justify-content: right;
   font-weight: 900;
   font-size: 30px;
   line-height: 10px;
   margin-right: 2px;
   display: flex;
   color: #333;
   margin-bottom: 10px;
   margin-left: 15px;
`;

const Point = styled.span`
  font-size: 15px;
  display: block;
  justify-content: center;
  align-items: center;
  margin-left: 120px;
`;



const Article = styled.div`
   padding: 30px 0 20px;
   color: #333;
   letter-spacing: 0;
   display: flex;
`;

const Order = styled.table`
  margin-bottom: 10px;
  padding: 10px;
  margin-right: 210px;
`;

const Description = styled.span`
  display: flex;
  width: 900px;
  font-size: 14px;
  color: #666;
`;

const Txt = styled.span`
  color: #333;
  letter-spacing: -0.5px;
  font-size: 15px;
  margin-left: 20px;
`;

const Border = styled.div`
  border-top: 0.2px solid gray;
  width: 550px;
  opacity: 20%;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const WrapIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Price = styled.div`
  width: 560px;
`;

const Num = styled.span`
  font-weight: 500;
  font-size: 30px;
  color: #333;
`;

const Won = styled.span`
  font-weight: 500;
  font-size: 20px;
`;

const ImgContainer = styled.div`
  margin: 20px;
  padding: 50px auto;
  display: flex;
  width: 430px;
  height: 552px;
`;

const Img = styled.img`
   width: 430px;
   height: 552px;
   max-width: 100%;
`;

const P = styled.p`
  padding-top: 7px;
  font-size: 14px;
  color: #5f0080;
  line-height: 20px;
  letter-spacing: 0;
`;

const BrandName = styled.p`
   font-weight: 500;
   font-size: 24px;
   color: #333;
   margin-right: 219px;
   display: flex;
   justify-content: left;
   align-items: left;
   margin-top: 100px;
`;

const InfoSection = styled.section`
  padding: 0 0 29px 0;
`;

const Wrap = styled.div`
  margin-left: 40px;
`;

const Fix = styled.div`
  padding: 10px;
`;

const Content = styled.div`
  padding: 4px 60px 0 0;
  font-size: 14px;
  color: #999;
`;

const BtnContainer = styled.div`
   display: flex;
   width: 280px;
   height: 54px;
   border-radius: 3px;
   font-size: 0;
   text-align: center;
   background-color: #5f0080;
   margin-top: 20px;
`;

const Btn = styled.button`
  width: 432px;
  height: 56px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #fff;
  background-color: #5f0081;
  border: 1px solid #5f0081;
  cursor: pointer;
`;

const LikeBtn = styled.button`
  width: 56px;
  height: 56px;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: transparent !important;
  background: url(https://res.kurly.com/pc/service/pick/btn-itemdetail-like.svg)
    no-repeat center;
  background-size: 32px;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 10px;
`;

const Alert = styled.button`
  background: url(https://res.kurly.com/pc/service/goodsview/btn-itemdetail-restock-dim.svg)
    no-repeat center;
  background-size: 32px;
  cursor: default;
  width: 56px;
  height: 56px;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: transparent !important;
  margin-top: 20px;
  margin-right: 10px;
`;

const Input = styled.input`
  width: fit-content;
  display: none;
`;

const SectionBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  margin-left: 20px;
  width: 80px;
  height: 30px;
  border: 1px solid #dddfe1;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BtnNum = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  color: #333;
  background-color: white;
  border-radius: 4px;
  font-weight: 600;
  text-align: center;
  outline: none;
  cursor: pointer;
  font-size: 12px;
`;