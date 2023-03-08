import React, { useState } from "react";
import axios from "axios";

function BookCar() {
  const [id, setId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(`ID: ${id}, Phone Number: ${phoneNumber}`); // put to database
    // axios.get(`http://localhost:9000/get?is_available=yes`).then((response) => {
    //   console.log(response.data);
    //   // setData(response.data);
    // });
    const res = axios.put(`http://localhost:9000/update`, {
      car_Id: id,
      is_availabel: "no ",
      car_name: "car",
      car_no_Plate: "tn38 2222",
      price: 600,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="id">
            CAR_ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="id"
            type="text"
            placeholder="Enter ID"
            value={id}
            onChange={handleIdChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="phone-number"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone-number"
            type="text"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="id">
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="adaress"
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={handleAddressChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookCar;
