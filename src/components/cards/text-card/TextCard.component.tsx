import { Link } from "react-router-dom";

import "./text-card.style.scss";
import { HeartBtn } from "../../buttons/heart-btn/HeartBtn.component";
import { ProfileInfo } from "../../profile-info/ProfileInfo.component";

interface props {
  profile: { img: string; name: string; login: string };
  desc: string;
  href: string;
}

export const TextCard = ({ profile, desc, href }: props) => {
  return (
    <div className="img-card">
      <div className="img-card-ribbon">
        <ProfileInfo {...profile}></ProfileInfo>
        <HeartBtn onClick={() => console.log("heart btn")}></HeartBtn>
      </div>
      <Link to={href}>
        <div className="img-card__desc">{desc && <p>{desc}</p>}</div>
      </Link>
    </div>
  );
};
