import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { UserContextProvider } from "./context/UserContext";

const App = () => {
  return (
    <>
      <main className="w-full min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        {/* <UserContextProvider> */}
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<PrivateRoute />} />
            <Route path="/auth/*" element={<PublicRoute />} />
          </Routes>
        </BrowserRouter>
        {/* </UserContextProvider> */}
      </main>
    </>
  );
};

export default App;
