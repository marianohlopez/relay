import './albumCarousel.css';

const AlbumButtom = ({displayPlayer, classPlayer}) => {
    if(classPlayer === "albumPlayerActive"){
        return (
            <button onClick={displayPlayer} className="albumButton">-</button>
        )
    }else {
        return (
            <button onClick={displayPlayer} className="albumButton">+</button>
        )
    }
}

export default AlbumButtom;