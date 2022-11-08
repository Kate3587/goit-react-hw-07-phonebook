// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './contacts/contactsSlice';
// import filterReducer from './filter/filterSlice';
// import {
//   // persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const myMiddleware = store => next =>  action => {
//   console.log (action)
// }

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     myMiddleware
//     }),
    
// });

// export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

