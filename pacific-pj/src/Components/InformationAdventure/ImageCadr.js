const ImageCard = ({li}) => {
    return (
        <li
            className="inform-adventure__image-card"
            style={{backgroundImage: `url(${li.img})`}}
        >
            <div className="inform-adventure__icon-wrap">
                <img className="inform-adventure__icon" src={li.icon} alt={li.alt}/></div>
            <div className="inform-adventure__text-wrapper">
                <h3 className="inform-adventure__card-title">{li.title}</h3>
                <p className="inform-adventure__card-text">{li.text}</p>
            </div>
        </li>
    )
};
export default ImageCard;