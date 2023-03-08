import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import BookAndSearch from "./MenuBarPages/BookAndSearch";
import Policies from "./MenuBarPages/Policies";
import CarsProvided from "./MenuBarPages/CarsProvided";
import CurrentlyAvailable from "./MenuBarPages/CurrentlyAvailable";
import EnterNewCar from "./MenuBarPages/EnterNewCar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
