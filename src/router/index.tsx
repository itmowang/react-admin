import React, { Suspense } from "react";
import routes from "./routes";
import { BrowserRouter as Router, Route, Routes,useNavigate } from "react-router-dom";

const RouterView: React.FC = () => {
  // const navigate = useNavigate()
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
          <Route  path="*" element={<div>123</div>} action={ async ()=>{
            setTimeout(()=>{
              console.log(12332123);
              
            },3000)
          }} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RouterView;
