import React from 'react';
import Marquee from "react-fast-marquee";
import './MarqueeNews.css';


const MarqueeNews = ({Texts=[],Repeat=10}) => {
 

return (
        <>
     <Marquee className="marquee_home" gradient={false}>

{
     [...Array(Repeat)].map(e => (Texts?.map((text, index) => ( 
        <span key={(index+1)} className='marquee_text'>{text}<img className='marquee_logo' src="/img/Logo2-violeta.png" alt="Home_relay" /></span>)
        )))
            
}
        </Marquee>  


</>
    );
}

export default MarqueeNews;
