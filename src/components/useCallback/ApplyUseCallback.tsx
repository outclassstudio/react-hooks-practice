import { useCallback, useState } from "react";
import List from "./List";
import { ChangeBtn, NumberInput, UseCallbackDiv } from "./useCallback.style";

export default function ApplyUseCallback() {
  const [number, setNumber] = useState<number>(1);
  const [dark, setDark] = useState<boolean>(false);

  //! useCallback 적용부분
  const getItems = useCallback((): number[] => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <UseCallbackDiv theme={theme}>
      useCallback적용 컴포넌트
      <ChangeBtn onClick={() => setDark((prevDark: boolean) => !prevDark)}>
        테마 변경
      </ChangeBtn>
      <NumberInput
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <List getItems={getItems} />
    </UseCallbackDiv>
  );
}
