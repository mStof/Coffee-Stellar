export default function CardInfo({ title, description }) {
    return (
        <div className="card_info_container"> 
            <h2 className="info_title">{title}</h2>
            <p className="info_description" title={description}>{description}</p>
        </div>
    )
}