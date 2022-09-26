import {Component} from 'react'
import './index.css'

import { BsSearch } from "react-icons/bs";
import { TbArrowsSort } from "react-icons/tb";
import CustomerItem from '../CustomerItem'

class CustomersList extends Component {
    state = {
        customerData : [],
        searchInput: ''
    }
    

    componentDidMount() {
        this.getCustomersData()
      }
    
      getCustomersData = async () => {
        const response = await fetch('http://localhost:8085/api/selectCustomers')
        
        console.log(response)
        const data = await response.json()
    
        const formattedData = data.map(eachItem => ({
         
          customerId: eachItem.customer_id,
          firstName: eachItem.first_name,
          lastName: eachItem.last_name,
          email: eachItem.email,
        }))
        console.log(formattedData)
        this.setState({ customerData: formattedData })
      }

      onChangeSearchInput = event => {
        this.setState({searchInput: event.target.value})
      }  

      


    render() {
        const {customerData,searchInput} = this.state
        console.log(customerData)
      return(
        <div className='customer-list-container '>
            <div className='container'>
                <div className='customer-list-header'>
                    <p className='title'>Customers</p>
                        <div className='icon-container'>
                        <div className="search-input-container">
                          <input
                            type="search"
                            value={searchInput}
                            onChange={this.onChangeSearchInput}
                            className="search-input"
                          />
                          <button
                            className="search-btn"
                            testid="searchButton"
                            type="button"
                           
                          >
                            <BsSearch className="search-icon" />
                          </button>
                        </div>
                            <div className="vl"></div>
                            <button onClick={this.onClickAdd} className="button">
                              +
                            </button>
                        </div>
                </div>
                <hr className ="horizontal-line" />
                <div className='arrow'>
                  <TbArrowsSort />
                </div>
              
            </div>
            
            {customerData.map(item => <CustomerItem customerData={item} key={item.customerId} />)}
            
          
        </div>
        )
        
    }
}

export default CustomersList