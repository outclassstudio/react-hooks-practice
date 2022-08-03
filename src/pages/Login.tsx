import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexColumnDiv } from "../styles/utility.style";

function footer() {
  return <div>못찾겠다 꾀꼬리</div>;
}

export default function Login() {
  // const navigate = useNavigate();
  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <LoginPageContainer>
      <LoginForm as="form" onSubmit={handleSumbit}>
        <MainImage src="/main.jpg" alt="" />
        <InputBox type="text" placeholder="아이디"></InputBox>
        <InputBox type="password" placeholder="비밀번호"></InputBox>
        <LoginBtn>로그인</LoginBtn>
      </LoginForm>
      {footer()}
    </LoginPageContainer>
  );
}

const LoginPageContainer = styled(FlexColumnDiv)`
  width: 100vw;
  height: 100vh;
`;

const LoginForm = styled(FlexColumnDiv)`
  gap: 5px;
`;

const MainImage = styled.img`
  width: 100px;
`;

const InputBox = styled.input``;

const LoginBtn = styled.button``;
