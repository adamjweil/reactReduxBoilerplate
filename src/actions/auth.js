import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, LOGIN_SUCCESS, LOGIN_FAIL } from "./types";


export const loadUser = () => async dispatch => {
  dispatch({
    type: USER_LOADED
  });
};

export const login = formValues => async dispatch => {
  const body = JSON.stringify(formValues);

  try {

      dispatch({
        type: LOGIN_SUCCESS,
        payload: body
      });
    } catch (err) {

      dispatch({
        type: LOGIN_FAIL,
        payload: body
      });
  }
};

export const register = formValues => async dispatch => {
  const body = JSON.stringify(formValues);

  try {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: body
    })
  } catch (err) {

    dispatch({
      type: REGISTER_FAIL,
      payload: body
    });
  }
};
