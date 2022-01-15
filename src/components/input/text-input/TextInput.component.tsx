import { text } from "node:stream/consumers";
import "./text-input.style.scss";

interface props {
  id: string | number;
  name: string;
  value: string;
  setValue: Function;
  type?: string;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
}

export const TextInput = ({
  id,
  name,
  value,
  setValue,
  type = "text",
  placeholder = "",
  required = false,
  errorMessage,
}: props) => {
  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <div className="text-input">
      <label htmlFor={`${id}`}>{name}</label>
      <input
        className={errorMessage ? "error-message" : ""}
        type={type}
        placeholder={placeholder}
        value={value}
        id={`${id}`}
        onChange={(e) => handleChange(e.target.value)}
        required={required}
      />
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};
