const ImageCard = ({li}) => {
    return (
        <li
            className="inform-adventure__image-card"
            style={{background: `url(${li.img})`}}
        >
            <div className="inform-adventure__icon-wrap">
                <img className="inform-adventure__icon" src={li.icon} alt={li.alt}/></div>
            <h3 className="inform-adventure__card-title">{li.title}</h3>
            <p className="inform-adventure__card-text">{li.text}</p>
        </li>
    )
};
export default ImageCard;