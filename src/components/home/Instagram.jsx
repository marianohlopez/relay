import React from 'react';
import {Helmet} from "react-helmet";

import './Instagram.css';

const Instagram = () => {
    return (
        <>
{/* 
<iframe src="https://snapwidget.com/embed/1024696" className=" snapwidget-widget" allowTransparency="true" frameBorder={0} scrolling="no" />

 */}
<script src="https://snapwidget.com/js/snapwidget.js"></script>

<div className="containerig">

<iframe  src="https://snapwidget.com/embed/1024996" className="responsive-iframe snapwidget-widget" allowTransparency="true" frameBorder={0} scrolling="no" style={{border: 'none', overflow: 'hidden', width: '100%'}} />
</div>

<div
  loading="lazy"
  data-mc-src="f7106534-7c8d-4bed-a630-b31ac1e859fc#null"></div>
        <Helmet>
<script 
  src="https://cdn2.woxo.tech/a.js#63ed704fbcc15ce5486d45e1" 
  async data-usrc>
</script>
</Helmet>
   
        </>
    );
}

export default Instagram;
