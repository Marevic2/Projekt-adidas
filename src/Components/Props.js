function Props({ prodaja, eb, neto }) {
  return (
    <div className="Props">
      <center>
        <h3>Financije u milijunima eura</h3>
        <table border="1px" id="tablica">
          <tr>
            <th>Godina</th>
            <th>2013.</th>
            <th>2014.</th>
            <th>2015.</th>
            <th>2016.</th>
            <th>2017.</th>
            <th>2018.</th>
            <th>2019.</th>
            <th>2020.</th>
            <th>2021.</th>
          </tr>
          <tr>
            <th>Prodaje</th>
            <td>{prodaja.prva}</td>
            <td>{prodaja.druga}</td>
            <td>{prodaja.treca}</td>
            <td>{prodaja.cetvrta}</td>
            <td>{prodaja.peta}</td>
            <td>{prodaja.sesta}</td>
            <td>{prodaja.sedma}</td>
            <td>{prodaja.osma}</td>
            <td>{prodaja.deveta}</td>
          </tr>
          <tr>
            <th>EBITDA</th>
            <td>{eb.prva}</td>
            <td>{eb.druga}</td>
            <td>{eb.treca}</td>
            <td>{eb.cetvrta}</td>
            <td>{eb.peta}</td>
            <td>{eb.sesta}</td>
            <td>{eb.sedma}</td>
            <td>{eb.osma}</td>
            <td>{eb.deveta}</td>
          </tr>
          <tr>
            <th>Neto dohodak</th>
            <td>{neto.prva}</td>
            <td>{neto.druga}</td>
            <td>{neto.treca}</td>
            <td>{neto.cetvrta}</td>
            <td>{neto.peta}</td>
            <td>{neto.sesta}</td>
            <td>{neto.sedma}</td>
            <td>{neto.osma}</td>
            <td>{neto.deveta}</td>
          </tr>
        </table>
      </center>
    </div>
  );
}

export default Props;