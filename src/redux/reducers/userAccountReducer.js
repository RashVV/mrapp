const initialState = {
  accountResponse: {},
  isAuthorized: false,
  isError: false,
  errorText: null
};
export function userAccountReducer(state = initialState, action) {
  switch (action.type) {
  case 'authorized':
    return {...state, isAuthorized: true, isError: false, errorText: null, accountResponse: action.payload};
  case 'not_authorized':
    return {...state, isAuthorized: false};
  case 'logout':
    return {...state, isAuthorized: false};
  case 'loginFailure':
    return {...state, isAuthorized: false, isError: true, errorText: action.payload};
  case 'errorReset':
    return {...state, isError: false, errorText: null};
  default:
    return {...state};
  }
}

