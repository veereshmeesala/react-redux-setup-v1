export const INCREMENT_COUNTER="INCREMENT_COUNTER";
export const DECREMENT_COUNTER="DECREMENT_COUNTER";
export const RESET_COUNTER="RESET_COUNTER";


export const increaseCounter = (count) => {
    return async (dispatch) => {
        dispatch({ type: INCREMENT_COUNTER, payload: count })
    }
}

export const decreaseCounter = (count) => {
    return async (dispatch) => {
        dispatch({ type: DECREMENT_COUNTER, payload: count })
    }
}

export const resetCounter = (count) => {
    return async (dispatch) => {
        dispatch({ type: RESET_COUNTER, payload: count })
    }
}