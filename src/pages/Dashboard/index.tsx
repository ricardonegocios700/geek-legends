import InfoGeek from "../../components/infoGeek/index";
import BoxTreasure from "../../components/boxTreasure/index";
import { ContainerDash } from "./styles";
import MessageSensei from "../../components/msgRandom";

const Dashboard = () => {
  return (
    <ContainerDash>
      <header>componente de cima</header>
      <div>
        <InfoGeek />
        <section>
          <MessageSensei />
          <BoxTreasure />
        </section>
      </div>
    </ContainerDash>
  );
};

export default Dashboard;
