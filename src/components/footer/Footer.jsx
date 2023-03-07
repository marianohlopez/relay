import React from 'react';
import './footer.css'


const Footer = () => {
    return (
        <div className='footer'>
            <span className='footer_text'>SEGUINOS</span>
            <hr className='hr'/>
            <div className='logos'>

            <a href="https://www.instagram.com/relayoficial/?hl=es" target="_blank"  rel="noopener noreferrer"> <div className='div_img_footer ig'></div></a>
            <a href="https://www.youtube.com/@relayoficial8818" target="_blank"  rel="noopener noreferrer" ><div className='div_img_footer youtube'></div></a>
            <a href="https://open.spotify.com/artist/17VVNVczAolAC7Z0daKlSN?si=TxYdWhnUQu2yKUTLSPEMHg" target="_blank"  rel="noopener noreferrer" ><div className='div_img_footer spotify'></div></a>
            <a href="https://www.tiktok.com/@relayband" target="_blank"  rel="noopener noreferrer" > <div className='div_img_footer tiktok'></div></a>
            <a href="https://twitter.com/relaybanda" target="_blank"  rel="noopener noreferrer" ><div className='div_img_footer twitter'></div></a>
            <a href="https://www.facebook.com/relayoficial" target="_blank"  rel="noopener noreferrer" ><div className='div_img_footer fb'></div></a>
            <a href="" target="_blank"  rel="noopener noreferrer" > <div className='div_img_footer div_img_footer_last mail'></div></a>
            </div>
        </div>
    );
}

export default Footer;
