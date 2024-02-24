import Cards from "../main/cards";
import "../../../style/main.scss";
import "../../../style/locate.scss";
import accessTime from "@material-design-icons/svg/round/access_time.svg";
import pinDrop from "@material-design-icons/svg/outlined/pin_drop.svg";
import phone from "@material-design-icons/svg/round/phone.svg";
import instagram from "../../../../public/svg/instagram-icon.svg";
import twitter from "../../../../public/svg/twitter-icon.svg";
import facebook from "../../../../public/svg/facebook-icon.svg";
import whatsapp from "../../../../public/svg/whatsapp-icon.svg";
import Image from "next/image";

export default function Locate() {
  return (
    <div className="locate_container">
      <Cards board={1}/>
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
            <Image src={phone} alt="Time Icon" />
            (11) 99999-9999 / Horário de serviço
          </li>
        </ul>
        <ul className="locate_redes_sociais">
          <li>
            <a href="#"><Image src={instagram} alt="Instagram icon" /></a>
          </li>
          <li>
            <a href="#"><Image src={twitter} alt="Twitter icon" /></a>
          </li>
          <li>
            <a href="#"><Image src={facebook} alt="Facebook icon" /></a>
          </li>
          <li>
            <a href="#"><Image src={whatsapp} alt="Whatsapp icon" /></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
