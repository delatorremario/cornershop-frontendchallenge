import { types } from "../../actions/types";

const initialState = {
  loading: false,
  counters: [],
  error: "",
  upSortDirection: true,
  sortBy: "counter",
  less: 0,
  greater: 0,
  showAddCounter: false
};

export default (state = initialState, action) => {
  let counters = [];
  switch (action.type) {
    case types.FETCH_COUNTERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case types.FETCH_COUNTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        counters: action.payload
      };
    case types.FETCH_COUNTERS_FAILURE:
      return {
        ...state,
        counters: [],
        loading: false,
        error: action.payload
      };
    case types.ADD_COUNTER:
      return {
        ...state,
        showAddCounter: false,
        counters: state.counters.concat([action.payload]),
        loading: false,
        error: ""
      };
    case types.INC_COUNTER:
    case types.DEC_COUNTER:
      state.counters = state.counters.map(counter => {
        if (counter.id === action.payload.id) return action.payload;
        else return counter;
      });
      return {
        ...state,
        counters: state.counters,
        loading: false,
        error: ""
      };
    case types.DELETE_COUNTER:
      state.counters.splice(
        state.counters.findIndex(i => {
          return i.id === action.payload;
        }),
        1
      );
      return {
        ...state,
        counters: state.counters,
        loading: false,
        error: ""
      };
    case types.SET_SHOW_ADD_COUNTER_FORM:
      return {
        ...state,
        showAddCounter: action.payload
      };
    default:
      return state;
  }
};
