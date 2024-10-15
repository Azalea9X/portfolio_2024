import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions"; // Ensure correct import path

const Task = () => {
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const authorRef = useRef(null);

  function addNewTask(event) {
    event.preventDefault();
    const task = {
      title: titleRef.current.value,
      content: contentRef.current.value,
      author: authorRef.current.value.toString()
    };

    if (task.title !== "" && task.content !== "" && task.author !== "") {
      dispatch(addTodo(task));
      titleRef.current.value = "";
      contentRef.current.value = "";
      authorRef.current.value = "";
    }
  }

  return (
    <div className="task-component">
      <div className="add-task">
        <form onSubmit={addNewTask}>
          <input
            type="text"
            placeholder="Title"
            ref={titleRef}
            className="taskInput"
          />
          <input
            type="text"
            placeholder="Content"
            ref={contentRef}
            className="taskInput"
          />
          <input
            type="text"
            placeholder="Author"
            ref={authorRef}
            className="taskInput"
          />
          <button type="submit">Add task</button>
        </form>
      </div>
    </div>
  );
};

export default Task;
