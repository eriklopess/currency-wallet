import React from 'react';
import PropTypes from 'prop-types';

function DescriptionInput(props) {
  const { handleChange } = props;
  return (
    <label htmlFor="descriptionInput">
      Descrição:
      <input
        type="text"
        name="description"
        data-testid="description-input"
        onChange={ handleChange }
        id="descriptionInput"
      />
    </label>
  );
}

DescriptionInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default DescriptionInput;
