import Header from '../Header'
import CustomersList from '../CustomersList'
import './index.css'
const CustomerPage = () => (
    <div className="home-container">
      <Header />
      <div className="home-responsive-container">
          <CustomersList />
      </div>
    </div>
  )
  
export default CustomerPage