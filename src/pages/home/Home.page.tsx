import { ProfileCard } from "../../components/cards/profile-card/ProfileCard.component";
import { Feed } from "../../components/feed/Feed.component";

import "./home.style.scss";

export const Home = () => {
  return (
    <div className="home">
      <ProfileCard></ProfileCard>
      <Feed></Feed>
    </div>
  );
};
