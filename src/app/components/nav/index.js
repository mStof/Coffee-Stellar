"use client";
import "@/style/index/nav.scss";
import { PiMoonFill } from "react-icons/pi";
import { HiSun } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";
import SearchBar from "./search";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  const handleClick = (e) => {
    e.target.classList.toggle("nav_open");
    document.querySelector(".navbar").classList.toggle("navbar_open");
  };
  const handleClickTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("darkTheme");
  };

  return (
    <nav className="navbar">
      <button
        type="button"
        className="nav_btn"
        aria-label="Barra de navegação"
        onClick={handleClick}
        title="Botão da barra de navegação"
      >
        <div>
          <span></span>
          <span></span>
        </div>
      </button>
      <ul className="nav_link_list">
        <li className="nav_links">
          <Link href="/cardapio">Cardapio</Link>
        </li>
        <li className="nav_links">
          <Link scroll={false} href="/#locate">Onde estamos</Link>
        </li>
        <li className="nav_links">
          <Link scroll={false} href="/#about-us">Sobre nós</Link>
        </li>
      </ul>
      <SearchBar />
      <button
        type="button"
        className="change_mode"
        onClick={handleClickTheme}
        aria-label="Mudar tema"
        title='Botão para mudar o tema'
      >
        {isDark ? <PiMoonFill /> : <HiSun />}
      </button>
    </nav>
  );
}
