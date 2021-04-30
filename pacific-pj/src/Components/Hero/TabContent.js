export const TabContent = ({content}) => {

    return (
        <>
            {
                content.map((val, i) => {

                    return (
                        <>
                            <li key={i} className='hero__tab-item'>
                                <h4 className='hero__tab-title'>{val.titleContent}</h4>
                                <div className="hero__icon">
                                    <span className="hero__icon-item">{val.icon}</span>
                                    <input type="search" placeholder={val.placeholder}/>
                                </div>
                            </li>
                        </>
                    )
                })
            }
            <li className='hero__tab-item'>
                <a href='\' className='hero__item-search'>search</a>
            </li>
        </>
    )
}
