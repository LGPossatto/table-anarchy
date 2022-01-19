import "./cta-btn.style.scss";

interface props {
  text: string;
  onClick: () => void;
  active?: boolean;
}

export const CtaBtn = ({ text, onClick, active }: props) => {
  return (
    <button
      className={`cta-btn ${active ? "cta-btn-active" : ""} `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
