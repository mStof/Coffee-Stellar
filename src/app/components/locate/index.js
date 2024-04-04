import Cards from "../assets/cards/cards";
import Image from "next/image";
import assets from '../assets'
import "../../../style/index/main.scss";
import "../../../style/index/locate.scss";

export default function Locate() {

  const [ cafeImg, googleIcons, socialMedia ] = assets.locateJs
  const [accessTime, pinDrop, phone] = googleIcons
  const [instagram, twitter, facebook, whatsapp] = socialMedia
  
  return (
    <div className="locate_container" id="locate">
      <Cards images={cafeImg} hadHelp={false}/>
      <div className="locate_info">
        <h2>Onde estamos</h2>
        <ul className="locate_local">
          <li>
            <Image src={accessTime} alt="Time Icon" />
            Seg à Sex: 8h - 17h / Sab e Dom: 9h - 18h
          </li>
          <li>
            <Image src={pinDrop} alt="Pin Icon" />
            Lorem Ipsun, Nº272 - Liberdade - SP
          </li>
          <li>
            <Image src={phone} alt="Phone Icon" />
            (11) 99999-9999 / Horário de serviço
          </li>
        </ul>
        <ul className="locate_redes_sociais">
          <li>
            <a href="https://www.instagram.com/"><Image src={instagram} alt="Instagram icon" /></a>
          </li>
          <li>
            <a href="https://twitter.com/home"><Image src={twitter} alt="Twitter icon" /></a>
          </li>
          <li>
            <a href="https://www.facebook.com/home"><Image src={facebook} alt="Facebook icon" /></a>
          </li>
          <li>
            <a href="#"><Image src={whatsapp} alt="Whatsapp icon" /></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
