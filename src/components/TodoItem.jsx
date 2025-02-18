import PropTypes from "prop-types";
import { useState } from "react";
import useRefInput from "../hooks/useTodos";

const TodoItem = ({ todo, updateTodo }) => {
    // 완료 되었는지 상태 관리
    const [isComlete, setIsComplete] = useState(false);
    // 수정을 위한 상태 관리
    const [isEditing, setIsEditing] = useState(false);
    const {inputRef, getInputValue} = useRefInput();    // useRef 사용

    // 수정 기능 활성화
    const handleEditClick = () => {
        setIsEditing(true);
        if (inputRef.current) {
            inputRef.current.value = todo.content
        }
    }

    // 수정 사항 저장 기능
    const handleSaveClick = () => {
        const editValue = getInputValue();
        if(editValue.trim === '') return;
        updateTodo (todo.id, editValue);
        setIsEditing(false);
    }

    // 수정 취소 기능
    const handleCancleClick = () => {
        setIsEditing(false);
    }

  return (
    <>
        <li>
            <span onClick={() => setIsComplete(!isComlete)}>
                {isComlete ? "☑️" : "⬜️"}
            </span>
            {isEditing ? (
                <>
                    <input
                    ref={inputRef} type="text" placeholder="수정할 내용을 입력하세요."
                    />
                    <button onClick={handleSaveClick}>저장</button>
                    <button onClick={handleCancleClick}>취소</button>
                </>
            ) : (
                <>
                    <span>{todo.content}</span>
                    <span onClick={handleEditClick}>수정</span>
                </>
            )
        }
        </li>
    </>
  );
};

// `TodoItem`에 대한 `PropTypes` 추가
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default TodoItem;
