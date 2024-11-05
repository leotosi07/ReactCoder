import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return(
        <nav>
            <div className='NavButtons'>
                <button>
                    Juguetes
                </button>
                <button>
                    Medicamentos
                </button>
                <button>
                    Alimento
                </button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar