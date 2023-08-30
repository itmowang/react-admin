import React, { Suspense } from "react";
import routes,{flattenRoutes} from "./routes";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { checkAuth } from "./auth";
import { RouteProps } from './route';
import PreView from '@/components/preView';
import { useSelector, useDispatch } from "react-redux";;


const RouterView: React.FC = () => {
  const userStore = useSelector((state: any) => state.user);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          {flattenRoutes(routes).map((route: RouteProps, index: number) => {
            // 通过后端返回path 匹配是否有当前的权限
            if (checkAuth(route)) {
              // 
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={ !userStore.isLogin?<> {route.component && <route.component />} </> : <PreView Components={route.component}/>}
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
