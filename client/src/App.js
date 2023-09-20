import { Routes, Route } from 'react-router-dom';
import "./App.css"
import Home from "./components/Home"
import Customers from "./components/Customers"
import Transaction from "./components/Transaction"
import Transfer from './components/Transfer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/history" element={<Transaction />} />
      <Route path="/transfer" element={<Transfer />} />
    </Routes>
  )
}

export default App;
