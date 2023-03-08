import './tours.css'
import logoFooter from './Logo-footer.png'
import { Helmet } from "react-helmet"

const Tours = () => {
    return (
        <>
            <div id='fechas'>
                <a href="https://www.songkick.com/artists/10240567" className="songkick-widget" 
                data-theme="dark" data-track-button="on" data-detect-style="true" data-font-color="#ffffff" 
                data-background-color="#000000" data-locale="es">Relay! (ARG) tour dates</a>
                <Helmet>
                <script src="//widget.songkick.com/10240567/widget.js"></script>
                </Helmet>
            </div>
        </>
            
        
    )
}

export default Tours;