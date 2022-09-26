import { BsPerson } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { VscAccount} from "react-icons/vsc";
import { FiEdit} from "react-icons/fi";
import { RiDeleteBinLine} from "react-icons/ri";

import './index.css'

const CustomerContact = props => {
    const {customerData} = props
    const {firstName, lastName,email,userName,phone} = customerData
    return (
        <div className="customer-info">
            <div className='customer-profile'>
                <VscAccount size={55} style={{ marginTop: 12 }}/>
                <div className='profile-details'>
                    <p className="name"> {firstName} {lastName}</p>
                    <div className='contacts-container'>
                        <div className='icon-container'>
                            <BsPerson />
                            <p className='title'>{userName}</p>
                        </div>
                        <div className='icon-container'>
                            <AiOutlineMail/>
                            <p className='title'>{email}</p>
                        </div>
                        <div className='icon-container'>
                            <BsTelephone />
                            <p className='title'>{phone}</p>
                        </div>
                    </div>
                    <div className='button-container'>
                        <button className='btn edit-button'><FiEdit style={{ marginRight: 5 }}/> Edit</button>
                        <button className='btn delete-button'><RiDeleteBinLine style={{ marginRight: 5}}/> Delete Customer</button>
                    </div>
                </div>
            </div>
        

      </div>
    )
  }
  
  export default CustomerContact