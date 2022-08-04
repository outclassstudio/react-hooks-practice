import { atom, selector } from "recoil";

export const loginState = atom({
  key: "loginState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const textState = atom({
  key: "textState",
  default: "안녕?",
});

export const textSelector = selector({
  key: "textSelector",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});
