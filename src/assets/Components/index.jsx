import { NewTask } from "../../components/newTask";
import { NavTabs } from "../../components/navTabs";
import { ActiveTabs } from "../../components/tabsContent/activeTabs";
import { useState } from "react";

export const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === "all") {
      return true; // Display all tasks
    } else if (activeTab === "active") {
      return !task.isChecked; // Display only active tasks
    } else if (activeTab === "completed") {
      return task.isChecked; // Display only completed tasks
    }
    return true;
  });

  const addTodo = (todo) => {
    setTasks([...tasks, { task: todo, isChecked: false }]);
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <NewTask addTodo={addTodo}></NewTask>
                {/* Tabs navs */}
                <NavTabs activeTab={activeTab} setActiveTab={setActiveTab}></NavTabs>
                {/* Tabs navs */}

                {/* Tabs content */}

                {filteredTasks.map((value, index) => {
                  return <ActiveTabs task={value} key={index}></ActiveTabs>;
                })}

                {/* Tabs content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default TodoApp;
