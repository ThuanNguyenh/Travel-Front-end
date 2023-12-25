import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { publicRoutes } from "./routes/route";
import { DefaulLayout } from "./components/layout";
import { Fragment } from "react";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : DefaulLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page /> 
                  </Layout>
                }
              />
              // Page trở thành children của Layout
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
