import {Component} from 'react'
import './index.css'
import { VscDiffAdded } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import { TbArrowsSort } from "react-icons/tb";
import CustomerItem from '../CustomerItem'
class CustomersList extends Component {
    state = {
        customerData : []
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

    render() {
        const {customerData} = this.state
      return(
        <div className='customer-list-container '>
            <div className='container'>
                <div className='customer-list-header'>
                    <p className='title'>Customers</p>
                        <div className='icon-container'>
                            <FiSearch className='icon'/>
                            <div className="vl"></div>
                            <VscDiffAdded />
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