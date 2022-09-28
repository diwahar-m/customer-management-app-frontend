import { BsPerson, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { VscAccount} from "react-icons/vsc";
import { FiEdit} from "react-icons/fi";
import { RiDeleteBinLine} from "react-icons/ri"; 

const CustomerContact = (props) => {
    const {customerDetails} = props
    const {firstName, lastName, userName, email, phone} = customerDetails
    return(
      <div className="customer-info">
        <div className='customer-profile'>
            <VscAccount size={55} style={{ marginTop: 12 }}/>
            <div className='profile-details'>
                <h1 className="name"> {firstName} {lastName}</h1>
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
			</div>
		</div>
		<div className='button-container'>
			<button className='btn edit-button'><FiEdit style={{ marginRight: 5 }}/> Edit</button>
            <button className='btn delete-button'><RiDeleteBinLine style={{ marginRight: 5}}/> Delete Customer</button>
		</div>
      </div>
    )
    
  }

  export default CustomerContact