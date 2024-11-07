import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import icon from '../../assets/icon.jpg';



const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                    <h3>Premium Pet Shop</h3>
            </Link>
            <div>
                <NavLink to={`/category/Juguetes`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Juguetes</NavLink>
                <NavLink to={`/category/Medicamentos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Medicamentos</NavLink>
                <NavLink to={`/category/Alimento`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Alimento</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar