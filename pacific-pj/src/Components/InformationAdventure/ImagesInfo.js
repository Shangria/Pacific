import ImageCard from '../InformationAdventure/ImageCadr';

const ImagesInfo = ({data}) => {
    return (
        <ul className="inform-adventure__imagesCards">
            {data.map((li, index)=>{
                return(
                    <ImageCard key={index} li={li}/>
                    )
                })
            }
        </ul>
    )
};
export default ImagesInfo;