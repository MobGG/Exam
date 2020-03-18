const initialState = {
    historyArray: [],
};

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'clear':
            return state;
        default:
            return state;
    }
};