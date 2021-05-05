const Info = ({data}) => {
    return (
        <div className="inform-adventure__article">
            {
                data.map(value => {
                    return (
                        <>
                            <h4 className="inform-adventure__article-min-title">{value.titleInfo}</h4>
                            <h3 className="inform-adventure__article-title">{value.bgTitle}</h3>
                            <p className="inform-adventure__article-text">{value.pInfo1}</p>
                            <p className="inform-adventure__article-text">{value.pInfo2}</p>
                        </>
                    )
                })
            }
            <button className="inform-adventure__article-btn"></button>
        </div>
    )
};
export default Info;