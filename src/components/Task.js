import PropTypes from 'prop-types';
import './Style.css';

function Task(props) {
  const { id, description } = props;
  return (
    <li id={id} className="task">
      <p className="description m-0">{description}</p>
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Task;
