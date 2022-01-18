import { ProfileInfo } from "../../profile-info/ProfileInfo.component";
import "./game-card.stye.scss";

interface props {
  profile: { img: string; name: string; login: string };
  img: string;
  title: string;
  desc: string;
}

export const GameCard = ({ profile, img, title, desc }: props) => {
  return (
    <div className="game-card">
      <div className="game-card__top">
        <ProfileInfo {...profile}></ProfileInfo>
      </div>

      <div className="game-card__bot">
        <div className="img-box">
          <img src={img} alt="demo" />
        </div>
        <div className="text-box">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
