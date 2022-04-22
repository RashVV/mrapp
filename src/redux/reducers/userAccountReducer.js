const initialState = {
  accountResponse: {},
  isAuthorized: false
};
export function userAccountReducer(state = initialState, action) {
  switch (action.type) {
  case 'authorized':
    return {...state, isAuthorized: true, accountResponse: action.payload};
  case 'not_authorized':
    return {...state, isAuthorized: false};
  default:
    return {...state};
  }
}

