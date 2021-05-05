import ImageCard from '../InformationAdventure/ImageCadr';

const ImagesInfo = ({dataImg}) => {
    return (
        <ul className="inform-adventure__images-cards">
            {dataImg.map((li, index)=>{
                return(
                    <ImageCard key={index} li={li}/>
                    )
                })
            }
        </ul>
    )
};
export default ImagesInfo;