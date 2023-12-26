import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
