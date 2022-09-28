import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import {RiAddBoxLine} from 'react-icons/ri'

import ListHeader from '../ListHeader'
import Header from '../Header'
import './index.css'
import CustomerItem from '../CustomerItem'
import CustomersPersonalDetails from '../CustomersPersonalDetails'

const sortbyOptions = [
    {
      optionId: 'Alphabeticaly',
      displayText: 'Sort by',
    },
  ]

class Customers extends Component {
    state = {
        searchInput: '',
        activeOptionId: sortbyOptions[0].optionId,
        customersList: [],
    }

    componentDidMount() {
        this.getCustomersData()
      }
    
      getCustomersData = async () => {
       
        const url = 'http://localhost:8085/api/selectCustomers'
       
    
        const response = await fetch(url)
        console.log(response)
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
            customersList: formatedData,
          })
        } 
      

    onClickSearch = () => {
        this.getCustomersData()
      }

    renderCustomersList = () => {
        const {customersList} = this.state
        return (
          <ul className="customers-list-items">
            {customersList.map(eachcustomer => (
              <CustomerItem key={eachcustomer.customerId} customerDetails={eachcustomer} />
            ))}
          </ul>
        )
      }

    onChangeSearchInput = (event) => {
        this.setState({searchInput: event.target.value})
    }

    renderSearchInput = () => {
        const {searchInput} = this.state
        return (
          <div className="search-input-container">
            <p className='title'>Customers</p>
            <input
              type="search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              className="search-input"
            />
            <button
              onClick={this.onClickSearch}
              className="search-btn"
              testid="searchButton"
              type="button"
            >
              <BsSearch className="icon" />
            </button>
            <div className="vl"></div>
            <button 
              className="add-btn" 
              testid="addButton"
              type="button"
            >
                <RiAddBoxLine className="icon"/>
            </button>
          </div>
        )
    }

    changeSortby = activeOptionId => {
        this.setState({activeOptionId})
      }

    render() {
        const {activeOptionId,} = this.state
        return (
          <div className="customers-container">
            <Header />
            <div className="info-container">
              <div className="customers-list-container">
                  <div className="customer-search-input-container">
                      {this.renderSearchInput()}
                  </div>
                  <hr className="horizontal-line" />
                  <ListHeader
                      activeOptionId={activeOptionId}
                      sortbyOptions={sortbyOptions}
                      changeSortby={this.changeSortby}
                  />
                  <div className="customer-list-container">
                      {this.renderCustomersList()}
                  </div>
              </div>
              <div className="customer-details-container">
                  <CustomersPersonalDetails />
              </div>
            </div>
          </div>
        )
      }
}

export default Customers