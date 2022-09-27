import {Component} from 'react'
import { BsPerson, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { VscAccount} from "react-icons/vsc";
import { FiEdit} from "react-icons/fi";
import { RiDeleteBinLine} from "react-icons/ri";
import './index.css'


class CustomerPersonalDetails extends Component {
  state = {customerDetails: {}}

  componentDidMount() {
    this.getcustomerDetails()
  }

  getcustomerDetails = async () => {
     const {match} = this.props
    const {params} = match
    const url = `http://localhost:8085/api/selectCustomers/${params.customerId}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const formatedData = fetchedData.map(eachcustomer => ({
        customerId: eachcustomer.customer_id,
        firstName: eachcustomer.first_name,
        lastName: eachcustomer.last_name,
        userName: eachcustomer.user_name,
        email: eachcustomer.email,
        phone: eachcustomer.phone,
        dob: eachcustomer.dob,
        gender: eachcustomer.gender,
        addressId: eachcustomer.address_id,
        address: eachcustomer.address,
        landmark: eachcustomer.landmark,
        state: eachcustomer.city,
        location: eachcustomer.state,
        country: eachcustomer.country,
        zipcode: eachcustomer.zipcode,
      }))

      this.setState({
        customerDetails: formatedData,
      })
    } 
  }

  renderCustomerContact = () => {
    const {customerDetails} = this.state
    const {firstName, lastName, userName, email, phone} = customerDetails
    return(
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
			</div>
		</div>
		<div className='button-container'>
			<button className='btn edit-button'><FiEdit style={{ marginRight: 5 }}/> Edit</button>
            <button className='btn delete-button'><RiDeleteBinLine style={{ marginRight: 5}}/> Delete Customer</button>
		</div>
      </div>
    )
    
  }

  render() {
    return (
      <div className="customer--responsive-container ">
        <div className="customer--contact-container ">
            {this.renderCustomerContact()}
        </div>
      </div>
    )
  }
}

export default CustomerPersonalDetails