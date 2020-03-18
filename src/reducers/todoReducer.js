const initialState = {
    todoArray: [],
    filterArray: [],
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'create':
            return state;
        case 'remove':
            return state;
        case 'search':
            return state;
        default:
            return state;
    }
};