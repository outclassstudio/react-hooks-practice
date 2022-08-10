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
      React Hooks Practice
      <NormalBtn onClick={(e) => handleButtonClick(e, "/usecallback")}>
        useCallback
      </NormalBtn>
    </MainDiv>
  );
}

const MainDiv = styled(FlexColumnDiv)`
  font-size: 25px;
  font-weight: bold;
  gap: 15px;
  height: 100vh;
  width: 100vw;
`;
const NormalBtn = styled.button`
  height: 50px;
  width: 250px;
  font-size: 18px;
`;
