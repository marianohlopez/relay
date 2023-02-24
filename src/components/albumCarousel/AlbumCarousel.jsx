import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './albumCarousel.css'
import Carousel from 'react-bootstrap/Carousel';
import AlbumButtom from './AlbumButtom';

const AlbumCarousel = () => {

    const [display, setDisplay] = useState('albumPlayer')

    const [hovered, setHovered] = useState(false);
    
    const displayPlayer = () => display === "albumPlayer" ? setDisplay("albumPlayerActive") : setDisplay("albumPlayer") 

    return (
        <div className='carouselFont'>
            <Carousel variant="dark" indicators={false}>
                <Carousel.Item>
                    <div className="d-flex justify-content-center align-items-center"> 
                        <img
                            className="imageAlbum"
                            src="./img/albumCarousel/Sarajevo.jpeg"
                            alt="First slide"
                        />
                        <AlbumButtom displayPlayer={displayPlayer} classPlayer={display} />
                        <iframe className={display} style={{borderRadius:'12px', zIndex: "2"}} 
                            src="https://open.spotify.com/embed/album/0a9EXZcAMNP5bIaJTOIeaD?utm_source=generator" 
                            width="40%" height="352" frameBorder="0" allowFullScreen="" 
                            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy">
                        </iframe>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center align-items-center">
                        <img
                            className="imageAlbum"
                            src="./img/albumCarousel/Las-Cosas-son-Asi.png"
                            alt="Second slide"
                        />
                        <AlbumButtom displayPlayer={displayPlayer} classPlayer={display} />
                        <iframe className={display} style={{borderRadius:'12px', zIndex: "2"}} 
                            src="https://open.spotify.com/embed/album/6s6NIePkgyzd8YRxNQO4Un?utm_source=generator" 
                            width="40%" height="352" frameBorder="0" allowFullScreen="" 
                            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy">
                        </iframe>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center align-items-center">
                        <img
                        className="imageAlbum"
                        src="./img/albumCarousel/Desenredandome.jpg"
                        alt="Third slide"
                        />
                        <AlbumButtom displayPlayer={displayPlayer} classPlayer={display} />
                        <iframe className={display} style={{borderRadius:'12px', zIndex: "2"}} 
                            src="https://open.spotify.com/embed/album/2O1Nqj57Ne8huog7PiMsaS?utm_source=generator" 
                            width="40%" height="352" frameBorder="0" allowFullScreen="" 
                            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy">
                        </iframe>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center align-items-center">
                        <img
                        className="imageAlbum"
                        src="./img/albumCarousel/Quedarnos-Quietos.jpg"
                        alt="First slide"
                        />
                        <AlbumButtom displayPlayer={displayPlayer} classPlayer={display} />
                        <iframe className={display} style={{borderRadius:'12px', zIndex: "2"}} 
                            src="https://open.spotify.com/embed/album/6hzvfxV9xXaepasZRNPIeZ?utm_source=generator" 
                            width="40%" height="352" frameBorder="0" allowFullScreen="" 
                            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy">
                        </iframe>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                     className="logoContainer">
                        {hovered? <img className='imgLogo' src="./img/albumCarousel/logo-blanco.png" alt="Logo rojo"/> 
                        : <img className='imgLogo' src="./img/albumCarousel/logo-rojo.png" alt="Logo rojo"/>}
                        {hovered? <a href="https://open.spotify.com/artist/17VVNVczAolAC7Z0daKlSN" target="_blank">
                            <img className='spotifyButton2' src="./img/albumCarousel/spotify-rojo.png" 
                            alt="boton a Spotify" /></a> :  
                            <a href="https://open.spotify.com/artist/17VVNVczAolAC7Z0daKlSN" target="_blank">
                            <img className='spotifyButton' src="./img/albumCarousel/spotify-violeta.png" 
                            alt="boton a Spotify" />
                        </a>}
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>

    );
}

export default AlbumCarousel;