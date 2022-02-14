import React from 'react';
import './App.css';
import Input from './components/Input';

function App() {
  // const [tasks, addTask] = React.useState([]);

  // function setTask(value) {
  //   addTask(value);
  // }

  return (
    <>
      <div className="todo-list whole-page d-flex justify-content-center align-items-center">
        <div className="task-outer-container">
          <div className="title-container d-flex justify-content-between">
            <h1 className="tasks-container-title">Todays To Do</h1>
          </div>
          <Input />
          {/* <div className="form-container d-flex aling-items-center">
            <input type="text" name="taskForm" id="taskForm" className="task-form"
            placeholder="Add to your list..." />
            ENter button
          </div> */}
          <ul className="task-inner-container" />
          <div className="clear-container">
            <button type="button" id="clearButton" className="clear-text">Clear all completed</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
