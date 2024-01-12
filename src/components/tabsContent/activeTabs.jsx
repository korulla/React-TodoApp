import { useState } from "react";

export const ActiveTabs = ({ task }) => {
  const [isChecked, setIschecked] = useState(task.isChecked);
 

  const handleOnChange = () => {
    setIschecked((prevState) => !prevState);
  };

  return (
    <div className="tab-content" id="ex1-content">
      <div
        className="tab-pane fade show active"
        id="ex1-tabs-1"
        role="tabpanel"
        aria-labelledby="ex1-tab-1"
      >
        <ul className="list-group mb-0">
          <li
            className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
            style={{ backgroundColor: "#f4f6f7" }}
          >
            <input
              className="form-check-input me-2"
              onChange={handleOnChange}
              type="checkbox"
              // value=""
              aria-label="..."
              checked={isChecked}
              id="tasksList"
            />
            <label htmlFor="tasksList">{task.task}</label>
          </li>
          {/* Add other list items as needed */}
        </ul>
      </div>
      <div
        className="tab-pane fade"
        id="ex1-tabs-2"
        role="tabpanel"
        aria-labelledby="ex1-tab-2"
      >
        <ul className="list-group mb-0">
          {/* Add list items for the 'Active' tab */}
        </ul>
      </div>
      <div
        className="tab-pane fade"
        id="ex1-tabs-3"
        role="tabpanel"
        aria-labelledby="ex1-tab-3"
      >
        <ul className="list-group mb-0">
          {/* Add list items for the 'Completed' tab */}
        </ul>
      </div>
    </div>
  );
};
