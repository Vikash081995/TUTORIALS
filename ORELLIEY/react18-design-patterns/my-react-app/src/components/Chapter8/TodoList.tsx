import { FC, useEffect, memo } from "react";
import Task from "./Task";

export type Todo = {
  id: number;
  task: string;
};

interface Props {
  todoList: Todo[];
  handleDelete: (id: number) => void;
}

const TodoList: FC<Props> = memo(({ todoList, handleDelete }) => {
  useEffect(() => {
    console.log("Rendering <List />");
  });
  return (
    <ul>
      {todoList.map((todo: Todo) => {
        return (
          <Task
            key={todo.id}
            id={todo.id}
            task={todo.task}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
});

export default TodoList;
