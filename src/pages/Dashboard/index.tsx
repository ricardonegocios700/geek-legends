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
    </ContainerDash>
  );
};

export default Dashboard;
