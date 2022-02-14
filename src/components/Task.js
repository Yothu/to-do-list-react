import PropTypes from 'prop-types';

function Task(props) {
  const { description, status } = props;
  return (
    <li className="task d-flex justify-content-between border border-2 border-dark">
      <input type="checkbox" className="check-box statusBox" checked={status} />
      <input type="text" className="description" value={description} />
      <img src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1644853044~hmac=4b43b987bba045a4b0119b770faab0ec" id="deleteTask" className="check-box reload-icon delete-icon" alt="delete-icon" />
    </li>
  );
}

Task.propTypes = {
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default Task;
