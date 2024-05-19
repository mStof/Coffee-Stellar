import Image from "next/image";

export default function CardImage({ image , alt}) {
    return (
        <Image src={image} alt={alt} className="card_image"/>
    )
}