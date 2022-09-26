import { Component } from 'react'
import './index.css'
import CustomerContact from '../CustomerContact';


class CustomerDetails extends Component {
  state = { customerData: {}}

  componentDidMount() {
    this.getCustomerItemData()
  }

  getCustomerItemData = async () => {
    const {customerId} = this.state
    const response = await fetch(`http://localhost:8085/api/selectCustomerById/${customerId}`)
    console.log(response)
    const data = await response.json()

    const updatedData = {
        firstName: data.first_name ,
        lastName: data.last_name,
        userName: data.user_name,
        email: data.email,
        phone: data.phone,
        dob: data.dob,
        gender: data.gender,
        customerId: data.customer_id,
        address: data.address, 
        landmark: data.landmark,
        city: data.city,
        state: data.state,
        country: data.country,
      
    }
    this.setState({ customerData: updatedData})
  }

  renderPersonalDetails = () => {
    const {firstName, lastName, gender, dob} = this.state
    return(
      <div className='personal-details-container'>
        <div className='name-container'>
          <p>First Name</p>
          <p>{firstName}</p>
        </div>
        <div className='name-container'>
          <p>Last Name</p>
          <p>{lastName}</p>
        </div>
        <div className='name-container'>
          <p>Gender</p>
          <p>{gender}</p>
        </div>
        <div className='name-container'>
          <p>Date of Birth</p>
          <p>{dob}</p>
        </div>
      </div>
    )
  }

 
  render() {
    const {customerData} = this.state
    return (
      <div className="blog-container">
        <CustomerContact customerData={customerData}/>
        <hr className ="horizontal-line" />
        <h1>Personal Details</h1>
        {this.renderPersonalDetails()}
      </div>
    )
  }
}

export default CustomerDetails