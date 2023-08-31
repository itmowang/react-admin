import React, { Suspense, lazy } from "react";
import routes, { flattenRoutes } from "./routes";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { checkAuth } from "./auth";
import { RouteProps } from "./route";
import PreView from "@/components/preView";
import { useSelector } from "react-redux";

const RouterView: React.FC = () => {
  const error401 = lazy(() => import("@/components/layout/401"));
  const userStore = useSelector((state: any) => state.user);
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          {flattenRoutes(routes).map((route: RouteProps, index: number) => {
            if (checkAuth(route) === "200") {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    !userStore.isLogin ? (
                      <> {route.component && <route.component />} </>
                    ) : (
                      <PreView Components={route.component} />
                    )
                  }
                />
              );
            } else if (checkAuth(route) === "401") {
              console.log(checkAuth(route));

              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<PreView Components={error401} />}
                  />
              );
            } else {
              <Route
                key={route.path}
                path={route.path}
                element={<div>404没有该页面</div>}
              />;
            }

            // 通过后端返回path 匹配是否有当前的权限
            // if (checkAuth(route)=="200") {
            //   return (
            //     <Route
            //       key={route.path}
            //       path={route.path}
            //       element={ !userStore.isLogin?<> {route.component && <route.component />} </> : <PreView Components={route.component}/>}
            //     />
            //   );
            // } else {
            //   // 如果没有权限
            //   return (
            //     <Route
            //       key={route.path}
            //       path={route.path}
            //       element={<div>没有权限</div>}
            //     />
            //   );
            // }
          })}
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RouterView;
