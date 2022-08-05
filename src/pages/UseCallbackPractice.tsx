import styled from "styled-components";
import ApplyUseCallback from "../components/useCallback/ApplyUseCallback";
import NoUseCallback from "../components/useCallback/noUseCallback";
import { FlexDiv } from "../styles/utility.style";
import Layout from "./Layout";

export default function UseCallbackPractice() {
  return (
    <Layout>
      <UseCallbackContainer>
        <NoUseCallback />
        <ApplyUseCallback />
      </UseCallbackContainer>
    </Layout>
  );
}

const UseCallbackContainer = styled(FlexDiv)`
  width: 100vw;
  height: 100vh;
`;
