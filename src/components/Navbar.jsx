import { Link } from 'react-router-dom'
import '../assets/css/Navbar.css'

export const Navbar = () => {

  return (
    <>
        <header className='header'>
            <nav className='navbar'>
                <div className="navbar-logo">
                    <Link to="/">Kodigo Music</Link>
                </div>
                <div className="navbar-list">
                    <ul className='list'>
                        <li><Link href="#">About</Link></li>
                        <li><Link href="#">Services</Link></li>
                        <li><Link to="/subscribe">Subscribe</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    </>
  )
}
