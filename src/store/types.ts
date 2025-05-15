import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import rootReducer from './reducers';

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
