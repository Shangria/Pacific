import React, {useState} from "react";
import Calendar from 'react-calendar';


export const TabContent = ({content}) => {

    const [showCalendar, setShowCalendar] = useState(false);
    const [calendarItem, setCalendarItem] = useState(null);

    const handleClickCalendar = () => {
        setShowCalendar(!showCalendar);
        console.log(showCalendar)
    };

    return (
        <>
            {
                content.map((val, i) => {
                    console.log(val.id, i)
                    return (
                        <li key={i} className='hero__tab-item'>
                            <h4 className='hero__tab-title'>{val.titleContent}</h4>
                            <div className="hero__icon">
                                {
                                    val.hasOwnProperty('select') ?
                                        <span className="hero__icon-item">{val.select}</span>
                                        :
                                        <>
                                            <span className="hero__icon-item">{val.icon}
                                            </span>
                                            {showCalendar && i === val.id ? <Calendar/> : ''}
                                            <input type="search" placeholder={val.placeholder}
                                                   onClick={handleClickCalendar}/>
                                        </>
                                }
                            </div>
                        </li>
                    )
                })
            }
            <li className='hero__tab-item'>
                <a href='\' className='hero__item-search'>search</a>
            </li>
        </>
    )
}
