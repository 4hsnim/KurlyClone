import React from 'react';
import SignUp from '../components/signup/SignUp';

const SignUpPage = () => {
   return (
      <>

         <Container>
            <Caption>회원가입</Caption>

            <Table>


               <tr>
                  <Title>아이디</Title>
                  <Sub>
                     <Input
                        type="text"
                        placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                        spellcheck="false"
                        data-ms-editor="true"
                     />
                  </Sub>
                  <Sub>
                     <BtnOutline>
                        <BtnTitle>중복확인</BtnTitle>
                     </BtnOutline>
                  </Sub>
               </tr>
               <tr>
                  <td></td>
                  <Sub>
                     <SubTxt>
                        • 6자 이상의 영문 혹은 영문과 숫자를 조합
                        <br /> • 아이디 중복확인
                     </SubTxt>
                  </Sub>
               </tr>
               <tr>
                  <Title>닉네임</Title>
                  <Sub>
                     <Input
                        type="text"
                        placeholder="닉네임을 입력해주세요"
                        spellcheck="false"
                        data-ms-editor="true"
                     />
                  </Sub>
                  <td></td>
               </tr>

               <tr>
                  <Title>비밀번호</Title>
                  <Sub>
                     <Input
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                     />
                  </Sub>
                  <td></td>
               </tr>
               <tr>
                  <Title>비밀번호확인</Title>
                  <Sub>
                     <Input
                        type="password"
                        placeholder="비밀번호를 한번 더 입력해주세요"
                     />
                  </Sub>
                  <td></td>
               </tr>
               <tr>
                  <Title>주소</Title>
                  <Sub>
                     <BtnAddress>
                        <BtnTitle>주소 검색</BtnTitle>
                     </BtnAddress>
                  </Sub>
                  <td></td>
               </tr>

               <tr>
                  <td></td>
                  <BtnContainer>
                     <BtnSignUp>
                        <BtnSignTxt>가입하기</BtnSignTxt>
                     </BtnSignUp>
                  </BtnContainer>
               </tr>
            </Table>
         </Container>

      </>
   );
};
const Container = styled.div`
   margin: 16em;
   position: relative;
   top: 40px;
`;


const Table = styled.table`
   margin: auto;
`;

const Caption = styled.h3`
   margin: 2em;
   text-align: center;
   color: #333;
   font-size: 28px;
`;

const Title = styled.td`
   width: 130px;
   height: 60px;
   font-weight: 500;
   font-size: 15px;
`;
const Sub = styled.td`
   width: 150px;
   height: 60px;
   position: relative;
   left: 10px;
   padding: 10px auto;
`

const Input = styled.input`
   width: 332px;
   height: 44px;
   margin: 5px 0;
   padding: 0 19px;
   border: 1px solid #ccc;
   border-radius: 3px;
   background-color: #fff;
   font-size: 15px;
   line-height: 20px;
   outline: none;
`;


const SubTxt = styled.p`
   position: relative;
   bottom: 5px;
   font-size: 13px;

`;

const BtnOutline = styled.button`
   display: inline-block;
   width: 120px;
   height: 44px;
   margin-left: 5px;
   vertical-align: top;
   border: 1px solid #5f0080;
   border-radius: 3px;
   background-color: #fff;
   color: #5f0080;
`;
const BtnAddress = styled.button`
   display: inline-block;
   width: 332px;
   height: 44px;
   margin-left: 3px;
   vertical-align: top;
   border: 1px solid #5f0080;
   border-radius: 3px;
   background-color: #fff;
   color: #5f0080;
`;

const BtnTitle = styled.p`
   color: #5f0080;
   font-weight: bold;
   font-size: 15px;
   margin: auto;
   align-items: center;
   justify-content: center;
`;


const BtnContainer = styled.td`
   position: relative;
   top: 50px;
   left: 12px;
`
const BtnSignUp = styled.button`
   display: block;
   overflow: hidden;
   width: 100%;
   height: 54px;
   margin: 5px 0;
   border-radius: 3px;
   text-align: center;
   border: 1px solid #5f0081;
   background-color: #5f0080;
}
`;

const BtnSignTxt = styled.span`
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   letter-spacing: -0.6px;
   font-size: 15px;
   color: #fff;
`;


export default SignUpPage;