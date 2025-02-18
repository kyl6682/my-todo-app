import PropTypes from 'prop-types';
import { useState } from 'react';
import useRefInput from '../hooks/useTodos';

const TodoItem = ({ todo, deleteTodo }) => {
    // 완료 되었는지 상태 관리
    const [isComlete, setIsComplete] = useState(false);
    // 수정을 위한 상태 관리
    const [isEditing, setIsEditing] = useState(false);
    const { inputRef, getInputValue } = useRefInput(); // useRef 사용

    // 수정 기능 활성화
    const handleEditClick = () => {
        setIsEditing(true);
        if (inputRef.current) {
            inputRef.current.value = todo.content;
        }
    };

    // 수정 사항 저장 기능
    const handleSaveClick = () => {
        const editValue = getInputValue();
        if (editValue.trim === '') return;
        setIsEditing(false);
    };

    // 수정 취소 기능
    const handleCancleClick = () => {
        setIsEditing(false);
    };

    // 수정 버튼
    const EditButton = () => {
        return (
            <span className="edit-button" onClick={handleEditClick}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z"
                        fill="#79747E"
                    />
                </svg>
            </span>
        );
    };

    // 삭제 버튼
    const DeleteButton = () => {
        return (
            <span
                className="delete-button"
                onClick={() => {
                    deleteTodo(todo.id);
                }}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                        fill="#79747E"
                    />
                </svg>
            </span>
        );
    };

    return (
        <>
            <li>
                <span
                    className="check-button"
                    onClick={() => setIsComplete(!isComlete)}
                >
                    {isComlete ? '☑️' : '⬜️'}
                </span>
                {isEditing ? (
                    <>
                        <input
                            className="editing-input"
                            ref={inputRef}
                            type="text"
                            placeholder="수정할 내용을 입력하세요."
                        />
                        <span className="save-button" onClick={handleSaveClick}>
                            저장
                        </span>
                        <span
                            className="cancle-button"
                            onClick={handleCancleClick}
                        >
                            취소
                        </span>
                    </>
                ) : (
                    <>
                        <span className="content">{todo.content}</span>
                        <EditButton />
                        <DeleteButton />
                    </>
                )}
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
    deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
