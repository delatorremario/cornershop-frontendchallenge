import { types } from "./types";
import axios from "axios";

const url_base = process.env.URL_BASE || "http://localhost:3000";

export const fetchCounters = () => async dispatch => {
  dispatch({
    type: types.FETCH_COUNTERS_REQUEST
  });
  await axios
    .get(`${url_base}/api/v1/counters`)
    .then(res => {
      dispatch({
        type: types.FETCH_COUNTERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: types.FETCH_COUNTERS_FAILURE,
        payload: err.message
      });
    });
};

export const addCounter = counter => async dispatch => {
  await axios
    .post(`${url_base}/api/v1/counter`, counter)
    .then(res => {
      dispatch({
        type: types.ADD_COUNTER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
export const incCounter = counter => async dispatch => {
  await axios
    .post(`${url_base}/api/v1/counter/inc`, counter)
    .then(res => {
      dispatch({
        type: types.INC_COUNTER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
export const decCounter = counter => async dispatch => {
  await axios
    .post(`${url_base}/api/v1/counter/dec`, counter)
    .then(res => {
      dispatch({
        type: types.DEC_COUNTER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
export const deleteCounter = counter => async dispatch => {
  await axios
    .delete(`${url_base}/api/v1/counter`, {
      data: { id: counter.id }
    })
    .then(res => {
      dispatch({
        type: types.DELETE_COUNTER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
