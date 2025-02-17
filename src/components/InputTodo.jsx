import useRefInput from "../hooks/useTodos";

function InputTodo() {
    const { inputRef, getInputValue } = useRefInput();
    
    return (
        <>
            <input ref={inputRef}/>
            <button onClick={getInputValue}>추가</button>
        </>
    )
}

export default InputTodo;