import {useState} from "react";
import {TabContent} from './TabContent';


export function TabsComponent({ TabsData }) {
    const [ active, setActive ] = useState(0);

    return (
        <div className="hero__tab-container">
            <ul className="hero__tab">
                {TabsData.map((value, i) => (
                    <li key={i+'search'}
                        className={`hero__tab-links ${i === active ? 'active' : ''}`}
                        onClick={e => {setActive(i)}}
                        data-index={i}
                    >{value.title}</li>
                ))}
                <ul className="hero__tab-content-items">
                {TabsData[active] && <TabContent  {...TabsData[active]} active={active} />}
                </ul>
            </ul>
        </div>
    );
}

