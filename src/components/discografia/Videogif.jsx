import './videogif.css'
import gif_desktop from './relay_videos_desktop.png'
import gif_mobile from './relay_videos_mobile.png'

const Videogif = () => {
    return (
        <div id={"videos"} className="videogif" >
        <a href="https://www.youtube.com/@relayoficial8818" target="_blank"  rel="noopener noreferrer">
            <img className="videogifimg" src={gif_desktop} srcSet={`${gif_mobile} 360w, ${gif_desktop} 1440w`} 
            sizes="(max-width: 700px) 360px, (min-width: 701x) 1440px" alt="relay videos" /></a>
        </div>
    );
}

export default Videogif;
