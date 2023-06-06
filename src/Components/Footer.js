import Slika from '../bili.jpg';
import Instagram from '../ig.png';
import Facebook from '../fb.png';
import Twitter from '../tw.png';

function Footer() {
    return (
      <div className="Footer">
        <a href='https://www.adidas.com/us' target='blank'><img src={Slika} className='footerslika'></img></a>
        <a href='https://www.instagram.com/adidas/?hl=en' target='blank'><img src={Instagram} className='footerslika'></img></a>
        <a href='https://www.facebook.com/adidas/' target='blank'><img src={Facebook} className='footerslika'></img></a>
        <a href='https://twitter.com/adidas?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target='blank'><img src={Twitter} className='footerslika'></img></a>
        <p id='footertekst'>Luka Marević g2p © 2023</p>
      </div>
    );
  }
  
  export default Footer;