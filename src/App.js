import React from 'react';
import TasksContainer from './components/TasksContainer';
import './components/Style.css';

const tasks = [];

function App() {
  const [newDescription, setDescription] = React.useState('');
  const [newId, setId] = React.useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    tasks.push({
      description: newDescription,
      id: newId,
    });
    setDescription('');
    setId(newId + 1);
  };

  return (
    <>
      <div className="todo-list whole-page">
        <div className="task-outer-container">
          <div className="title-container">
            <h1 className="tasks-container-title">To Do List</h1>
          </div>
          <form onSubmit={handleSubmit} className="form-container">
            <input onChange={({ target }) => setDescription(target.value)} value={newDescription} type="text" name="taskForm" id="taskForm" className="task-form" placeholder="Add to your list..." />
            <input type="submit" value="Submit" />
          </form>
          <TasksContainer tasks={tasks} />
        </div>
      </div>
    </>
  );
}

export default App;
