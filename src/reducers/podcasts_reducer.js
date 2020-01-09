import { LOAD_PODCASTS } from "../actions/action_types";

export default (state = { list: [], current: null }, action) => {
  switch (action.type) {
    case LOAD_PODCASTS:
      return { list: action.payload, current: action.payload[0] };
    default:
      return state;
  }
};
