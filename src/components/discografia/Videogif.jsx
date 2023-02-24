import React from 'react';
import './videogif.css'
import gif_desktop from './gif_desktop.gif'
import gif_mobile from './gif_mobile.gif'

const Videogif = () => {
    return (
        <div id={"videos"} className="videogif">
<img src={gif_desktop} srcSet={`${gif_mobile} 253w, ${gif_desktop} 1440w`} sizes="(max-width: 700px) 253px, (min-width: 701x) 1440px" alt="relay videos" />
        </div>
    );
}

export default Videogif;
