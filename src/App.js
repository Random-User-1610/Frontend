import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import MenuBar from "./MenuBar";
// import Routes from "./Routes";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BookAndSearch from "./MenuBarPages/BookAndSearch";
import Sidebar from "./Components/Sidebar";
import EnterNewCar from "./MenuBarPages/EnterNewCar";
import DeleteCar from "./MenuBarPages/DeleteCar";
import BookCar from "./PostAndUpdate/BookCar";
import CurrentlyAvailable from "./MenuBarPages/CurrentlyAvailable";
// import Navbar from "";

function App() {
  // return <Sidebar />;
  // return <CurrentlyAvailable />;
  // return <EnterNewCar />; //post
  // return <BookCar />; //put
  // return <DeleteCar />
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}></Route>
        <Route
          path="/CurrentlyAvailable"
          element={<CurrentlyAvailable />}
        ></Route>
        <Route path="/EnterNewCar" element={<EnterNewCar />} />
        <Route path="/BookCar" element={<BookCar />} />
        <Route path="/DeleteCar" element={<DeleteCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
