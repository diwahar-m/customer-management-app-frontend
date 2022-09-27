import { VscAccount} from "react-icons/vsc";
import {Link} from  'react-router-dom'
import './index.css'
const CustomerItem = props => {
    const {customerDetails} = props
    const {email,firstName,lastName} = customerDetails
    return (
      <Link to={`/jobs/${customerDetails.customerId}`} className="link">
        <li className="user-card-container ">
          <VscAccount size={60}  style={{ marginBottom: 10 }}/>
          <div className="item-info ">
            <p className="name">{firstName} {lastName}</p>
            <p className="email"> {email} </p>
          </div>
        </li>
      </Link>
    )
  }
  
  export default CustomerItem