import Image from "next/image";

export default function LocateInfo({icons}) {

    const [accessTime, pinDrop, phone] = icons

    return (
        <>
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
        </>
    )
} 