import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, updateTask } from "../store/reducer";
import "./taskitemtempalte.css";
export const TaskItemTemplate = (props: any) => {
  const dispatch = useDispatch();

  const [isCheck, setIsCheck] = useState<boolean>(false);

  //================================================

  useEffect(() => {
    setIsCheck(props.current.checked);
  }, [props]);

  //================================================

  const onClickDelete = (id: number) => {
    dispatch(removeTask(id));
  };

  const onHandleCheckbox = (event: any, item: any) => {
    setIsCheck(event.target.checked);
  };

  const onClickUpdate = (id: number) => {
    dispatch(updateTask(id));
  };

  //================================================

  return (
    <div className="task_item">
      <div className="task_checkbox_container">
        {!props.current.checked && (
          <input
            className="task_checkbox"
            type="checkbox"
            checked={isCheck}
            onChange={() => onHandleCheckbox(event, props.current)}
          />
        )}
      </div>
      <div className="task_text">{props.current.taskname}</div>
      <div className={`task_text ${props.current.status}`}>
        {" "}
        {props.current.status}
      </div>
      <button
        className="task_btn"
        disabled={!isCheck}
        onClick={() => onClickUpdate(props.current.id)}
      >
        Update
      </button>
      <button
        className="task_btn"
        onClick={() => onClickDelete(props.current.id)}
      >
        Delete
      </button>
    </div>
  );
};
