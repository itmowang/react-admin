import React from "react";
import ReactDOM from "react-dom/client";
import RouteView from "@/router/index";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "@/store/index";
import { Provider } from "react-redux";
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/lib/integration/react";
 
// mock
import '@/mock/index' 
// 全局css
import "./styles/style.less";

// 持久化管理
const persistor = getPersistor();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

root.render(
  <div className="main">
    <Provider store={store}>
    <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#00b96b",
                borderRadius: 2,
              },
            }}
          >
            <RouteView></RouteView>
          </ConfigProvider>
        </QueryClientProvider>
        </PersistGate>
    </Provider>
  </div>
);
