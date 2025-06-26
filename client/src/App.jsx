// App.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./mockdata/appStore";

import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const { pathname } = useLocation();
  const isLoginPage = pathname === "/"  ;
  const isSignuppage =pathname==="/signup";


  return (
    <Provider store={appStore}>
      {/* only show on non-login pages */}
      {!isLoginPage && !isSignuppage&& <Header />}

      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>

      {!isLoginPage && !isSignuppage && <Footer />}
    </Provider>
  );
}

export default App;
