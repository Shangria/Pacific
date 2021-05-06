const Info = ({dataInfo}) => {
    return (
        <div className="inform-adventure__article">
            {
                dataInfo.map(value => {
                    return (
                        <>
                            <h4 className="inform-adventure__article-min-title">{value.titleInfo}</h4>
                            <h2 className="inform-adventure__article-title">{value.bgTitle}</h2>
                            <p className="inform-adventure__article-text">{value.pInfo1}</p>
                            <p className="inform-adventure__article-text">{value.pInfo2}</p>
                        </>
                    )
                })
            }
            <button className="inform-adventure__article-btn">Search Destination</button>
        </div>
    )
};
export default Info;