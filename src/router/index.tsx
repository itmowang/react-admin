import React, { Suspense, lazy, useEffect } from "react";
import routes, { flattenRoutes } from "./routes";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { checkAuth } from "./auth";
import { RouteProps } from "./route";
import PreView from "@/components/preView";
import { useSelector } from "react-redux";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const RouteLoading: React.FC = () => {

  useEffect(() => {

    const start = () => {
      NProgress.start()
    }
    const end = () => {
      NProgress.done()
    }

    start();

    return () => {
      end();
    }

  }, [])

  return null;
}

const RouterView: React.FC = () => {
  const error401 = lazy(() => import("@/components/layout/401"));
  const userStore = useSelector((state: any) => state.user);
  const menuAll = userStore?.menuAll;
  const user = userStore?.user;
  return (
    <Router>
      <Suspense fallback={<div><RouteLoading/></div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          {flattenRoutes(routes).map((route: RouteProps, index: number) => {
            if (checkAuth(route, menuAll, user) === "200") {
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
            } else if (checkAuth(route, menuAll, user) === "401") {
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
