import './albumCarousel.css';

const AlbumButtom = ({displayPlayer}) => {

    return (
        <button onClick={displayPlayer} className="albumButton">+</button>
    )
}

export default AlbumButtom;