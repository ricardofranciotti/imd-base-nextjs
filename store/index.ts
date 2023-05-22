import { configureStore } from '@reduxjs/toolkit';

import leftBarReducer from './reducer-leftbar';
import idMenuReducer from './reducer-idmenu';
import infobarReducer from './reducer-infobar';
import showModalReducer from './reducer-modalquestion';
import userLoggedReducer from './reducer-logged';

export const store = configureStore({
  reducer: {
    leftbarstate: leftBarReducer,
    idmenustate: idMenuReducer,
    infobar: infobarReducer,
    showmodal: showModalReducer,
    userLogged: userLoggedReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;