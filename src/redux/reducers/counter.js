import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from '../actions/counter';
const initialState = {
    count: 0
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER: return { ...state, count: action.payload };
        case DECREMENT_COUNTER: return { ...state, count: action.payload };
        case RESET_COUNTER: return { ...state, count: action.payload };
        default: return state;
    }
}

export default counter;