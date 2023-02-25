import { useState } from "react";
import NavBar from "../navbar/Navbar";
import "./home.css"

const Home = () => {
    const [font, setFont] = useState('font')

    const darkFont = () => font === 'font'? setFont('darkFont') : setFont('font');
    
    return (
        <div id='bandLogo' className={font}>
            <NavBar Toggle={darkFont}/>
        </div>
    );
}

export default Home;