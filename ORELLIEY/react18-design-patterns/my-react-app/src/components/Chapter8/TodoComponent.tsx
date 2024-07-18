import {
  FC,
  useState,
  useEffect,
  ChangeEvent,
  useMemo,
  useCallback
} from "react";
import TodoList from "./TodoList";
import { Todo } from "./TodoList";

const initialTodos: Todo[] = [
  { id: 1, task: "go shopping" },
  { id: 2, task: "pay electricity bill" }
];

const TodoComponent: FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>(initialTodos);
  const [task, setTask] = useState<string>("");
  const [term, setTerm] = useState<string>("");

  useEffect(() => {
    console.log("Rendering <App />'");
  });

  const handleSearch = () => {
    setTerm(task);
  };

  const filteredTodoList = useMemo(
    () =>
      todoList.filter((todo: Todo) => {
        console.log("Filtering...");
        return todo.task.toLowerCase().includes(term.toLowerCase());
      }),
    [term, todoList]
  );

  const handleCreate = () => {
    const newTodo = {
      id: Date.now(),
      task
    };
    setTodoList([...todoList, newTodo]);
    setTask("");
  };

  const handleDelete = useCallback(
    (taskId: number) => {
      const newTodoList = todoList.filter((todo: Todo) => todo.id !== taskId);
      setTodoList(newTodoList);
    },
    [todoList]
  );

  const printTodoList = useCallback(() => {
    console.log("Changing todolist", todoList);
  }, [todoList]);

  
  useEffect(() => {
    printTodoList();
  }, [printTodoList, todoList]);

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleSearch}>Search</button>S
      <TodoList todoList={filteredTodoList} handleDelete={handleDelete} />
    </>
  );
};

export default TodoComponent;
