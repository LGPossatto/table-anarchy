import "./cta-btn.style.scss";

interface props {
  text: string;
  onClick: () => void;
}

export const CtaBtn = ({ text, onClick }: props) => {
  return (
    <button className="cta-btn" onClick={onClick}>
      {text}
    </button>
  );
};
