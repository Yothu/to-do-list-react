import React from 'react';
import PropTypes from 'prop-types';

function Input({ handleSubmit }) {
  const [description, setDescription] = React.useState('');

  const hSubmit = (event, description) => {
    handleSubmit(event, description);
    setDescription('');
  };

  return (
    <>
      <form onSubmit={(event) => hSubmit(event, description)} className="form-container">
        <input onChange={({ target }) => setDescription(target.value)} value={description} type="text" name="taskForm" id="taskForm" className="task-form" placeholder="Add to your list..." />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

Input.propTypes = {
  handleSubmit: PropTypes.instanceOf(Function).isRequired,
};

export default Input;
