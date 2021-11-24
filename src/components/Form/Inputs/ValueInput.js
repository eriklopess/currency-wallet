import React from 'react';
import PropTypes from 'prop-types';

function ValueInput(props) {
  const { handleChange, value } = props;
  return (
    <label htmlFor="valueInput">
      Valor:
      <input
        type="number"
        name="value"
        data-testid="value-input"
        onChange={ handleChange }
        value={ value }
        id="valueInput"
      />
    </label>
  );
}

ValueInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ValueInput;
