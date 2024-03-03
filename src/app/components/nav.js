'use client';
import '../../style/nav.scss'
import { PiMoonFill } from "react-icons/pi";
import { TbSearch } from "react-icons/tb";


export default function navbar() {

  const handleClick = (e) => {
    e.target.classList.toggle('nav_open')
    document.querySelector('.navbar').classList.toggle('navbar_open')
  }

    return (
      <nav className="navbar">
        <button className="nav_btn" aria-label='Navbar-btn' onClick={handleClick}>
          <div>
            <span></span>
            <span></span>
          </div>
        </button>
        <ul className="nav_link_list">
          <li className="nav_links">
            <a href="#">Cardapio</a>
          </li>
          <li className="nav_links">
            <a href="#locate">Onde estamos</a>
          </li>
          <li className="nav_links">
            <a href="#about-us">Sobre nós</a>
          </li>
        </ul>
        <div className="search_bar_container">
          <input type="text" className="search_bar" placeholder='Qual café hoje'/>
          <button
            className="btn_search_bar"
            onClick={(e) => e.target.parentElement.classList.toggle('search_bar_open')}
          >
            <TbSearch />
          </button>
        </div>
        <button className="change_mode">
          <PiMoonFill />
        </button>
      </nav>
    );
  }
  