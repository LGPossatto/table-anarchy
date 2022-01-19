import { ReactComponent as Heart } from "../../../assets/icons/heart-icon.svg";
import "./heart-btn.style.scss";

interface props {
  onClick: () => void;
  active: boolean;
}

export const HeartBtn = ({ onClick, active }: props) => {
  return (
    <div
      data-testid="heart-btn"
      className={`heart-btn ${active ? "heart-btn-active" : ""}`}
      onClick={onClick}
    >
      <Heart></Heart>
      <span>3.5k</span>
    </div>
  );
};
