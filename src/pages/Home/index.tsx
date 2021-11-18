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
            <a href="https://www.linkedin.com/in/beatriz-alves-arruda-de-oliveira-130768127/">
              Beatriz
            </a>
            <h5> Scrum Master </h5>
          </div>
          <div>
            <img src={Ricardo} alt="" />
            <a href="https://www.linkedin.com/in/ricardoliveira700/">Ricardo</a>
            <h5> Product Owner </h5>
          </div>
          <div>
            <img src={Roberto} alt="" />
            <a href="https://www.linkedin.com/in/roberto-bressanelli-1814b015/">
              Roberto
            </a>
            <h5> Tech Leader </h5>
          </div>
          <div>
            <img src={Sthefany} alt="" />
            <a href="https://www.linkedin.com/in/sthefanyagomes/">Sthéfany</a>
            <h5> Quality Assurance</h5>
          </div>
        </div>
      </TeamSection>
      <audio autoPlay={true} controls={false} loop={true} preload="auto">
        <source
          src="https://www.mysamsungringtones.com/wp-content/uploads/2020/02/avengers-theme-song-download.mp3?_=1"
          type="audio/mp3"
        />
        seu navegador não suporta HTML5
      </audio>
    </HomeContainer>
  );
};

export default Home;
