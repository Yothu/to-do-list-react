// import PropTypes from 'prop-types';
import React from 'react';

function Input() {
  const [description, setDescription] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('a:', description);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container d-flex aling-items-center">
      <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" name="taskForm" id="taskForm" className="task-form" placeholder="Add to your list..." />
      <input type="submit" />
    </form>
  );
}

// Input.propTypes = {
//   tasks: PropTypes.instanceOf(Array).isRequired,
//   addTask: PropTypes.instanceOf(Function).isRequired,
// };

export default Input;
