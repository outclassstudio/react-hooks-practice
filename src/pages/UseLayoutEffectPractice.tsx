import { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { FlexColumnDiv } from "../styles/utility.style";
import Layout from "./Layout";

export default function UseLayoutEffectPractice () {
  const [effect, setEffect] = useState("")
  const [name1, setName1] = useState("")
  const [position1, setPosition1] = useState("")

  const [layoutEffect, setLayoutEffect] = useState("")
  const [name2, setName2] = useState("")
  const [position2, setPosition2] = useState("")

  useLayoutEffect(() => {
    setLayoutEffect("useLayoutEffect")
    setName2("이민형")
    setPosition2("프론트엔드")
  }, [name2, position2])

  useEffect(() => {
    setEffect("useEffect")
    setName1("이민형")
    setPosition1("프론트엔드")
  }, [name1, position1])
 
  return (
    <Layout>
      <UseLayoutEffectContainer>
        <SubWrapper>
          {/* {layoutEffect} */}
          useLayoutEffect
          <div>안녕하세요 {position2} 개발자 {name2}입니다. </div>
        </SubWrapper>
        <SubWrapper>
          {/* {effect} */}
          useEffect
          <div>안녕하세요 {position1} 개발자 {name1}입니다. </div>
        </SubWrapper>
        </UseLayoutEffectContainer>
    </Layout>
  )
}

const UseLayoutEffectContainer = styled(FlexColumnDiv)`
  width: 100vw;
  height: 100vh;
  gap:15px;
`

const SubWrapper = styled(FlexColumnDiv)`
  align-items:start;
  gap: 5px;
  font-size:17px;
  font-weight:bold;
  border: 1px solid gray;
  padding: 10px;

  div {
    font-size : 15px;
    font-weight: normal
  }
`