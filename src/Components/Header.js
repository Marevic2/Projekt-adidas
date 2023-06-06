import Logo from "../adidas.jpg";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <table>
        <tr>
          <th><img className="logo" src={Logo}></img></th>
          <th><h1>Adidas</h1></th>
        </tr>
      </table>
      <table>
        <tr>
          <th className="th"><Link to={'/'} className="link">Općenito</Link></th>
          <th className="th"><Link to={'/povijest'} className="link">Povijest</Link></th>
          <th className="th"><Link to={'/logo'} className="link">Logo</Link></th>
          <th className="th"><Link to={'/trgovina'} className="link">Trgovina</Link></th>
        </tr>
      </table>
    </div>
  );
}

export default Header;