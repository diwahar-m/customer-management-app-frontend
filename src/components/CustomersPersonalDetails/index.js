import {Component} from 'react'
import { BsPerson, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { VscAccount} from "react-icons/vsc";
import { FiEdit} from "react-icons/fi";
import { RiDeleteBinLine} from "react-icons/ri";
import './index.css'


class CustomersPersonalDetails extends Component {
  state = {customerDetails: {}}

  componentDidMount() {
    this.getcustomerDetails()
  }

  getcustomerDetails = async () => {
    const {customerDetails} = this.state
    const {customerId} = customerDetails
    const url = `http://localhost:8085/api/selectCustomerById?id=${customerId}}`
   // const url = `http://localhost:8085/api/selectCustomerById/024f74e0-3cf1-11ed-9438-bd9a732dd2c5`
    
     const options = {
      method: 'GET',
      header:{'Accept':'application/json',
      'Content-Type':'application/json'}
    } 
    const response = await fetch(url,options)
    console.log(response)
    if (response.ok) {
      const fetchedData = await response.json()
      const formatedData = {
        customerId: fetchedData.customerDetails.customer_id,
        firstName: fetchedData.customerDetails.first_name,
        lastName: fetchedData.customerDetails.last_name,
        userName: fetchedData.customerDetails.user_name,
        email: fetchedData.customerDetails.email,
        phone: fetchedData.customerDetails.phone,
        dob: fetchedData.customerDetails.dob,
        gender: fetchedData.customerDetails.gender,
        addressId: fetchedData.customerDetails.address_id,
        address: fetchedData.customerDetails.address,
        landmark: fetchedData.customerDetails.landmark,
        state: fetchedData.customerDetails.city,
        location: fetchedData.customerDetails.state,
        country: fetchedData.customerDetails.country,
        zipcode: fetchedData.customerDetails.zipcode,
      }

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

  renderPersonalDetails = () => {
    const {customerDetails} = this.state
    const {firstName, lastName, gender, dob} = customerDetails
    return(
      <div className='personal-details'>
        <h1 className='heading'>Personal Details</h1>
        <div className='person-self-info'>
          
              <div className='self-info-container'>
                  <p className='person'>First Name</p>
                  <p className='info'>{firstName}</p>
              </div>
              <div className='self-info-container'>
                  <p className='person'>Last Name</p>
                  <p className='info'>{lastName}</p>
              </div>
              <div className='self-info-container'>
                  <p className='person'>Gender</p>
                  <p className='info'>{gender}</p>
              </div>
              <div className='self-info-container'>
                  <p className='person'>Date of Birth</p>
                  <p className='info'>{dob}</p>
              </div>
        </div>
        
      </div>
    )
  }

  renderAddressDetails = () => {
    const {customerDetails} = this.state
    const {address, landmark, city, state} = customerDetails
    return(
      <div className='address-details'>
        <h1 className='heading'>Address</h1>
        <div className='address-info'>
          <div className='address1'>
            <p>Address line 1</p>
            <p>{address}</p>
          </div>
          <div className='address2'>
            <p>Landmark</p>
            <p>{landmark}</p>
          </div>
          <div className='address1'>
            <p>City</p>
            <p>{city}</p>
          </div>
          <div className='address2'>
            <p>State</p>
            <p>{state}</p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="customer-responsive-container ">
        {this.renderCustomerContact()}
        <hr className='hr'/>
        {this.renderPersonalDetails()}
        {this.renderAddressDetails()}
      </div>
    )
  }
}

export default CustomersPersonalDetails