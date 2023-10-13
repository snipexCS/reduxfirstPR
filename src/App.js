import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Main from "./components/Main/Main";
import FilteredProducts from "./components/FilteredPRoducts/FilteredProducts";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/filteredproducts/:type"
            element={<FilteredProducts />}
          />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
