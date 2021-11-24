import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { API_THUNK, walletSendExpense } from '../../actions';
import TagSelect from './FormSelect/TagSelect';
import CurrencySelect from './FormSelect/CurrencySelect';
import MethodSelect from './FormSelect/MethodSelect';
import DescriptionInput from './Inputs/DescriptionInput';
import ValueInput from './Inputs/ValueInput';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: -1,
      value: 0,
      currency: 'USD',
      description: '',
      method: '',
      tag: '',
      exchangeRates: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
    this.getCurrencies = this.getCurrencies.bind(this);
  }

  componentDidMount() {
    const { apiResponseDispatch } = this.props;
    apiResponseDispatch();
  }

  async getCurrencies() {
    const responseAPI = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json());
    delete responseAPI.USDT;
    return responseAPI;
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  async handleClick(event) {
    event.preventDefault();
    const { id } = this.state;
    const { walletSendExpenseDispatch } = this.props;
    const ID_SUM = id + 1;
    const exchangeRates = await this.getCurrencies();
    console.log(exchangeRates);
    this.setState({ id: ID_SUM, exchangeRates });
    walletSendExpenseDispatch(this.state);
    this.setState({ value: 0 });
  }

  renderOptions() {
  }

  render() {
    const { value } = this.state;
    return (
      <form>
        <ValueInput handleChange={ this.handleChange } value={ value } />
        <DescriptionInput handleChange={ this.handleChange } />
        <CurrencySelect handleChange={ this.handleChange } />
        <MethodSelect handleChange={ this.handleChange } />
        <TagSelect handleChange={ this.handleChange } />
        <button type="submit" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  walletSendExpenseDispatch: (state) => dispatch(walletSendExpense(state)),
  apiResponseDispatch: () => dispatch(API_THUNK()),
});

const mapStateToProps = (state) => ({ wallet: state.wallet });

Form.propTypes = {
  walletSendExpenseDispatch: PropTypes.func.isRequired,
  apiResponseDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
