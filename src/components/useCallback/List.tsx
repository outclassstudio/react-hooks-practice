import { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexDiv } from "../../styles/utility.style";

interface Props {
  getItems: () => number[];
}

export default function List({ getItems }: Props) {
  const [items, setItems] = useState<number[]>([]);
  const [log, setLog] = useState(-1);

  useEffect(() => {
    setItems(getItems());
    setLog((prev) => prev + 1);
    console.log("숫자가 변동되었습니다.");
  }, [getItems]);

  return (
    <ListContainer>
      <Numbers>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Numbers>
      <Log>
        컴포넌트 렌더링 횟수 <span>{log}</span>
      </Log>
    </ListContainer>
  );
}

const ListContainer = styled.div``;

const Log = styled.div`
  font-size: 16px;
  font-weight: 700;

  span {
    color: #d51717;
  }
`;

const Numbers = styled(FlexDiv)`
  gap: 10px;
  font-weight: normal;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
`;
