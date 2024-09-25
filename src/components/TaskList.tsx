import { TaskItemTemplate } from "./TaskItemTemplate";
import "./tasklist.css";

export const TaskList = (props: any) => {
  //================================================

  return (
    <div className="tasklist_parent">
      {props?.data?.length > 0 ? (
        props?.data?.map((item: Object, index: number) => (
          <div className="task_item" key={index}>
            {" "}
            <TaskItemTemplate index={index} current={item} />
          </div>
        ))
      ) : (
        <div className="no_task">No Task</div>
      )}
    </div>
  );
};
