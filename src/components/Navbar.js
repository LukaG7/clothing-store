import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            {/* <h1>Navbar</h1> */}
            <nav className='nav-links'>
                <Link to='/'>
                    Home
                </Link>
                <Link to='/cart'>
                    Cart
                </Link>
                <Link to='/signup'>
                    SignUp
                </Link>
                <Link to='/login'>
                    Login
                </Link>
            </nav>
            
        </div>
    )
}

export default Navbar;