import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/reducer";
import "./inputcomponent.css";

export const InputComponent = (props: any) => {
  const todolist = useSelector((state: any) => state.todolist);
  const dispatch = useDispatch();

  const [taskname, setTaskname] = useState<string>("");
  const [filtervalue, setFilterValue] = useState<string>("");

  //================================================

  useEffect(() => {}, [todolist]);
  const onChangeTaskName = (event: any) => {
    setTaskname(event.target.value);
  };

  //=================================================

  const onClickAdd = () => {
    if (taskname) {
      dispatch(
        addTask({
          id: todolist[todolist.length - 1]?.id
            ? todolist[todolist.length - 1].id + 1
            : 1,
          taskname: taskname,
          status: "Pending",
          checked: false,
        })
      );
      setTaskname("");
    } else {
      alert("You cannot add empty");
    }
  };

  const onChangeFilter = (event: any) => {
    setFilterValue(event.target.value);
    if (event.target.value !== "All") {
      props.selectFilter(
        todolist.filter((item: any) => item.status === event.target.value)
      );
    } else {
      props.selectFilter(todolist);
    }
  };

  //================================================

  return (
    <div className="taskinput_container">
      <input
        className="taskinput_box"
        type="text"
        onChange={onChangeTaskName}
        value={taskname}
        placeholder="Add task name"
      />
      <button className="taskadd_btn" onClick={onClickAdd}>
        Add
      </button>
      <select
        className="taskinput_dropdown"
        value={filtervalue}
        onChange={onChangeFilter}
      >
        <option value="" disabled>
          Select a filter
        </option>
        <option value={"All"}>All</option>
        <option value={"Pending"}>Pending</option>
        <option value={"Completed"}>Completed</option>
      </select>
    </div>
  );
};
