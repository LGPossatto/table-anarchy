import "./text-card.style.scss";
import { HeartBtn } from "../../buttons/heart-btn/HeartBtn.component";

interface props {
  profile: { img: string; name: string; login: string };
  desc: string;
}

export const TextCard = ({ profile, desc }: props) => {
  return (
    <div className="img-card">
      <div className="img-card-ribbon">
        <div className="img-card__profile">
          <div className="img-box">
            <img src={profile.img} alt="profile" />
          </div>
          <h3>{profile.name}</h3>
          <span>{profile.login}</span>
        </div>
        <HeartBtn onClick={() => console.log("heart btn")}></HeartBtn>
      </div>
      <div className="img-card__desc">{desc && <p>{desc}</p>}</div>
    </div>
  );
};
