import React from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Sidebar() {
  // const history = useHistory();
  // const navigate = useNavigate();

  return (
    <div className="h-screen w-64 bg-gray-800 text-white fixed top-0 left-0 overflow-y-auto">
      <div className="flex items-center justify-center h-16">
        <h1 className="text-xl font-bold">Menu</h1>
      </div>
      <ul className="mt-4 list-none">
        <li className="py-2 list-none">
          {/* <button className="bg-gray-800 hover:text-blue-600  cursor-pointer">
            Currently Available
          </button> */}
          <Link to="/CurrentlyAvailable">Currently Available</Link>
        </li>
        <li className="py-2">
          {/* <button class="bg-gray-800 hover:text-blue-600  cursor-pointer">
            Search and Book
          </button> */}
          <Link to="/BookCar">Search and Book</Link>
        </li>
        <li className="py-2">
          {/* <button class="bg-gray-800 hover:text-blue-600  cursor-pointer">
            Cars Provided
          </button> */}
          <Link to="/CurrentlyAvailable">Cars Provided</Link>
        </li>
        <li className="py-2">
          {/* <button class="bg-gray-800 hover:text-blue-600  cursor-pointer">
            Enter new Car
          </button> */}
          <Link to="/EnterNewCar">Enter New Car</Link>
        </li>
        <li className="py-2">
          {/* <button class="bg-gray-800 hover:text-blue-600  cursor-pointer">
            Delete car
          </button> */}
          <Link to="/DeleteCar">Delete Car</Link>
        </li>
        <li className="py-2">
          {/* <button class="bg-gray-800 hover:text-blue-600  cursor-pointer">
            Policies and Insurance
          </button> */}
          <Link to="">Policies and Insurances</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
