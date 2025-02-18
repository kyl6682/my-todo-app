import PropTypes from "prop-types"; 
import { useState } from "react";


const TodoItem = ({ todo, updateTodo }) => {
    return <li>
            <CheckTodo />
            {todo.content}
            <EditTodo todo = {todo} updateTodo={updateTodo}/>
            <DeleteTodo />
        </li>;
};

// `TodoItem`에 대한 `PropTypes` 추가
TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
    updateTodo: PropTypes.func.isRequired, 
};

const CheckTodo = () => {
    const [isComplete, setIsComplete] = useState(false);

    return (
        <span onClick={() => setIsComplete(!isComplete)}>{isComplete? '☑️' : '⬜️'}</span>
    )
}

const EditTodo= ({todo, updateTodo}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(todo.content);

    const handleEditClick = () => { 
        // 수정 버튼을 누르면 편집 모드 활성화
        setIsEditing(true);
    }

    const handleSaveClick = () => {
        if(editValue.trim() === '') return; // 빈 값 방지
        updateTodo(todo.id, editValue);
        setIsEditing(false);
    }

    return (
        <span onClick={handleEditClick}>수정</span>
    )
}

const DeleteTodo= () => {
    return (
        <span>삭제</span>
    )
}

export default TodoItem;
