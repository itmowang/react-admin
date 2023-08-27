import { init } from "@rematch/core";
import * as models from "./models";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
 
const persistConfig = {
  key: 'root',
  storage,
}

const store = init({
  models,
});
console.log(store);

const persistor = persistStore(store);

export default store;
