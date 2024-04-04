import assets from "./assets";
import Image from "next/image";
import '../../style/index/footer.scss'

export default function Footer() {
  const [logo, instagram, github, linkedin] = assets.footerJs;

  return (
    <footer className="footer-container">
      <Image className="footer-logo" src={logo} alt="Logo do rodapé" />

      <div className="footer-my-infos">
        <p>Criado por Mstof</p>
        <ul className="my-social-medias">
          <li>
            <a href="https://www.instagram.com/_mstofel/">
              <Image src={instagram} alt="Meu Instagram" />
            </a>
          </li>
          <li>
            <a href="https://github.com/mStof">
              <Image src={github} alt="Meu Github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mstof/">
              <Image src={linkedin} alt="Meu Linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
