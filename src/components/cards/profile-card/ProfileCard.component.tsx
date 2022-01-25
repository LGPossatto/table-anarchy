import backgroundImg from "../../../assets/images/background.jpg";
import profileImg from "../../../assets/images/profile.jpg";

import "./profile-card.style.scss";
import { InfoBox } from "../../info-box/InfoBox.component";

export const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-card__img">
        <img src={backgroundImg} alt="background" />
      </div>
      <div className="profile-card__info">
        <div className="img-box">
          <img src={profileImg} alt="profile" />
        </div>
        <div className="wrapper">
          <InfoBox title="Jon Doe" info="@theguy" leftAlign></InfoBox>
          <InfoBox title="Followers" info="3.5k"></InfoBox>
          <InfoBox title="Following" info="228"></InfoBox>
          <InfoBox title="Posts" info="783"></InfoBox>
        </div>
      </div>
    </div>
  );
};
