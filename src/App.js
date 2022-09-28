import Customers from './components/Customers';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomersPersonalDetails from './components/CustomersPersonalDetails'

import './App.css';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Customers />}></Route>
            <Route exact path="/api/selectCustomerById/:customerId" element={<CustomersPersonalDetails/>}></Route>
        </Routes>
    </BrowserRouter>
)

export default App