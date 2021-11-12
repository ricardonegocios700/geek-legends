import InfoGeek from "../../components/infoGeek";
import { Container } from "./styles";

const Dashboard = () => {
  return (
    <Container>
      <header>componente de cima</header>
      <div>
        <InfoGeek />
        <section>
          <div>geek treasure</div>
          <div>Message sansei</div>
        </section>
      </div>
    </Container>
  );
};

export default Dashboard;
