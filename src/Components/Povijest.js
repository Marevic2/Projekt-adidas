import Izumitelj from '../adolfdassler.jpg';
import Owens from '../owens.jpg';
import Puma from '../puma.jpg';
import Portland from '../portland.jpg';

function Povijest() {
  return (
    <div className="div">
      <h2>Povijest</h2>
      <h3>Osnivanje</h3>
      <p>Tvrtku je osnovao Adolf Dassler, zvan Adi, koji je nakon povratka iz Prvog svjetskog rata izrađivao sportske cipele u majčinoj kuhinji ili praonici rublja u Herzogenaurachu u Njemačkoj. U srpnju 1924., njegov stariji brat Rudolf pridružio se poslu, koji je postao "Tvornica cipela braće Dassler".</p>

      <center>
        <img src={Izumitelj}></img><br />
        Adolf Dassler
      </center>

      <div className='empty'></div>

      <h3>Popularnost</h3>
      <p>Dassler je pomogao u razvoju tenisica za trčanje s šiljcima za više atletskih natjecanja. Kako bi poboljšao kvalitetu obuće s šiljcima, prešao je s prethodnog modela teških metalnih šiljaka na korištenje platna i gume. <br /> 1936. je uvjerio američkog sprintera Jesseja Owensa da koristi njegove ručno izrađene šiljke na Ljetnim olimpijskim igrama 1936, a nakon Owensove četiri zlatne medalje, ime i reputacija Dassler cipela postali su poznati svjetskim sportašima i njihovim trenerima. Dasslerovi su bili uspješni i svake godine prije Drugog svjetskog rata su prodali 200 000 pari cipela.</p>

      <center>
        <img src={Owens}></img><br />
        Owens 1936.
      </center>

      <div className='empty'></div>

      <h3>Drugi svjetski rat</h3>
      <p>Tijekom rata, tvrtka je vodila posljednju tvornicu sportske obuće u Njemačkoj i pretežno opskrbljivala Wehrmacht cipelama. 1943. proizvodnja cipela bila je prisiljena prekinuti rad, a pogoni i radna snaga tvrtke korišteni su za proizvodnju protutenkovskog oružja.</p>
      <p>Tvornica je bila gotovo uništena 1945. od strane američkih snaga, ali je pošteđena jer je supruga Adolfa Dasslera uvjerila američke vojnike da su tvrtka i njezini zaposlenici zainteresirani samo za proizvodnju sportske obuće. Američke okupacijske snage kasnije su postale glavni kupci cipela braće Dassler. </p>

      <div className='empty'></div>

      <h3>Razdvajanje</h3>
      <p>Dassleri su se razdvojili 1947. nakon što su odnosi među njima prekinuti. Adolf je 18. kolovoza 1949. osnovao tvrtku formalno registriranu kao Adidas AG, od Adi Dassler, a Rudolf je osnovao novu tvrtku koju je nazvao Ruda - od Rudolf Dassler, kasnije preimenovanu u Pumu. </p>

      <center>
        <img src={Puma}></img>
      </center>

      <p>Adidas i Puma su nakon razlaza ušli u žestoko poslovno rivalstvo, grad Herzogenaurach bio je podijeljen po tom pitanju, što je dovelo do nadimka "grad savijenih vratova" - ljudi su gledali dolje da vide koje cipele nose stranci. Čak su i dva gradska nogometna kluba bila podijeljena: ASV Herzogenaurach podržavao je Adidas, a 1 FC Herzogenaurach je podržavao Pumu. Braća se nikad nisu pomirila i iako su sada pokopani na istom groblju, razmaknuti su što je više moguće.</p>

      <div className='empty'></div>

      <h3>Zadnje godine</h3>
      <p>Adidas sada ima globalno korporativno sjedište u Herzogenaurachu u Njemačkoj i mnogim drugim poslovnim lokacijama diljem svijeta poput Londona, Portlanda, Toronta, Tokija, Australije, Tajvana i Španjolske.<br/>U siječnju 2015. Adidas je lansirao prvu mobilnu aplikaciju za rezervaciju obuće. Aplikacija Adidas Confirmed omogućuje potrošačima da rezerviraju ograničenu seriju tenisica marke korištenjem tehnologije geografskog ciljanja.<br/><br/>
      
      <center>
        <img src={Portland}></img><br/>
        Sjedište u Portlandu
      </center>

      <br/><br/>U kolovozu 2015. Adidas je kupio tvrtku za fitness tehnologiju Runtastic za otprilike 240 milijuna dolara.<br/>U svibnju 2017. Adidas je prodao tvrtku za golf TaylorMade tvrtki KPS Capital Partners za 425 milijuna dolara.<br/> U ožujku 2022. Adidas je prodao Reebok grupi Authentic Brands za otprilike 2.5 milijarde dolara.</p>
    </div>
  );
}

export default Povijest;