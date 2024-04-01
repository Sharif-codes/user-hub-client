import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import searchReducer from '../features/search/searchSlice';

const searchPersistConfig = {
    key: 'search',
    storage,
  };

  const persistedSearchReducer = persistReducer(searchPersistConfig, searchReducer);

  export const store = configureStore({
    reducer: {
      search: persistedSearchReducer,
    },
  });

  export const persistor = persistStore(store);
// export default store;