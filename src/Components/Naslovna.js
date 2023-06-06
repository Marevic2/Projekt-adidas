import Props from "./Props";
import Messi from "../messi.jpg";

function Naslovna() {
    let Prodaja = {
        prva: "14 492",
        druga: "15 534",
        treca: "16 915",
        cetvrta: "19 291",
        peta: "21 218",
        sesta: "21 915",
        sedma: "23 640",
        osma: "19 844",
        deveta: "21 234",
    }

    let ebi = {
        prva: "1 202",
        druga: "883",
        treca: "1 039",
        cetvrta: "1 491",
        peta: "2 070",
        sesta: "2 368",
        sedma: "2 660",
        osma: "751",
        deveta: "1 986",
    }

    let dohodak = {
        prva: "787",
        druga: "490",
        treca: "634",
        cetvrta: "1 017",
        peta: "1 097",
        sesta: "1 702",
        sedma: "1 976",
        osma: "432",
        deveta: "2 116",
    }
    return (
        <div className="div">
            <h2>Općenito</h2>
            <p>Adidas AG je njemačka korporacija za sportsku odjeću i obuću sa sjedištem u Herzogenaurachu, Bavarska, Njemačka. Najveći je proizvođač sportske odjeće u Europi, a drugi najveći u svijetu, nakon Nikea. To je holding kompanija za Adidas grupu, koja se sastoji od 8,33% udjela nogometnog kluba Bayern München, i Runtastic , austrijska tvrtka za fitnes tehnologiju. Adidasov prihod za 2018. iznosi 21,915 milijardi eura.</p>

            <div className="empty"></div>

            <div align="center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41396.28917842514!2d10.87410745!3d49.57383204999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a2016ea9f04ae1%3A0x41eda32beb5f7b0!2s91074%20Herzogenaurach%2C%20Germany!5e0!3m2!1sen!2shr!4v1685634311471!5m2!1sen!2shr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br />
                Grad glavnog sjedišta Adidasa
            </div>

            <div className="empty"></div>

            <Props prodaja={Prodaja} eb={ebi} neto={dohodak}></Props>

            <div className="empty"></div>

            <p>
                <p id="messi"><img src={Messi}></img><br/>Lionel Messi u Adidas tenisicama</p>
                Adidas ima brojne velike ugovore o opremi s nogometnim klubovima diljem svijeta, uključujući njihovog glavnog sponzora Bayern München. Njihove sponzorirane reprezentacije uključuju Njemačku, Španjolsku, Meksiko, Argentinu, Švedsku, Japan, Mađarsku, Belgiju, Kolumbiju, Wales i Italiju. Sponzorirarli su i mnoge igrače, uključujući Lionela Messija, Zinedinea Zidanea, Kaká-u, Davida Beckhama, Stevena Gerrarda, Garetha Balea, Thomasa Müllera, Xavija, Mesuta Özila, Jamesa Rodrígueza, Ikera Casillasa, Arjena Robbena, Paula Pogbu, Luisa Suáreza, Ivana Rakitića, Mohameda Salaha, Roberta Firmina, Paula Dybalu i Manuela Neuera.
            </p>
        </div>
    );
}

export default Naslovna;