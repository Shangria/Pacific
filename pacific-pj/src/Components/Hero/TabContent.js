import React, {useState} from "react";
import {CSSTransition} from "react-transition-group";


export const TabContent = ({
                               content,
                               runAnimation
                           }) => {

    const [showCalendar, setShowCalendar] = useState(false);
    const [calendarItem, setCalendarItem] = useState(null);

    // const handleClickCalendar = (e) => {
    //     setShowCalendar(!showCalendar);
    //     // console.log(showCalendar,  e.currentTarget.id)
    // };

    return (
        <>
            {
                content.map((val, i) => {
                    return (
                        <CSSTransition
                            in={runAnimation}
                            timeout={200}
                            classNames="my-node">
                            <li key={i} className='hero__tab-item'>
                                <h4 className='hero__tab-title'>{val.titleContent}</h4>
                                <div className="hero__icon">
                                    {
                                        val.hasOwnProperty('select') ?
                                            <span className="hero__icon-item">{val.select}</span>
                                            :
                                            <>
                                            <span className="hero__icon-item">{val.icon}</span>
                                                <input type="search" placeholder={val.placeholder}/>
                                            </>
                                    }
                                </div>
                            </li>
                        </CSSTransition>
                    )
                })
            }
            <CSSTransition
                in={runAnimation}
                timeout={300}
                classNames="my-node">
            <li className='hero__tab-item'>
                <a href='\' className='hero__item-search'>search</a>
            </li>
            </CSSTransition>
        </>
    )
}
