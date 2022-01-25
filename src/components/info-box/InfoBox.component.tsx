import "./info-box.style.scss";

interface props {
  title: string;
  info: string;
  leftAlign?: boolean;
}

export const InfoBox = ({ title, info, leftAlign }: props) => {
  return (
    <div className={`info-box ${leftAlign ? "info-box-left" : ""}`}>
      <h3>{title}</h3>
      <span>{info}</span>)
    </div>
  );
};
