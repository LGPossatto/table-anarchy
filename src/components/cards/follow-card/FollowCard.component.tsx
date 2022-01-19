import { CtaBtn } from "../../buttons/cta-btn/CtaBtn.component";
import { ProfileInfo } from "../../profile-info/ProfileInfo.component";
import "./follow-card.style.scss";

interface props {
  profile: { img: string; name: string; login: string };
}

export const FollowCard = ({ profile }: props) => {
  return (
    <div className="follow-card">
      <ProfileInfo big={true} {...profile}></ProfileInfo>
      <CtaBtn
        active={true}
        onClick={() => console.log("follow card")}
        text="Follow"
      ></CtaBtn>
    </div>
  );
};
