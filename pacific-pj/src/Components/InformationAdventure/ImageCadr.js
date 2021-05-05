
 const ImageCard = ({li}) => {
    console.log(`li${li}`)
    return (
        <li
            className="inform-adventure__image-card"
            style={{backgroundImage: `url(${li.img})`}}
        >
            <h3 className="inform-adventure__card-title">{li.title}</h3>
            <p className="inform-adventure__card-text">{li.text}</p>
        </li>
    )
};
export default ImageCard;