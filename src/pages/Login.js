import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { user } from '../actions/index';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.verifyEmail = this.verifyEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  verifyEmail() {
    const { email, password } = this.state;
    const MIN_PASSWORD_LENGTH = 6;
    const emailValidation = /\S+@\S+\.\S+/; // Source: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const isValidEmail = emailValidation.test(email);
    const isValidPassword = password.length >= MIN_PASSWORD_LENGTH;
    const allIsValid = isValidEmail && isValidPassword;
    return !allIsValid;
  }

  handleClick() {
    const { email } = this.state;
    const { history, userSendInfo } = this.props;
    userSendInfo(email);

    return history.push('/carteira');
  }

  render() {
    return (
      <main>
        <label htmlFor="emailInput">
          Email
          <input
            type="email"
            data-testid="email-input"
            onChange={ this.handleChange }
            id="emailInput"
            name="email"
          />
        </label>
        <label htmlFor="passwordInput">
          Password
          <input
            data-testid="password-input"
            type="password"
            minLength="6"
            onChange={ this.handleChange }
            id="emailInput"
            name="password"
          />
        </label>
        <button
          type="button"
          disabled={ this.verifyEmail() }
          onClick={ this.handleClick }
        >
          Entrar

        </button>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userSendInfo: (state) => dispatch(user(state)),
});

Login.propTypes = {
  userSendInfo: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
