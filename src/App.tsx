import React from "react";
import { PrimeReactProvider } from "primereact/api";
import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HotelSelection from "./components/HotelSelection";
import CustomLayout from "./shared/CustomLayout";

function App() {
  const value: any = {
    appendTo: "self",
    unstyled: false,
  };
  return (
    <PrimeReactProvider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<CustomLayout />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;
