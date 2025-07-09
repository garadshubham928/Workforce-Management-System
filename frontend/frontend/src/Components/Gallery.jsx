import React, { useState, useEffect } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Header from "./HeaderFooter/Header";
import Footer from "./HeaderFooter/Footer";

export default function Gallery() {
  const [item, setItem] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [Form, setForm] = useState({
    Username: '',
    Email: '',
    Country: '',
    Position: '',
    Months: '',
    Year: '',
    Manpower: '',
    Type: '',
    Createddate: ''
  });

  const navigate = useNavigate();

  const fetchItem = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/samplesuperstore/gallery");
      const data = await res.json();
      setItem(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchItem();
  }, []);

  const handleEdit = (item) => {
    setEditingId(item.id);
    setForm({
      ...item,
      Createddate: item.Createddate ? moment(item.Createddate).format('YYYY-MM-DD') : ''
    });
  };

  const handleUpdate = async () => {
    const payload = {
      ...Form,
      Createddate: Form.Createddate ? moment(Form.Createddate).format('YYYY-MM-DD') : ''
    };

    await fetch(`http://localhost:4000/api/gallery/update/${editingId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    resetForm();
    fetchItem();
  };

  const resetForm = () => {
    setForm({
      Username: '',
      Email: '',
      Country: '',
      Position: '',
      Months: '',
      Year: '',
      Manpower: '',
      Type: '',
      Createddate: ''
    });
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:4000/api/gallery/delete/${id}`, {
      method: "DELETE",
    });
    fetchItem();
  };

  const totalManpower = item.reduce((sum, curr) => sum + Number(curr.Manpower || 0), 0);
  const totalUsers = item.length;
  const uniquePositions = new Set(item.map((i) => i.Position)).size;

  return (
    <>
      
      <Header />

      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white shadow-lg rounded-xl p-4">
            <h2 className="text-lg font-semibold text-gray-700">Total Manpower</h2>
            <p className="text-2xl font-bold text-blue-600">{totalManpower}</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-4">
            <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
            <p className="text-2xl font-bold text-green-600">{totalUsers}</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-4">
            <h2 className="text-lg font-semibold text-gray-700">Unique Positions</h2>
            <p className="text-2xl font-bold text-purple-600">{uniquePositions}</p>
          </div>
        </div>

        {/* Styled Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Username</label>
            <input type="text" placeholder="Username" value={Form.Username} onChange={e => setForm({ ...Form, Username: e.target.value })} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Email</label>
            <input type="email" placeholder="Email" value={Form.Email} onChange={e => setForm({ ...Form, Email: e.target.value })} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Country</label>
            <input type="text" placeholder="Country" value={Form.Country} onChange={e => setForm({ ...Form, Country: e.target.value })} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Position</label>
            <input type="text" placeholder="Position" value={Form.Position} onChange={e => setForm({ ...Form, Position: e.target.value })} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Months</label>
            <input type="number" placeholder="Months" value={Form.Months} onChange={e => setForm({ ...Form, Months: e.target.value })} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Year</label>
            <input type="number" placeholder="Year" value={Form.Year} onChange={e => setForm({ ...Form, Year: e.target.value })} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Manpower</label>
            <input type="number" placeholder="Manpower" value={Form.Manpower} onChange={e => setForm({ ...Form, Manpower: e.target.value })} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div className="flex items-center space-x-2 mt-6">
            <input type="checkbox" checked={Form.Type === 1} onChange={e => setForm({ ...Form, Type: e.target.checked ? 1 : 0 })} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label className="text-sm text-gray-700">Is Type Active?</label>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Created Date</label>
            <input type="date" value={Form.Createddate} onChange={e => setForm({ ...Form, Createddate: e.target.value })} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          {editingId && (
            <div className="col-span-full mt-4">
              <button onClick={handleUpdate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Update
              </button>
            </div>
          )}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <div className="max-h-110 overflow-y-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg text-sm">
              <thead className="bg-blue-600 text-white sticky top-0 z-10">
                <tr>
                  <th className="px-2 py-1 text-center">UserName</th>
                  <th className="px-2 py-1 text-center">Email</th>
                  <th className="px-2 py-1 text-center">Country</th>
                  <th className="px-2 py-1 text-center">Position</th>
                  <th className="px-2 py-1 text-center">Months</th>
                  <th className="px-2 py-1 text-center">Year</th>
                  <th className="px-2 py-1 text-center">ManPower</th>
                  <th className="px-2 py-1 text-center">Type</th>
                  <th className="px-2 py-1 text-center">CreatedDate</th>
                  <th className="px-2 py-1 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {item.map((item, index) => (
                  <tr key={item.id || index} className="border-b">
                    <td className="p-1 text-center">{item.Username}</td>
                    <td className="p-1 text-center">{item.Email}</td>
                    <td className="p-1 text-center">{item.Country}</td>
                    <td className="p-1 text-center">{item.Position}</td>
                    <td className="p-1 text-center">{item.Months}</td>
                    <td className="p-1 text-center">{item.Year}</td>
                    <td className="p-1 text-center">{item.Manpower}</td>
                    <td className="p-1 text-center">{item.Type === 1 ? "Yes" : "No"}</td>
                    <td className="p-1 text-center">{moment(item.Createddate).format("YYYY-MM-DD")}</td>
                    <td className="p-1 flex justify-center gap-2">
                      <button onClick={() => handleEdit(item)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</button>
                      <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

     <Footer />
    </>
  );
}
