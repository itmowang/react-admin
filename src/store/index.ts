import persistPlugin from "@rematch/persist";
import { init } from "@rematch/core";
import * as models from "./models"; 
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage,
  models
};

const store = init({
  plugins: [persistPlugin(persistConfig)],
});

export default store;
