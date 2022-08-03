import styled from "styled-components";
import { FlexColumnDiv } from "../styles/utility.style";

interface Props {
  children: JSX.Element;
  text?: string;
}

export default function Layout({ children, text }: Props) {
  return <MainContainer>{children}</MainContainer>;
}

const MainContainer = styled(FlexColumnDiv)`
  width: 100vw;
  height: 100vh;
`;
