import React from 'react';
import Marquee from "react-fast-marquee";
import './MarqueeNews.css';


const MarqueeNews = ({Texts=[]}) => {
let code=[];
for(let i=0; i<10; i++){
    Texts?.map(text => ( 
        code.push(<><span className='marquee_text'>{text}</span><img className='marquee_logo' src="/img/Logo2-violeta.png" alt="Home_relay" /></>)
        ))
            
}
return (
        <>
     <Marquee gradient={false} style={{overflow: 'hidden', backgroundColor: '#0C0301'}}>

{code}
        </Marquee>  


</>
    );
}

export default MarqueeNews;
