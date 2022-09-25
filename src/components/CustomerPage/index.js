import Header from '../Header'
import CustomersList from '../CustomersList'
import CustomerDetails from '../CustomerDetails'
import './index.css'
const CustomerPage = () => (
    <div className="home-container">
      <Header />
      <div className="home-responsive-container">
          <CustomersList />
          <CustomerDetails />
      </div>
    </div>
  )
  
export default CustomerPage