import PropTypes from "prop-types"; 

const TodoItem = ({ todo }) => {
    return <li>
            <span></span>
            {todo.content}
            <span></span>
            <span></span>
        </li>;
};

// `TodoItem`에 대한 `PropTypes` 추가
TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
};

export default TodoItem;
