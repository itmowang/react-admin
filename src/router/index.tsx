import React, { Suspense } from "react";
import routes from "./routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const RouterView: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route: any, index: number) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.component && <route.component />}
              />
            );
          })}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RouterView;
