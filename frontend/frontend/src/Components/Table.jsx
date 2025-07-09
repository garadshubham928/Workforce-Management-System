import React, { useState, useEffect } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Header from "./HeaderFooter/Header";
import Footer from "./HeaderFooter/Footer";

export default function TablePage() {
  const [item, setItem] = useState([]);
  const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setIsLoading(true)
        const res = await fetch("http://localhost:4000/api/samplesuperstore/orders");
        const data = await res.json();
        setItem(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false)
    };
    fetchItem();
  }, []);

  const Quantity = item.reduce((sum, curr) => sum + Number(curr.Quantity || 0), 0);
  const Profit = item.reduce((sum, curr) => sum + Number(curr.Profit || 0), 0);
  const Sales = item.reduce((sum, curr) => sum + Number(curr.Sales || 0), 0);

  if(isLoading){
    return(
      <>
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-12 h-12 border-4 border-purple-200 rounded-full animate-spin border-t-red-900 mb-4"></div>
             
            <h1 className="text-lg font-semibold text-black-900">Loading...</h1>
          </div>

      </>
    )
  }
  else{
  return (
    <>
    <Header />
    <div className="min-h-screen flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 px-4">
        <div className="bg-white shadow-lg rounded-xl p-4">
          <h2 className="text-lg font-semibold text-gray-700">Total Quantity</h2>
          <p className="text-2xl font-bold text-blue-600">{Quantity}</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-4">
          <h2 className="text-lg font-semibold text-gray-700">Total Profit</h2>
          <p className="text-2xl font-bold text-blue-600">{(Profit/1000).toFixed(2)+"K"}</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-4">
          <h2 className="text-lg font-semibold text-gray-700">Total Sales</h2>
          <p className="text-2xl font-bold text-blue-600">{(Sales/1000).toFixed(2)+"K"}</p>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-x-auto px-4 mb-6">
        <div className="max-h-[500px] overflow-y-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg text-sm">
            <thead className="bg-blue-600 text-white sticky top-0 z-10">
              <tr>
                {[
                  "Row ID", "Order ID", "Order Date", "Ship Date", "Ship Mode",
                  "Customer ID", "Customer Name", "Segment", "Country", "City",
                  "State", "Postal Code", "Region", "Product ID", "Category",
                  "Sub-Category", "Product Name", "Sales", "Quantity", "Discount", "Profit"
                ].map((col, idx) => (
                  <th key={idx} className="px-4 py-2">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {item.map((order, index) => (
                <tr key={order.RowID || index}>
                  <td className="border px-4 py-2">{order['Row ID']}</td>
                  <td className="border px-4 py-2">{order['Order ID']}</td>
                  <td className="border px-4 py-2">{moment(order.OrderDate).format("YYYY-MM-DD")}</td>
                  <td className="border px-4 py-2">{moment(order.ShipDate).format("YYYY-MM-DD")}</td>
                  <td className="border px-4 py-2">{order['Ship Mode']}</td>
                  <td className="border px-4 py-2">{order['Customer ID']}</td>
                  <td className="border px-4 py-2">{order['Customer Name']}</td>
                  <td className="border px-4 py-2">{order.Segment}</td>
                  <td className="border px-4 py-2">{order.Country}</td>
                  <td className="border px-4 py-2">{order.City}</td>
                  <td className="border px-4 py-2">{order.State}</td>
                  <td className="border px-4 py-2">{order['Postal Code']}</td>
                  <td className="border px-4 py-2">{order.Region}</td>
                  <td className="border px-4 py-2">{order['Product ID']}</td>
                  <td className="border px-4 py-2">{order.Category}</td>
                  <td className="border px-4 py-2">{order['Sub-Category']}</td>
                  <td className="border px-4 py-2">{order['Product Name']}</td>
                  <td className="border px-4 py-2">{order.Sales}</td>
                  <td className="border px-4 py-2">{order.Quantity}</td>
                  <td className="border px-4 py-2">{order.Discount}</td>
                  <td className="border px-4 py-2">{order.Profit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      
     <Footer />
    </div>
    </>
  
  )}
};