import { useCallback, useState } from "react";
import styled from "styled-components";
import { FlexColumnDiv, FlexDiv } from "../../styles/utility.style";
import Observer from "./Observer";

export default function ObservableMain() {
  const [status, setStatus] = useState<any>({
    alert: false,
    theme: false,
  })

  const [theme, setTheme] = useState<any> ({
    backgroundColor: "#fff",
    color: "#333",
  })


  const observerAlert = useCallback((data:any) => {
    alert("notify!");
  }, [])

  const changeTheme = useCallback((data:any) => {
    if(data.color === "#333") {
      setTheme({
        backgroundColor : "#333",
        color : "#fff"
      })
    } else {
      setTheme({
        backgroundColor: "#fff",
        color: "#333",
      })
    }
  }, [])

  const trigger = (e: React.MouseEvent<HTMLButtonElement>, data:any) => {
    e.preventDefault();
    Observer.notify(data);
  }

  const subscribe = (e: React.MouseEvent<HTMLButtonElement>, key:string, func:any) => {
    e.preventDefault();
    if(status[key]) {
      setStatus({ ...status, [key] : false })
      Observer.unsubscribe(func);
    } else {
      setStatus({ ...status, [key] : true })
      Observer.subscribe(func);
    }   
  }

  return (
    <ObservableContainer theme={theme}>
      Observer 패턴
      <SubDiv>
        <Status>{status.alert ? "구독중" : "구독안함"}</Status>
        얼럿
        <button onClick={(e) => subscribe(e, "alert", observerAlert)}>{status.alert ? "구독취소" : "구독하기"}</button>
      </SubDiv>
      <SubDiv>
        <Status>{status.theme ? "구독중" : "구독안함"}</Status>
        테마
        <button onClick={(e) => subscribe(e, "theme", changeTheme)}>{status.theme ? "구독취소" : "구독하기"}</button>
      </SubDiv>
      <button onClick={(e) => trigger(e, theme)}>전파</button>
    </ObservableContainer>
  )
}

const ObservableContainer = styled(FlexColumnDiv)`
  width : 100vw;
  height : 100vh;
  gap : 20px;
  font-size: 17px;
  font-weight: bold;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color}
`

const SubDiv = styled(FlexDiv)`
  gap: 15px;
  font-size: 15px;
  font-weight: normal
`

const Status = styled.div``