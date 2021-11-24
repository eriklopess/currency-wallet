// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_VALUE = {
  expenses: [],
  totalValue: 0,
};

function wallet(state = INITIAL_VALUE, action) {
  switch (action.type) {
  case 'ADD_EXPENSE': return { ...state,
    expenses: [...state.expenses, action.payload] };
  case 'SUCCESS': return { ...state,
    currencies: action.payload,
  };
  case 'FAIL': return { error: action.payload };
  default:
    return state;
  }
}

export default wallet;
