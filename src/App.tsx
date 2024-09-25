import { useEffect, useState } from "react";
import { useSelector, UseSelector } from "react-redux";
import { TaskList } from "./components/TaskList";
import { InputComponent } from "./components/InputComponent";
import { tododata } from "./datasource/constants";
import "./styles.css";

export default function App() {
  const todolist = useSelector((state: any) => state.todolist);

  const [list, setList] = useState();

  //================================================

  useEffect(() => {
    setList(todolist);
  }, [todolist]);

  //================================================

  const onSelectFilter = (filterlist: any[]) => {
    setList(filterlist);
  };

  //================================================

  return (
    <div className="App">
      <InputComponent selectFilter={onSelectFilter} />
      <TaskList data={list} />
    </div>
  );
}
