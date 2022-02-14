import PropTypes from 'prop-types';
import Task from './Task';
import './Style.css';

function TasksContainer(props) {
  const { tasks } = props;

  return (
    <ul className="task-inner-container">
      {
        tasks.map(
          (task) => (
            <Task key={task.id} id={task.id} description={task.description} />
          ),
        )
      }
    </ul>
  );
}

TasksContainer.propTypes = {
  tasks: PropTypes.instanceOf(Array).isRequired,
  // tasks.map: PropTypes.instanceOf(Function).isRequired,
};

export default TasksContainer;
