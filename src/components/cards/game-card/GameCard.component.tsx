import "./game-card.stye.scss";
import { HeartBtn } from "../../buttons/heart-btn/HeartBtn.component";
import { ProfileInfo } from "../../profile-info/ProfileInfo.component";

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
        <HeartBtn
          active={false}
          onClick={() => console.log("gamecard heart")}
        ></HeartBtn>
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
