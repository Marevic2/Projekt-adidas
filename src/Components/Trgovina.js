import { Component } from "react";
import Gazelle from '../gazelle.jpg';
import Superstar from '../superstar.jpg';
import Grand from '../grand court.jpg';
import EQ21 from '../eq21.jpg';
import Ultraboost from '../ultraboost.jpg';
import Stan from '../stan.jpg';

export class Trgovina extends Component {
    render() {
        return (
            <center>
                <div className="div">
                    <h2>Trgovina</h2>
                    <table border="1px">
                        <tr>
                            <th><img src={Gazelle}></img></th>
                            <th><img src={Ultraboost}></img></th>
                            <th><img src={Grand}></img></th>
                        </tr>
                        <tr>
                            <td>Gazelle, 100€ <span>Dodaj u košaru<input type="checkbox"></input></span></td>
                            <td>Ultraboost, 190€ <span>Dodaj u košaru<input type="checkbox"></input></span></td>
                            <td>Grand Court, 70€ <span>Dodaj u košaru<input type="checkbox"></input></span></td>
                        </tr>
                        <tr>
                            <th><img src={EQ21}></img></th>
                            <th><img src={Superstar}></img></th>
                            <th><img src={Stan}></img></th>
                        </tr>
                        <tr>
                            <td>EQ21, 80€ <span>Dodaj u košaru<input type="checkbox"></input></span></td>
                            <td>Superstar, 100€ <span>Dodaj u košaru<input type="checkbox"></input></span></td>
                            <td>Stan Smith, 105€ <span>Dodaj u košaru<input type="checkbox"></input></span></td>
                        </tr>
                    </table>

                    <div className="empty"></div>
                    <div id="form" className="divlogo">
                        <form>
                            <label>
                                Email:<br />
                                <input type="email" name="email" id="email" className="input" required></input>
                            </label><br />
                            <label>
                                Lozinka:<br />
                                <input type="password" name="lozinka" id="lozinka" className="input" required></input>
                            </label><br />
                            <label for="ime">
                                Ime:<br />
                                <input type="text" name="ime" id="ime" className="input" required></input>
                            </label><br />
                            <label>
                                Prezime:<br />
                                <input type="text" name="prezime" id="prezime" className="input" required></input>
                            </label><br />
                            <label>
                                Godine:<br />
                                <input type="number" name="godine" id="godine" className="input" required></input>
                            </label><br />
                            <label>
                                Mjesto Stanovanja:<br />
                                <input type="text" name="mjesto" id="mjesto" className="input" required></input>
                            </label><br />

                            <input type="checkbox"></input>Zapamti me <br />
                            <input type="reset" value="Resetiraj" className="button"></input>
                            <input type="submit" value="Pošalji" className="button"></input><br /><br />
                        </form>
                    </div>
                    <div id="popust">
                        <h2>Kupite 3 proizvoda za popust od 10%</h2>
                    </div>
                </div>
            </center>
        );
    }
}

export default Trgovina;