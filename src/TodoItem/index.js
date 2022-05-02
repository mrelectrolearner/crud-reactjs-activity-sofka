import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      >
        <input type="checkbox" checked={props.completed} onChange={props.onComplete} ></input>
      </span>
      <label className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </label>
      <label className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        due date:{props.dueDate}
      </label>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        [X]
      </span>
    </li>
  );
}

export { TodoItem };
