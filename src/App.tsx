import React from "react";
import { PrimeReactProvider } from "primereact/api";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  const value: any = {
    appendTo: "self",
    unstyled: false,
  };
  return (
    <PrimeReactProvider value={value}>
      <div className="App">
        <HomePage />
      </div>
    </PrimeReactProvider>
  );
}

export default App;
