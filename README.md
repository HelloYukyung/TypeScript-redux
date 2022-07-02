# redux

TypeScript with react redux

## Installed

```
    "@types/react-redux": "^7.1.23",
    "@types/redux": "^3.6.0",
    "@types/redux-thunk": "^2.1.0",
    "react-redux": "^7.2.6",
    "react-thunk": "^1.0.0",
    "redux": "^4.1.2",
    "redux-thunk": "^2.4.1",
```

## Learned

![image](https://user-images.githubusercontent.com/49505843/156712866-f588ef7f-cf2d-49d3-86ea-d29a478025dc.png)


### ActionType

```ts
export enum ActionType {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
  BANKRUPT = "bankrupt",
}
```

ActionType을 설정해 둠으로서 오타 에러 방지

### actionCreator의 type설정

```ts
// ../action/index.ts
import { ActionType } from "../action-types";

interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}
interface withdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}
interface bankruptAction {
  type: ActionType.BANKRUPT;
}

export type Action = DepositAction | withdrawAction | bankruptAction;
```

```ts
// ../action-creators/index.ts
export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
    });
  };
};
```

위와 같이 설정

```ts
type Action = {
  type: string;
  payload?: number;
};
```

좋지 않은 type설정의 예 => bankrupt는 payload 값이 없기 때문

### reducer의 type설정

```ts
// ../reducers/index.ts
import { combineReducers } from "redux";
import bankReducer from "./bankReducer";

const reducers = combineReducers({
  bank: bankReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
```

```ts
// app.tsx
const state = useSelector((state: State) => state.bank);

console.log(state);
```

app.tsx에서 `state.bank`를 가져올 때, `state`의 type은 `ReturnType<typeof reducers>`  
(ReturnType: 특정 함수의 반환 타입을 추출해내는 제네릭 타입)
