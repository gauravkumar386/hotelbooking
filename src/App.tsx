import { PrimeReactProvider } from "primereact/api";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import store from "./redux/store"; // Import your Redux store
import "./App.scss";
import Login from "./molecules/Login";

function App() {
  const value: any = {
    appendTo: "self",
    unstyled: false,
  };

  return (
    <Provider store={store}>
      <PrimeReactProvider value={value}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </Provider>
  );
}

export default App;
