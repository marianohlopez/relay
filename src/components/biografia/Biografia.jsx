import React from 'react';
import './biografia.css'
import biografia1 from './relay_biografia_1.png'
import biografia2 from './relay_biografia_2.png'
import biografia3 from './relay_biografia_3.png'

const Biografia = () => {
    return (
        <div className='image'>
            <div>
                <img className='images_bio' src={biografia1} alt="relay_bio_1"/>
                <img className='images_bio' src={biografia2} alt="relay_bio_1" style={{marginLeft: '5%', marginRight: '5%'}}/>
                <img className='images_bio' src={biografia3} alt="relay_bio_1" />


            </div>
  <div className="texto">

  <p>Relay! es una banda oriunda del barrio de Almagro, Ciudad de Buenos Aires. Su sonido se caracteriza
por combinar elementos del Pop moderno y el Hard Rock de los 90’s con la adrenalina característica del
Rock Argentino.</p>
<p>
Conformado por Alejo Fumarola en batería, Damián Gallego en guitarra y José Martins en Bajo y voz,
el grupo está activo desde el año 2016 hasta la actualidad.
</p>
<p>
El proyecto Relay! nace con el propósito de convertirse en un espacio donde los miembros de la banda
puedan expresar sus ideas y sentimientos, poniendo sus experiencias propias en canciones. El objetivo
siempre fue el mismo: Hacer música entre amigos y encontrar gente que pueda sentirse identificada
con el mensaje que la banda da y, finalmente, crear una comunidad a partir de ello.
</p>
        </div>
</div>
    );
}

export default Biografia;
