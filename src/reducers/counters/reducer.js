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
  switch (action.type) {
    case types.FETCH_COUNTERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
        less: 0,
        greater: 0
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
      const arrayOfObjects = state.counters.filter(
        obj => obj.id !== action.payload
      );
      return {
        ...state,
        counters: arrayOfObjects,
        loading: false,
        error: ""
      };
    case types.SET_SHOW_ADD_COUNTER_FORM:
      return {
        ...state,
        showAddCounter: action.payload
      };
    case types.SET_SORT_BY:
      let sortBy = action.payload;
      let upSortDirection;

      if (state.sortBy !== action.payload) {
        sortBy = action.payload;
        upSortDirection = true;
      } else {
        upSortDirection = !state.upSortDirection;
      }

      return {
        ...state,
        sortBy,
        upSortDirection
      };
    case types.SET_LESS:
      return {
        ...state,
        less: action.payload
      };
    case types.SET_GREATER:
      return {
        ...state,
        greater: action.payload
      };
    case types.SET_FILTER:
      let { counters, less, greater } = state;
      if (action.payload === "less") {
        counters = counters.filter(counter => counter.count < Number(less));
      } else {
        counters = counters.filter(counter => counter.count > Number(greater));
      }

      console.log("counters", counters);
      return {
        ...state,
        counters
      };
    case types.CLEAR_FILTERS:
      return {
        ...state,
        less: 0,
        greater: 0
      };

    default:
      return state;
  }
};
