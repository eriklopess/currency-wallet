import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.convert = this.convert.bind(this);
    this.getTotalValue = this.getTotalValue.bind(this);
  }

  getTotalValue() {
    const convert = this.convert();
    const totalValue = convert.reduce((acc, curr) => Number(acc) + Number(curr), 0);
    return totalValue.toFixed(2);
  }

  convert() {
    const { wallet: { expenses } } = this.props;
    if (expenses.lenght < 1) return 0;
    const convertedList = expenses.map((element) => {
      const { currency, value, exchangeRates } = element;
      const multiplier = Number(exchangeRates[currency].ask) * Number(value);
      return multiplier.toFixed(2);
    });
    return convertedList;
  }

  render() {
    const { user: { email } } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ this.getTotalValue() }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({ user: state.user, wallet: state.wallet });

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Header);
