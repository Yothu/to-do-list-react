import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TasksContainer from './components/TasksContainer';
import './components/Style.css';

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [id, setId] = React.useState(1);

  const addTask = (newDescription, newId) => {
    tasks.push({
      description: newDescription,
      id: newId,
    });
    setTasks(tasks);
  };

  const handleSubmit = (event, description) => {
    event.preventDefault();
    addTask(description, id);
    setId(id + 1);
  };

  return (
    <>
      <div className="todo-list whole-page">
        <div className="task-outer-container">
          <Header />
          <Input handleSubmit={handleSubmit} />
          <TasksContainer tasks={tasks} />
        </div>
      </div>
    </>
  );
}

export default App;
