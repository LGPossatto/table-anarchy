import { MouseEventHandler } from "react";

import "./cta-btn.style.scss";

interface props {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export const CtaBtn = ({ text, onClick, active, type = 'button' }: props) => {
  return (
    <button
      className={`cta-btn ${active ? "cta-btn-active" : ""} `}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
