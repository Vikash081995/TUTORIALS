import { revalidatePath } from "next/cache";
import React from "react";
import { createTask } from "@/utils/actions";

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
      </div>
      <button type="sbmit" className="btn btn-primary join-item">
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;
