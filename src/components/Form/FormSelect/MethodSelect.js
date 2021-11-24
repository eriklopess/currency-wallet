import React from 'react';
import PropTypes from 'prop-types';

function MethodSelect(props) {
  const { handleChange } = props;
  return (
    <label htmlFor="method">
      Método de Pagamento:
      <select
        name="method"
        onChange={ handleChange }
        id="method"
        data-testid="method-input"
      >
        <option
          type="radio"
          name="method"
          id="moneyMethodInput"
          value="Dinheiro"
        >
          Dinheiro
        </option>
        <option
          type="radio"
          name="method"
          value="Cartão de crédito"
          id="debitCardMethodInput"
        >
          Cartão de crédito
        </option>
        <option
          type="radio"
          name="method"
          value="Cartão de débito"
          id="creditCardMethodInput"
        >
          Cartão de débito
        </option>
      </select>
    </label>
  );
}

MethodSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default MethodSelect;
