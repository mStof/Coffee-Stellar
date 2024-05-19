import Image from "next/image";

export default function LocateMedias({icons}) {

    const [instagram, twitter, facebook, whatsapp] = icons

  return (
    <ul className="locate_redes_sociais">
      <li>
        <a href="https://www.instagram.com/">
          <Image src={instagram} alt="Instagram icon" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/home">
          <Image src={twitter} alt="Twitter icon" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/home">
          <Image src={facebook} alt="Facebook icon" />
        </a>
      </li>
      <li>
        <a href="#">
          <Image src={whatsapp} alt="Whatsapp icon" />
        </a>
      </li>
    </ul>
  );
}
