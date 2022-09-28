import { VscAccount} from "react-icons/vsc";
import {Link} from 'react-router-dom'

import './index.css'
const CustomerItem = props => {
    const {customerDetails} = props
    return (
      <Link to={`/api/selectCustomerById/${customerDetails.customerId}`} className="link">
        <li className="user-card-container ">
          <VscAccount size={60}  style={{ marginBottom: 10 }}/>
          <div className="item-info ">
            <p className="name">{customerDetails.firstName} {customerDetails.lastName}</p>
            <p className="email"> {customerDetails.email} </p>
          </div>
        </li>
        </Link>
 
    )
  }
  
  export default CustomerItem