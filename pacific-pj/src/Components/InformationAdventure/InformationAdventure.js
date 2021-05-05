import React from "react";
import {Container} from "react-bootstrap";
import '../../styles/InformAdventure.scss'
import Info from '../InformationAdventure/Info';
import ImagesInfo from './ImagesInfo';
import { AdventureData } from '../InformationAdventure/InformAdventureData';


const InformationAdventure=()=>{
return(
    <section className="inform-adventure">
        <Container>
            <div className="inform-adventure__wrapper">
                <ImagesInfo data={AdventureData}/>
                <Info data={AdventureData}/>
            </div>
        </Container>
    </section>
)};

export  default InformationAdventure;