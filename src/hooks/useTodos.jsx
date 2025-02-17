import { useRef } from "react";

const useRefInput = () => {
    const inputRef = useRef(null);
    const getInputValue = () => {
        const useRefInputValue = inputRef.current.value;
        console.log('useRef input : ', useRefInputValue);
    };
    return {inputRef, getInputValue}
}

export default useRefInput;