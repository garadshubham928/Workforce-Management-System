import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './HeaderFooter/Header';
import Footer from './HeaderFooter/Footer';

export default function Form() {
  const [item, setItem] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [FormData, setFormData] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/api/gallery/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(FormData)
    });
    resetForm();
  };

  const resetForm = () => {
    setFormData({
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

  return (
    <>
      <Header />

      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">User Form</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                placeholder="Username"
                value={FormData.Username}
                onChange={e => setFormData({ ...FormData, Username: e.target.value })}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={FormData.Email}
                onChange={e => setFormData({ ...FormData, Email: e.target.value })}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <input
                type="text"
                placeholder="Country"
                value={FormData.Country}
                onChange={e => setFormData({ ...FormData, Country: e.target.value })}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
              <input
                type="text"
                placeholder="Position"
                value={FormData.Position}
                onChange={e => setFormData({ ...FormData, Position: e.target.value })}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Months</label>
              <input
                type="number"
                placeholder="Months"
                value={FormData.Months}
                onChange={e => setFormData({ ...FormData, Months: e.target.value })}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
              <input
                type="number"
                placeholder="Year"
                value={FormData.Year}
                onChange={e => setFormData({ ...FormData, Year: e.target.value })}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Manpower</label>
              <input
                type="number"
                placeholder="Manpower"
                value={FormData.Manpower}
                onChange={e => setFormData({ ...FormData, Manpower: e.target.value })}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center space-x-2 mt-6">
              <input
                type="checkbox"
                checked={FormData.Type === 1}
                onChange={e => setFormData({ ...FormData, Type: e.target.checked ? 1 : 0 })}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="text-sm text-gray-700">Is Type Active?</label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Created Date</label>
              <input
                type="date"
                value={FormData.Createddate}
                onChange={e => setFormData({ ...FormData, Createddate: e.target.value })}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-full mt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Submit
              </button>
              
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
