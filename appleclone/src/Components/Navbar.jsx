import { useContext } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const rout = useNavigate();
    const { state, Logout } = useContext(AuthContext)

    return (
        <div id='navbar-screen'>
            <div>
                <i class="fa-brands fa-apple"></i>
                <a>Store</a>
                <a>Mac</a>
                <a>iPad</a>
                <a href='./iphone15pro'>iPhone</a>
                <a>Watch</a>
                <a>AirPods</a>
                <a>TV & Home</a>
                <a>Entertainment</a>
                <a>Accesories</a>
                <a>Support</a>
                <i class="fa-solid fa-magnifying-glass"></i>
                <i className='apple-cart' onClick={() => rout("/cart")} class="fa-solid fa-bag-shopping"></i>
                {state?.user?.id ?
                    <button className='log-button' onClick={Logout}>LOGOUT</button>
                    :
                    <button className='log-button' onClick={() => rout("/login")}>LOGIN</button>}
            </div>
            {state?.user?.id &&
                <span className='username'>Hi! <u>{state?.user?.name}</u></span>
            }
        </div>
    )
}
export default Navbar;