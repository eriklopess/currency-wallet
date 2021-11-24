import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrencySelect extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="currency">
        Moedas:
        <select
          name="currency"
          id="currency"
          data-testid="currency-input"
          onChange={ handleChange }
        >
          <option value="USD">USD</option>
          <option value="CAD">CAD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="ARS">ARS</option>
          <option value="BTC">BTC</option>
          <option value="LTC">LTC</option>
          <option value="JPY">JPY</option>
          <option value="CHF">CHF</option>
          <option value="AUD">AUD</option>
          <option value="CNY">CNY</option>
          <option value="ILS">ILS</option>
          <option value="ETH">ETH</option>
          <option value="XRP">XRP</option>
        </select>
      </label>
    );
  }
}

CurrencySelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CurrencySelect;
