import assets from "./assets";
import Image from "next/image";
import '../../style/index/footer.scss'
import Link from 'next/link'

export default function Footer() {
  const [logo, instagram, github, linkedin] = assets.footerJs;

  return (
    <footer className="footer-container">
      <Link href="/">
        <Image className="footer-logo" src={logo} alt="Logo do rodapé" />
      </Link>

      <div className="footer-my-infos">
        <p>Criado por Mstof</p>
        <ul className="my-social-medias">
          <li>
            <a target="_blank" href="https://www.instagram.com/_mstofel/">
              <Image src={instagram} alt="Mstof (Criador) Instagram" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/mStof">
              <Image src={github} alt="Mstof (Criador) Github" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/mstof/">
              <Image src={linkedin} alt="Mstof (Criador) Linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
