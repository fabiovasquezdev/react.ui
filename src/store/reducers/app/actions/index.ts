import { UPDATE_LOADING } from "..";

export const startLoading = (identifier) => ({
    type: UPDATE_LOADING,
    loading: { [identifier]: true },
});

export const endLoading = (identifier) => ({
    type: UPDATE_LOADING,
    loading: { [identifier]: false },
});