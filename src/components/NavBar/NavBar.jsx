import { NavLink,Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
            <h3>Premium PetShop</h3>
            </Link>
            <div>
                <NavLink to={`/category/Juguetes`} className={({isActive}) => isActive ? 'ActiveOption':'Option'}>Juguetes</NavLink>
                <NavLink to={`/category/Medicamentos`} className={({isActive}) => isActive ? 'ActiveOption':'Option'}>Medicamentos</NavLink>
                <NavLink to={`/category/Alimento`} className={({isActive}) => isActive ? 'ActiveOption':'Option'}>Alimento</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar