// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_VALUE = {
  email: '',
};

function user(state = INITIAL_VALUE, action) {
  switch (action.type) {
  case 'USER_LOGIN': return { ...state, email: action.payload.state };
  default:
    return state;
  }
}

export default user;
