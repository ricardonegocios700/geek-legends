import InfoGeek from "../../components/infoGeek/index";
import BoxTreasure from "../../components/boxTreasure/index";
import { ContainerDash } from "./styles";

const Dashboard = () => {
  return (
    <ContainerDash>
      <header>componente de cima</header>
      <div>
        <InfoGeek />
        <section>
          <div>Message sansei</div>
          <BoxTreasure />
        </section>
      </div>
    </ContainerDash>
  );
};

export default Dashboard;
