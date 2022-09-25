import { Component } from 'react'



import CustomerContact  from '../CustomerContact'



import './index.css'

class CustomerDetails extends Component {
  state = { customerData: {}}

  componentDidMount() {
    this.getCustomerItemData()
  }

  getCustomerItemData = async () => {
    const {customerData} = this.state
    const {customerId} = customerData
    const response = await fetch(`http://localhost:8085/api/${customerId}`)
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



  render() {
    const {customerData} = this.state
    return (
      <div className="blog-container">
        <div className="customer-info">
            <CustomerContact customerData={customerData}/>
            <hr  className ="horizontal-line" />

      </div>
      </div>
    )
  }
}

export default CustomerDetails