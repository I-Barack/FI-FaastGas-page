import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="max-w-[1240px] ">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>


  //   <div>
  //     <Landing />
  //     <Login />
  //     <Signup />
  //   </div>
  );
}

export default App;
