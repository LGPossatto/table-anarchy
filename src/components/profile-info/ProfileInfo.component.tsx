import "./profile-info.style.scss";

interface props {
  img: string;
  name: string;
  login: string;
  big?: boolean;
}

export const ProfileInfo = ({ img, name, login, big }: props) => {
  return (
    <div className={`profile-info ${big ? "profile-info-big" : ""}`}>
      <div className="img-box">
        <img src={img} alt="profile" />
      </div>
      <div className="text-box">
        <h3>{name}</h3>
        <span>{login}</span>
      </div>
    </div>
  );
};
