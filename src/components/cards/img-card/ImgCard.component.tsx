import { HeartBtn } from "../../buttons/heart-btn/HeartBtn.component";
import "./img-card.style.scss";

interface props {
  profile: { img: string; name: string; login: string };
  img: string;
  title?: string;
}

export const ImgCard = ({ profile, img, title }: props) => {
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
      <div className="img-card__title">{title && <h2>{title}</h2>}</div>
      <div className="img-card__img">{img && <img src={img} alt="post" />}</div>
    </div>
  );
};
