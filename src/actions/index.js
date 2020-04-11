import { types } from "./types";
import axios from "axios";

const url_base = "http://localhost:3001";

export const fetchCounters = () => async dispatch => {
  await axios
    .get(`${url_base}/api/v1/counters`)
    .then(res => {
      dispatch({
        type: types.GET_COUNTERS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
