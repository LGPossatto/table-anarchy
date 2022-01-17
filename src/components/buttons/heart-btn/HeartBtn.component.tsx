import "./heart-btn.style.scss";

interface props {
  onClick: () => void;
}

export const HeartBtn = ({ onClick }: props) => {
  return (
    <div data-testid="heart-btn" className="heart-btn" onClick={onClick}>
      <span>heart</span>
      <span>3.5k</span>
    </div>
  );
};
