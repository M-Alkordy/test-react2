import { Link, NavLink } from 'react-router-dom';
import './NavBarStyle.css'
import { CiHome } from "react-icons/ci";
const NavBar = ({ menu, logo, btn }) => {
    return (
        <nav>
            <h1 className='logo'>{logo}</h1>
            <div>
                <ul>
                    {menu.map((element, index) => {
                        return (
                            <li key={index}><NavLink to={element.path} className={({ isActive }) =>
                                isActive ? "active" : ""
                            }><i className={element.icon}></i> {element.title}</NavLink></li>
                        )
                    })}
                </ul>
                <button> <CiHome /> {btn}</button>
            </div>
        </nav>
    )
}

export default NavBar