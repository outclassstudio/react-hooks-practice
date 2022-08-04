import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { loginState } from "../recoil/state";
import { FlexColumnDiv } from "../styles/utility.style";

export default function Login() {
  const [isLogin, setIsLgoin] = useRecoilState(loginState);

  // const navigate = useNavigate();
  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLgoin(true);
  };

  return (
    <LoginPageContainer>
      <LoginForm as="form" onSubmit={handleSumbit}>
        <MainImage src="/main.jpg" alt="" />
        <InputBox type="text" placeholder="아이디"></InputBox>
        <InputBox type="password" placeholder="비밀번호"></InputBox>
        <LoginBtn>로그인</LoginBtn>
      </LoginForm>
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
