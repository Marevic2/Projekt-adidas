import Dassler from './dassler.png';
import Adolf from './adolf.png';
import Trolist from './trolist.png';
import Planina from './logo.png';
import Neo from './neo.png';
import Rijeci from './rici.png';
import Crte from './crte.png';

function Logo() {
    return (
        <div className="div">
            <center>
                <h2>Logo</h2>
                <h3>Do 1971.</h3>
                <div>
                    <img src={Dassler} className='slika' id='dassler'></img>
                    <img src={Adolf} className='slika' id='adolf'></img>
                    <p>Do 1924. godine sportske cipele su hvatale paru. Braća su prodavala 200.000 pari godišnje pod Dassler logom. Izvorni logo prikazivao je pticu koja nosi laganu cipelu unutar štita. <br /><br />
                        Prva promjena Adidasovog loga zamijenila je 1949. ime Dassler s Adolf Dassler. Sportska cipela je detaljnija sa šiljcima i tri pruge. <br /> </p>
                    <img src={Crte} className='slika'></img>
                    <p>Znak s tri pruge Adolf je kupio je 1952. od finskog proizvođača obuće Karhu Sports za dvije boce viskija i 1600 eura. Ovo je najtradicionalniji oblik logotipa.
                    </p>
                </div>

                <div className='empty'></div>

                <h3>Trolist - 1971.</h3>
                <div>
                    <img src={Trolist} className='slika'></img>
                    <p>Tvrtka je 1971. počela proizvoditi odjeću, pa su promijenili oblik logotipa u ikonični trolist. Ovaj logotip se sastoji od tri oblika lopte američkog nogometa raspoređenih tako da je donji dio zakrivljen. Ova verzija iz 1970-ih sada je povratna verzija koja se koristi za liniju Adidas Originals. <br /><br />
                        Trolist je trebao prikazati raznolikost proizvoda, a istovremeno uključivati ikonične tri linije po kojima je marka brzo postala poznata. Tri lista predstavljaju Sjevernu Ameriku, Europu i Aziju - kontinente na kojima su se prodavale Adidas cipele.</p>
                </div>

                <div className='empty'></div>

                <h3>Planina - 1991.</h3>
                <div className='divlogo' id="divplanina">
                    <img src={Planina} className='slika' id='logo'></img>
                    <p>
                        Do 90-ih godina prošlog stoljeća, logotip je prešao na drugu ikoničnu verziju trojke linija koja se sada koristi za Performance proizvode. Pruge koje su se prije koristile bile su pomaknute pod blagim kutom, prikazujući kako su izgledale na cipelama. Snažne tri pruge raspoređene su u ikonu u obliku planine koja predstavlja prepreku koju treba savladati.
                    </p>
                </div>

                <div className='empty'></div>

                <h3>NEO - 2002.</h3>
                <div>
                    <img src={Neo} className='slika' id='neo'></img>
                    <p>Godine 2002. pruge su bile sadržane u krugu, izgledajući poput životinjske ogrebotine ili tri staze koje idu u pozadinu.<br /><br /> Pruge ovdje poprimaju stilizirani izgled, a krajevi su manji jer se spuštaju u laganom luku prema desnoj strani. Ovaj logo sada predstavlja linije proizvoda Adidas Style.</p>
                </div>

                <div className='empty'></div>

                <h3>2005.</h3>
                <div className='divlogo'>
                    <p>Logo tvrtke je bezvremenski poziv na jednostavnost tri pruge koje su marku učinile tako lakom za prepoznavanje. Dovoljno je općenit da pokrije sva područja marke, a da istovremeno zadrži ukupnu estetiku tvrtke.</p>
                    <img src={Rijeci} className='slika'></img>
                </div>
            </center>
        </div>
    );
}

export default Logo;