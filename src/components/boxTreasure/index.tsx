import { Link } from "react-router-dom";
import { ContainerTreasure } from "./styles";
import figInvasor from "./../../assets/invasor.png";
import figWolf from "./../../assets/lobo.png";
import figMiner from "./../../assets/pessoa-machado.png";
import figDraco from "./../../assets/dragão.png";

export const BoxTreasure = () => {
    return (
        <ContainerTreasure>
            <h4>Geek's Treasure</h4>
            <nav>
                <Link to="/myxfilegeek">
                    <img src={figWolf} alt="Personas"></img>
                </Link>
                <Link to="/mymultimedia">
                    <img src={figDraco} alt="Personas"></img>
                </Link>
                <Link to="/mygeekstore">
                    <img src={figMiner} alt="Personas"></img>
                </Link>
                <Link to="/mypersona">
                    <img src={figInvasor} alt="Personas"></img>
                </Link>
            </nav>
            <p>selecione um item acima e viaje</p>
        </ContainerTreasure>
    );
};

export default BoxTreasure;
