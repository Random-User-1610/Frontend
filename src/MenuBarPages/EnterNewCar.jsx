import React, { useState } from "react";
import axios from "axios";

function EnterNewCar() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [numberPlate, setNumberPlate] = useState("");

  const handleSubmit = (e) => {
    // post to dataset
    e.preventDefault();
    console.log("ID:", id);
    console.log("Name:", name);
    console.log("Number Plate:", numberPlate);

    const result = axios.post(`http://localhost:9000/post`, {
      car_Id: id,
      car_name: name,
      car_no_Plate: numberPlate,
      price: 600,
      is_availabel: "yes",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1>Enter A new Car in the Database</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="id">
            ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="id"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter ID"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="numberPlate"
          >
            Number Plate
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="numberPlate"
            type="text"
            value={numberPlate}
            onChange={(e) => setNumberPlate(e.target.value)}
            placeholder="Enter Number Plate"
          />
        </div>
        <div className="flex items-center justify-center">
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

export default EnterNewCar;
