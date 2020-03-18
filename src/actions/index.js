import * as TYPE from '../constants/actionType';

export const setOrderForEdit = (orderObj) => async dispatch => {
    dispatch({
        type: TYPE.SET_EDIT_ORDER,
        payload: orderObj
    });
}

export const addEditedItem = (cartDetail) => async dispatch => {
    dispatch({
        type: TYPE.ADD_EDITED_ITEM,
        payload: cartDetail
    });
}

export const removeItem = (cartDetail) => async dispatch => {
    dispatch({
        type: TYPE.REMOVE_ITEM,
        payload: cartDetail,
    });
}

export const calPro = (cartDetail) => async dispatch => {
    dispatch({
        type: TYPE.CAL_PRO,
        payload: cartDetail
    });
}