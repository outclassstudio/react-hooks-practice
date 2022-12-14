import styled from "styled-components";
import { FlexColumnDiv } from "../../styles/utility.style";

export const UseCallbackDiv = styled(FlexColumnDiv)`
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  gap: 10px;
  font-size: 17px;
  font-weight: bold;
`;

export const ChangeBtn = styled.button`
  width: 200px;
  height: 30px;
`;

export const NumberWrapper = styled(FlexColumnDiv)`
  font-size: 12px;
  font-weight: 300;
  padding: 5px;
  border: 1px solid #7c7c7c;
  gap: 10px;
`;

export const NumberInput = styled.input`
  width: 192px;
  height: 25px;
`;
