import { init } from "@rematch/core";
import persistPlugin from "@rematch/persist";
import * as models from "./models"; 


const store = init({
  models,
});


export default store;
