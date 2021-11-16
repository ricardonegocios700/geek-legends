import Button from "../../components/Button";
import { ButtonsDiv, HomeContainer, TeamSection, TitleSection } from "./styles";
import Beatriz from "../../assets/beatriz.png";
import Roberto from "../../assets/roberto.png";
import Ricardo from "../../assets/ricardo.png";
import Sthefany from "../../assets/sthefany.png";
import spider from "../../assets/spider-man.gif";
import iron from "../../assets/iron-man.gif";
import flash from "../../assets/flash.gif";
import darth from "../../assets/darth_vader.gif";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  const handleSignUp = () => {
    history.push("/signup");
  };

  return (
    <HomeContainer>
      <TitleSection>
        <div>
          <img src={spider} alt="" />
          <img src={iron} alt="" />
        </div>

        <h1>GeekLegends</h1>

        <div>
          <img src={flash} alt="" />
          <img src={darth} alt="" />
        </div>
      </TitleSection>

      <ButtonsDiv>
        <Button handleClick={handleLogin} type="submit" title="LOGIN" />
        <Button handleClick={handleSignUp} type="submit" title="CADASTRO" />
      </ButtonsDiv>

      <TeamSection>
        <h3>GEEK TEAM</h3>
        <div className="containerDevs">
          <div>
            <img src={Beatriz} alt="" />
            <h4>Beatriz</h4>
            <h5> Scrum Master </h5>
          </div>
          <div>
            <img src={Ricardo} alt="" />
            <h4>Ricardo</h4>
            <h5> Product Owner </h5>
          </div>
          <div>
            <img src={Roberto} alt="" />
            <h4>Roberto</h4>
            <h5> Tech Leader </h5>
          </div>
          <div>
            <img src={Sthefany} alt="" />
            <h4>Sthéfany</h4>
            <h5> Quality Assurance</h5>
          </div>
        </div>
      </TeamSection>
    </HomeContainer>
  );
};

export default Home;
