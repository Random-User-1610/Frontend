import React, { useState } from "react";
import axios from "axios";

function DeleteCar() {
  const [id, setId] = useState("");
  const [numberPlate, setNumberPlate] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(`ID: ${id}, Number Plate: ${numberPlate}`);
    // delete it from here using axios
    axios.delete(`http://localhost:9000/delete?id=${id}`);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleNumberPlateChange = (e) => {
    setNumberPlate(e.target.value);
  };

  return (
    <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="id" className="block text-gray-700 font-bold mb-2">
          ID
        </label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={handleIdChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="numberPlate"
          className="block text-gray-700 font-bold mb-2"
        >
          Number Plate
        </label>
        <input
          type="text"
          id="numberPlate"
          value={numberPlate}
          onChange={handleNumberPlateChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
}

export default DeleteCar;
