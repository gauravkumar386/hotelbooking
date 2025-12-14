import { PrimeReactProvider } from "primereact/api";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import store from "./redux/store"; // Import your Redux store
import "./App.scss";
import HotelDetails from "./components/HotelDetails";
import HotelsList from "./components/HotelsList";
import HotelDining from "./components/HotelDining";
import Register from "./components/Register";

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
            <Route path="/hotels" element={<HotelsList />} />
            <Route path="/hotels/:name" element={<HotelDetails />} />
            <Route path="/dinings" element={<HotelDining />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </Provider>
  );
}

export default App;
