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
    <div className="text-card">
      <Link to={href}></Link>
      <div className="text-card__ribbon">
        <ProfileInfo {...profile}></ProfileInfo>
        <HeartBtn
          active={false}
          onClick={() => console.log("heart btn")}
        ></HeartBtn>
      </div>
      <p className="text-card__desc">{desc}</p>
    </div>
  );
};
