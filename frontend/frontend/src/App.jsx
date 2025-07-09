import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Registration from './Components/Registration'
import Login from './Components/Login'
import Home from './Components/Home'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Table from './Components/Table'
import Form from './Components/Form'
import Plot from './Components/Plot'
import About from './Components/About'
import Help from './Components/Help'
import Dashboard from './Components/Dashboard'
import Plot2 from './Components/Plot2'
import Plot3 from './Components/Plot3'
import Plot4 from './Components/Plot4'
import Tableplots from './Components/Tableplots'
import Lodingpage from './Components/lodingpage'
import Header from './Components/HeaderFooter/Header'
import Footer from './Components/HeaderFooter/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
<>
    <BrowserRouter>
      <nav>
          <Link to = "/" className  =" naav-Link"></Link>
          <Link to = "/Login" className  =" naav-Link"></Link>
          <Link to = "/Home" className = "nav-Link"></Link>
          <Link to = "/Gallery" className = "nav-Link"></Link>
          <Link to = "/Table" className = "nav-Link"></Link>
          <Link to = "/Contact" className = "nav-Link"></Link>
          <Link to = "/Form" className = "nav-Link"></Link>
          <Link to = "/Plot" className = "nav-Link"></Link>
          <Link to = "/About" className = "nav-Link"></Link>
          <Link to = "/Help" className = "nav-Link"></Link>
          <Link to = "/dashboard" className = "nav-Link"></Link>
          <Link to = "/Plot2" className = "nav-Link"></Link>
          <Link to = "/Plot3" className = "nav-Link"></Link>
          <Link to = "/Plot4" className = "nav-Link"></Link>
          <Link to = "/Tableplots" className = "nav-Link"></Link>
          <Link to = "/HeaderFooter/Header" className = "nav-Link"></Link>
          <Link to = "/HeaderFooter/Footer" className = "nav-Link"></Link>
          <Link to = "/Lodingpage" className = "nav-Link"></Link>
          
          
      </nav>
      <Routes>
          <Route path = "/" element = {<Registration />} />
          <Route path = "/Login" element = {<Login />} /> 
          <Route path = "/Home" element = {<Home />} />
          <Route path = "/Gallery" element = {<Gallery />} />
          <Route path = "/Table" element = {<Table />} />
          <Route path = "/Contact" element = {<Contact/>} />
          <Route path = "/About" element = {<About/>} />
          <Route path = "/Help" element = {<Help/>} />
          <Route path = "/Form" element = {<Form />} />
          <Route path = "/dashboard" element = {<Dashboard />} />
          <Route path = "/Plot2" element = {<Plot2 />} />
          <Route path = "/Plot" element = {<Plot />} />
          <Route path = "/Plot3" element = {<Plot3 />} />
          <Route path = "/Plot4" element = {<Plot4 />} />
          <Route path = "/HeaderFooter/Header" element = {<Header />} />
          <Route path = "/Tableplots" element = {<Tableplots />} />
          <Route path = "/HeaderFooter/Footer" element = {<Footer />} />
          <Route path = "/Lodingpage" element = {<Lodingpage />} />
          
          


      </Routes>
    </BrowserRouter>
</>
  )
}

export default App
