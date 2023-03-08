import React, { useState } from "react";
import axios from "axios";
// import "./SearchPage.css";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  axios.get(`http://localhost:9000/get?is_available=yes`).then((response) => {
    console.log(response.data);
    setData(response.data);
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }

    console.log("sadjkladkasd");
    console.log(data[0]);
  };

  return (
    <div className="mx-auto max-w-md">
      {/* <button
        class="bg-gray-800 hover:text-blue-600  cursor-pointer text-white"
        onClick={handleSubmit}
      >
        REFRESH
      </button> */}
      <table className="mt-8 rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-800">
          <tr>
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Car_Name</th>
            <th className="px-4 py-2">number_plate</th>
            <th className="px-4 py-2">Availability</th>
            <th className="px-4 py-2">price</th>
          </tr>
        </thead>
        <tbody className="bg-gray-200 text-gray-800">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-300">
              <td className="px-4 py-2">{item.car_Id}</td>
              <td className="px-4 py-2">{item.car_name}</td>
              <td className="px-4 py-2">{item.car_no_Plate}</td>
              <td className="px-4 py-2">{item.is_availabel}</td>
              <td className="px-4 py-2">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchPage;
