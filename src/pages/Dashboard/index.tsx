import InfoGeek from "../../components/infoGeek/index";
import BoxTreasure from "../../components/boxTreasure/index";
import Header from "../../components/Header";
import { ContainerDash, Space } from "./styles";
import MessageSensei from "../../components/msgRandom";
import { useEffect } from "react";
import { useAuth } from "../../Providers/user";

const Dashboard = () => {
  const {} = useAuth();
  useEffect(() => {
    //window.location.reload();
  }, []);

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
      <audio autoPlay={true} controls={false} loop={true}>
        <source
          src="https://ringtonazer.b-cdn.net/fetch/aa/aa91bf6b82284171436f530bf27d5e8f.mp3"
          type="audio/mp3"
        />
        seu navegador não suporta HTML5
      </audio>
    </ContainerDash>
  );
};

export default Dashboard;
