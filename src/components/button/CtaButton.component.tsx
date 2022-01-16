import "./cta-button.style.scss";

interface props {
  text: string;
  onClick: () => void;
}

export const CtaButton = ({ text, onClick }: props) => {
  return (
    <button className="cta-button" onClick={onClick}>
      {text}
    </button>
  );
};
