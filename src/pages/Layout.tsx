import styled from "styled-components";
import Header from "../components/useCallback/Header";
import { FlexColumnDiv } from "../styles/utility.style";

interface Props {
  children: JSX.Element;
  text?: string;
}

export default function Layout({ children, text }: Props) {
  return (
    <MainContainer>
      <Header />
      {children}
    </MainContainer>
  );
}

const MainContainer = styled(FlexColumnDiv)`
  width: 100vw;
  height: 100vh;
`;
