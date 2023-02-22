/* import 'bootstrap/dist/css/bootstrap.min.css';
import './albumCarousel.css'
import Carousel from 'react-bootstrap/Carousel';

const AlbumCarousel = () => {
    return (
        <div className='carouselFont'>
            <Carousel variant="dark" className='carouselFont carouselCont'>
            <Carousel.Item>
                <img
                className="d-block w-50"
                src="./img/albumCarousel/Sarajevo.jpeg"
                alt="First slide"
                />
                <iframe style={{borderRadius:'12px'}} 
                src="https://open.spotify.com/embed/album/0a9EXZcAMNP5bIaJTOIeaD?utm_source=generator" 
                width="100%" height="352" frameBorder="0" allowFullScreen="" 
                allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"></iframe>
            </Carousel.Item>
            <Carousel.Item className=''>
                <img
                className="d-block w-50"
                src="./img/albumCarousel/Las-Cosas-son-Asi.png"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className=''>
                <img
                className="d-block w-50"
                src="./img/albumCarousel/Desenredandome.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            
        </div>

    );
}

export default AlbumCarousel; */