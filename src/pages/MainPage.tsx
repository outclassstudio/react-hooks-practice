import { useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { textSelector, textState } from "../recoil/state";
import Layout from "./Layout";

export default function MainPage() {
  const [text, setText] = useRecoilState(textState);
  const textLength = useRecoilValue(textSelector);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    inputRef.current?.focus();
  };

  const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <Layout>
      <>
        <div>{textLength}</div>
        <MainDiv>{text}</MainDiv>
        <MainTextArea onChange={handleTextarea} value={text} />
        <input ref={inputRef} />
        <button onClick={handleButtonClick}>Clear</button>
      </>
    </Layout>
  );
}

const MainDiv = styled.div``;
const MainTextArea = styled.textarea``;
