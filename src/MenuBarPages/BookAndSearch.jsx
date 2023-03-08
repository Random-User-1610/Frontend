import React, { useState } from "react";
import axios from "axios";
// import "./SearchPage.css";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    let id = parseInt(query);
    e.preventDefault();
    try {
      // const response = await fetch(`https://api.example.com/search?q=${query}`);
      await axios.get(`http://localhost:9000/get/${id}`).then((response) => {
        console.log(response.data);
        setData(response.data);
      });
      // const response = await axios.get(`http://localhost:8080/get/${id}`);
      // console.log(response.json());
      // setData(response.json());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center"
      >
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
        >
          Search
        </button>
      </form>
      {data.length > 0 ? (
        <table className="mt-8 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody className="bg-gray-200 text-gray-800">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-300">
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-8 text-center text-gray-500">
          Sorry! No data to display
        </p>
      )}
    </div>
  );
}

export default SearchPage;
