import React, { Suspense } from "react";
import routes from "./routes";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { checkAuth } from "./auth";
import { RouteProps } from './route'



const RouterView: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          {routes.map((route: RouteProps, index: number) => {
            // 通过后端返回path 匹配是否有当前的权限
            if (checkAuth(route)) {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component && <route.component />}
                />
              );
            } else {
              // 如果没有权限
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<div>没有权限</div>}
                />
              );
            }
          })}
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RouterView;
