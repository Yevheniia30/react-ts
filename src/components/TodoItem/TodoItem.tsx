import React, { FC, useState } from "react";
import { Todo } from "../../types/types";
import api from "../../services/dataApi";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  // const [completed, setCompleted] = useState(false);

  const toggleCompleted = async (params: any) => {
    const data = await api.patchTodo(params);
    return data;
  };

  return (
    <li>
      <p>{todo.title}</p>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() =>
          toggleCompleted({ id: todo.id, completed: todo.completed })
        }
      />
      <hr />
    </li>
  );
};

export default TodoItem;
