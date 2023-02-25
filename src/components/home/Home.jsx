import { useState } from "react";
import NavBar from "../navbar/Navbar";
import "./home.css"

const Home = () => {
    const [font, setFont] = useState('font')

    const darkFont = () => font === 'font'? setFont('darkFont') : setFont('font');
    
    return (
    <>
        <NavBar Toggle={darkFont}/>

    <div id='bandLogo' className={font}>
        </div>
        </>);
}

export default Home;