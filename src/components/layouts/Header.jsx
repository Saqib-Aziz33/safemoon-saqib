import { useEffect, useState } from "react"
import {FaBars, FaTimes} from 'react-icons/fa'
import './styles/header.scss'

const Header = () => {
  const [scroll, setScroll] = useState(window.scrollY)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    function changeNav(e){
      setScroll(window.scrollY)
    }
    window.addEventListener('scroll', changeNav)

    return () => {
      window.removeEventListener('scroll', changeNav)
    }
  }, [])

  return (
    <header className={`header fixed-top ${scroll > 200 && 'active'}`}>
      <div className="container py-3 px-2 d-flex justify-content-between align-items-center">
        <img className="ms-3 ms-md-0" height={50} src="https://safemoon.com/_next/image?url=%2Fimg%2Flogo.png&w=96&q=75" alt="" />

        <div className="nav-toggler">
        <button className="btn text-light d-flex align-items-center gap-2" style={{cursor: 'pointer'}} onClick={() => setShowNav(!showNav)}>
          <FaBars />
          <span>MENU</span>
        </button>
        </div>

        <ul className={`nav fw-normal nav-list ${showNav && 'active'}`}>
          <li className="close-nav my-5">
            <button className="btn mx-auto text-white d-flex align-items-center gap-2" onClick={() => setShowNav(false)}>
              <FaTimes />
              <span>Close</span>
            </button>
          </li>
          <li className="nav-item"><a className="nav-link text-white px-1 mx-3 d-inline-block d-md-block" href="/" style={{borderBottom: '2px solid #0fd7ca'}}>Home</a></li>
          <li className="nav-item"><a className="nav-link text-white px-1 mx-3 opacity-75 d-inline-block d-md-block" href="/">Our Team</a></li>
          <li className="nav-item"><a className="nav-link text-white px-1 mx-3 opacity-75 d-inline-block d-md-block" href="/">Swap</a></li>
          <li className="nav-item"><a className="nav-link text-white px-1 mx-3 opacity-75 d-inline-block d-md-block" href="/">Products</a></li>
          <li className="nav-item"><a className="nav-link text-white px-1 mx-3 opacity-75 d-inline-block d-md-block" href="/">Merch</a></li>
          <li className="nav-item"><a className="nav-link text-white px-1 mx-3 opacity-75 d-inline-block d-md-block" href="/">Partners</a></li>
          <li className="nav-item"><a className="nav-link text-white px-1 mx-3 opacity-75 d-inline-block d-md-block" href="/">Markets</a></li>
          <li className="nav-item"><a className="nav-link text-white px-1 mx-3 opacity-75 d-inline-block d-md-block" href="/">How to Buy</a></li>
        </ul>
      </div>
    </header>
  )
}
export default Header