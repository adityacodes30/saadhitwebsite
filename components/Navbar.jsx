import Button from './Button'
import stl from './styles/navbar.module.css'

export default function Navbar() {
    return (
      <nav className={stl.navbar}>
        <div>Saadhit</div>
        <div className={stl.navlinks}>
            <div>Home</div>
            <div>About</div>
            <div>Case Studies</div>
            <div>Services</div>
            <Button text='Contact Us' />
        </div>
      </nav>
    )
  }
  