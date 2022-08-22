import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexDiv } from "../styles/utility.style";

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Menu onClick={() => navigate("/")}>홈으로</Menu>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(FlexDiv)`
  width: 100vw;
  background-color: black;
  color: white;
  height: 50px;
`;

const Menu = styled.div`
  font-weight: bold;
  cursor: pointer;
`;
