// Coloque aqui suas actions

export const user = (state) => ({ type: 'USER_LOGIN', payload: { state } });

export const walletSendExpense = (state) => (
  { type: 'ADD_EXPENSE', payload: { ...state } });

export const THUNK_SUCCESS = (json) => ({ type: 'SUCCESS', payload: json });

export const THUNK_ERROR = (error) => ({ type: 'FAIL', payload: error });

export const REQUEST_DATA = () => ({ type: REQUEST_DATA });

export function API_THUNK() {
  return (dispatch) => {
    dispatch(REQUEST_DATA());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(THUNK_SUCCESS(currencies)));
  };
}
