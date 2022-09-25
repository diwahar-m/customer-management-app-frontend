import { VscAccount} from "react-icons/vsc";
import './index.css'
const CustomerItem = props => {
    const {customerData} = props
    const {firstName, lastName,email} = customerData
    return (
      <li className="user-card-container ">
        <VscAccount size={60}  style={{ marginBottom: 10 }}/>
        <div className="item-info ">
          <p className="name"> {firstName} {lastName}</p>
          <p className="email"> {email} </p>
        </div>
      </li>
    )
  }
  
  export default CustomerItem