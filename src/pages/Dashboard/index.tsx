import InfoGeek from "../../components/infoGeek/index";
import BoxTreasure from "../../components/boxTreasure/index";
import Header from "../../components/Header";
import { ContainerDash, Logout, Space } from "./styles";
import MessageSensei from "../../components/msgRandom";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();

  return (
    <ContainerDash>
      <Header />
      <Space> </Space>
      <div>
        <InfoGeek />
        <section>
          <MessageSensei />
          <BoxTreasure />
        </section>
      </div>
      <audio autoPlay={true} controls={false} loop={true} preload="auto">
        <source
          src="https://ringtonazer.b-cdn.net/fetch/aa/aa91bf6b82284171436f530bf27d5e8f.mp3"
          type="audio/mp3"
        />
        seu navegador não suporta HTML5
      </audio>
      <Logout>
        {
          <FiLogOut
            onClick={() => {
              localStorage.removeItem("@geekLegends:access");
              toast.success("Logout efetuado! Volte Logo!!");
              history.push("/");
            }}
          />
        }
      </Logout>
    </ContainerDash>
  );
};

export default Dashboard;
