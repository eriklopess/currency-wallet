import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { wallet: { expenses } } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {
          expenses.map((element, i) => {
            const { value, description, tag, method, currency, exchangeRates } = element;
            return (
              <tr key={ i }>
                <td>
                  { description }
                </td>
                <td>
                  { tag }
                </td>
                <td>
                  { method }
                </td>
                <td>
                  { value }
                </td>
                <td>
                  { exchangeRates[currency].name }
                </td>
                <td>
                  { Number(exchangeRates[currency].ask).toFixed(2) }
                </td>
                <td>
                  { exchangeRates[currency].ask * value}
                </td>
                <td>
                  Real
                </td>
              </tr>);
          })
        }
      </table>
    );
  }
}
const mapStateToProps = (state) => ({ wallet: state.wallet });

Table.propTypes = {
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Table);
