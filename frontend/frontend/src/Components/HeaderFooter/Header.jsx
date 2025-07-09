import React from 'react'

function Header() {
  return (
    <>
        <nav className="bg-blue-300 text-white flex justify-between items-center px-6 py-3 shadow-md">
        <div className="text-sm font-medium">Welcome, Admin</div>
        <div className="flex gap-3">
           <a href="/Home" className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-red-500">HOME</a>
           <a href="/Form" className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-red-500">FORM</a>
           <a href="/Table" className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-red-500">DASHBORD</a>
           <a href="/Gallery" className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-red-500">GALLERY</a>
           <a href="/Dashboard" className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-red-500">GALLERY PLOTS</a>
           <a href="/Tableplots" className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-red-500">DASHBORD PLOTS</a>
          
        </div>
      </nav>
     
    </>
  )
}

export default Header