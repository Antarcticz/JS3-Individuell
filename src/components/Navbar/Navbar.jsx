import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar d-flex justify-content-center align-item-center p-5">
            <div className="container-navbar">
                <Link className="navbar-brand" to="/"><img src="/Placeholders/Logo.svg" alt="" /></Link>
                <ul className="nav-links gap-5" >
                    <li><NavLink to="/">PRODUCTS</NavLink></li>
                    <li><NavLink to="/add">ADD</NavLink></li>
                    <li><NavLink to="/edit">EDIT</NavLink></li>
                    <li><NavLink to="/login"><span>Login</span></NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar