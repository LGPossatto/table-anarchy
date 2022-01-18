import { Link } from "react-router-dom";

import "./img-card.style.scss";
import { HeartBtn } from "../../buttons/heart-btn/HeartBtn.component";
import { ProfileInfo } from "../../profile-info/ProfileInfo.component";

interface props {
  profile: { img: string; name: string; login: string };
  img: string;
  href: string;
  title?: string;
}

export const ImgCard = ({ profile, img, href, title }: props) => {
  return (
    <div className="img-card">
      <div className="img-card-ribbon">
        <ProfileInfo {...profile}></ProfileInfo>
        <HeartBtn onClick={() => console.log("heart btn")}></HeartBtn>
      </div>
      <Link to={href}>
        <div className="img-card__img">
          <img src={img} alt="post" />
        </div>
      </Link>
      <div className="img-card__title">{title && <h2>{title}</h2>}</div>
    </div>
  );
};
