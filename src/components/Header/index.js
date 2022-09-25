import './index.css'
import { VscAccount} from "react-icons/vsc";
import { VscTriangleDown} from "react-icons/vsc";
const Header = () => {
    return (
        <div className="header-container">
            <p className='header-title'>Project Name</p>
            <div className='profile-container'>
                <p className='profile-title'>Customer Admin</p>
                <div className='profile'>
                   <VscAccount size={35}/>
                   <p className='user-name'>User #01</p>
                   <VscTriangleDown color='white'/>
                </div>
            </div>
        </div>
    )
}

export default Header