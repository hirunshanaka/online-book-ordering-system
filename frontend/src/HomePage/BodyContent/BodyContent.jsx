import React from 'react';
import './BodyContent.css'; 
import slide_image_b from '../../assets/b.jpg';
import slide_image_c from '../../assets/c.jpg';
import slide_image_d from '../../assets/d.jpg';
import slide_image_e from '../../assets/e.jpg';
import slide_image_f from '../../assets/f.jpg';
import Footer from '../Footer/Footer';
import HeaderContent from '../HeaderContent/HeaderContent';

function BodyContent() {


  return (
    <>
    <HeaderContent/>
    <div className='marquee'>
     
      <b>Buy Bookz online shop </b>
      
    </div>
   
      <div className="image-gallery">
        <a href= "/RomanceNovels"><img src={slide_image_b} alt="b" className="image" /></a>
        <a href="/ScienceFictionBooks"><img src={slide_image_c} alt="c" className="image" /></a>
        <a href="/HorrorBooks"><img src={slide_image_d} alt="d" className="image" /></a>
        <a href="/HistoryBooks"><img src={slide_image_e} alt="e" className="image" /></a>
        <a href="/FantasyBooks"><img src={slide_image_f} alt="f" className="image" /></a>
        
    </div>
    
    <Footer/>
    </>
  );
}

export default BodyContent;
