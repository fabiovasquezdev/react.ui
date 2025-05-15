export const UPDATE_LOADING = 'UPDATE_LOADING';

const initialState = {
    loading: {},
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LOADING:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    ...action.loading,
                },
            };
        default:
            return state;
    }
};

export default appReducer;