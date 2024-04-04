'use client';
import '@/style/index/nav.scss';
import { PiMoonFill } from "react-icons/pi";
import { HiSun } from "react-icons/hi";
import { useState } from 'react'
import Link from 'next/link';
import SearchBar from './search';


export default function Navbar() {
  const [isDark, setIsDark] = useState(false)

  const handleClick = (e) => {
    e.target.classList.toggle('nav_open')
    document.querySelector('.navbar').classList.toggle('navbar_open')
  }
  const handleClickTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('darkTheme')
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
            <Link href="#">Cardapio</Link>
          </li>
          <li className="nav_links">
            <Link href="/#locate">Onde estamos</Link>
          </li>
          <li className="nav_links">
            <Link href="/#about-us">Sobre nós</Link>
          </li>
        </ul>
        <SearchBar />
        <button className="change_mode" onClick={handleClickTheme}>
          {isDark ? <PiMoonFill /> : <HiSun />}
        </button>
      </nav>
    );
  }
  