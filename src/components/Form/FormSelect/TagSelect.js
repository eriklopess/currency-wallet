import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TagSelect extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag:
        <select data-testid="tag-input" name="tag" id="tag" onChange={ handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Lazer">Lazer</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

TagSelect.propTypes = { handleChange: PropTypes.func.isRequired };

export default TagSelect;
