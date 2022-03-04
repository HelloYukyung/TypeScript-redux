import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initialState = 0;

// type Action = {
//   type: string;
//   payload?: number | undefined;
// }; => not good: bankrupt는 payload를 갖지 않음

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state + action.payload;
    case ActionType.WITHDRAW:
      return state - action.payload;
    case ActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default reducer;
