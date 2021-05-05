import {useState, useEffect} from "react";
import {TabContent} from './TabContent';



export function TabsComponent({TabsData}) {
    const [active, setActive] = useState(0);
    const [runAnimation, setRunAnimation] = useState(false);


    const handleClick = (i) => {
        setActive(i);
        setRunAnimation(!runAnimation);
    }
    useEffect(() => {
        setRunAnimation(true)
    }, [runAnimation]);

    return (
        <div className="hero__tab-container">
            <ul className="hero__tab">
                {TabsData.map((value, i) => (
                    <li key={i + 'search'}
                        className={`hero__tab-links ${i === active ? 'active' : ''}`}
                        onClick={e => {
                            handleClick(i)
                        }}
                        data-index={i}
                    >{value.title}</li>
                ))}
                <ul className="hero__tab-content-items">
                    {TabsData[active] && <TabContent  {...TabsData[active]} active={active} runAnimation={runAnimation}/>}
                </ul>
            </ul>
        </div>
    );
}

