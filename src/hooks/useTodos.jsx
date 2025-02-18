import { useRef } from "react";

const useRefInput = () => {
  const inputRef = useRef(null);

  const getInputValue = () => {
    if (inputRef.current) {
      return inputRef.current.value || ""; // undefined 방지
    }
    return ""; // `inputRef.current`가 없으면 빈 문자열 반환
  };

  return { inputRef, getInputValue };
};

export default useRefInput;
