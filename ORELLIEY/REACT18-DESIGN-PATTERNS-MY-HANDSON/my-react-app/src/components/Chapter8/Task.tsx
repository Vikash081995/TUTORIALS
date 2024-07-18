import { FC, useEffect, memo } from "react";
interface Props {
  id: number;
  task: string;
  handleDelete: (id: number) => void;
}
const Task: FC<Props> = memo(({ id, task, handleDelete }) => {
  useEffect(() => {
    console.log("Rendering <Task />", task);
  });
  return (
    <li>
      {task}
      <button onClick={() => handleDelete(id)}>X</button>
    </li>
  );
});
export default Task;
