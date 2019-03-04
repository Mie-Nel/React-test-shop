import goods from "../../data/data";

const initialState = {
  goods: goods
};

export default function goodsReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_CHECKBOX":
      return {
        ...state,
        goods: action.goods
      };
    default:
      return state;
  }
}
