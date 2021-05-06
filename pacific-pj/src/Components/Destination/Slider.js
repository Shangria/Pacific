import { useEffect, useState } from "react";
import Glide from '@glidejs/glide';
import { Slide } from './Slide';

const Slider=({destinationData})=>{

    useEffect(() => {
        new Glide('.glide', {
            type: 'carousel',
            startAt: 0,
            perView: 4,
            breakpoints: {
                768: {
                    perView: 1,
                }
            },
        }).mount();
    }, []);

    const [active, setActive]=useState(false);

 const handleClick=(e)=>{
     console.log(e)
     setActive(!active);
 };

    return(
        <div className="glide">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {
                        destinationData.map((slide, i)=>{
                            return(
                                <Slide
                                    key={i+'slide'}
                                    slide={slide}
                                />
                            )
                        })
                    }
                </ul>
            </div>
            <div className="glide__bullets" data-glide-el="controls[nav]">
                {
                    destinationData.map((val,i)=>{
                        return(
                            <>
                                {
                                    i<=1 ?
                                        <button className={`glide__bullet ${active ? 'active' : ''}`}
                                                data-glide-dir={`=+${i}`}
                                                onClick={() => handleClick}
                                        >
                                        </button>
                                        :
                                        ""
                                }
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
};
export default Slider;