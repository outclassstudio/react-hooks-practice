import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexColumnDiv } from "../styles/utility.style";

export default function MainPage() {
  const navigate = useNavigate();

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    route: string
  ) => {
    e.preventDefault();
    navigate(`${route}`);
  };

  return (
    <MainDiv>
      <SubContainer>
        React Hooks Practice
        <NormalBtn onClick={(e) => handleButtonClick(e, "/usecallback")}>
          useCallback
        </NormalBtn>
      </SubContainer>
      <SubContainer>
        React Patterns
        <NormalBtn onClick={(e) => handleButtonClick(e, "/observable")}>
          Observable
        </NormalBtn>
      </SubContainer>
    </MainDiv>
  );
}

const MainDiv = styled(FlexColumnDiv)`
  gap: 30px;
  height: 100vh;
  width: 100vw;
`;

const SubContainer = styled(FlexColumnDiv)`
  font-weight: bold;
  font-size: 25px;
  gap: 15px;
`;

const NormalBtn = styled.button`
  height: 50px;
  width: 250px;
  font-size: 18px;
`;
