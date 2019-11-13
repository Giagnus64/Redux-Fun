const initialState = {
  balance: 0
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WITHDRAW':
      return{...state, balance: state.balance - action.amount}
    case 'DEPOSIT':
      return {...state, balance: state.balance + action.amount}
    default:
      return state
  }
}

export default rootReducer;