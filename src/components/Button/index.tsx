import { ActionButton } from "./styles";

interface ButtonProps {
  handleClick?: () => void;
  type: "button" | "submit" | "reset";
  title: string;
}

const Button = ({ handleClick, type, title }: ButtonProps) => {
  return (
    <>
      <ActionButton onClick={handleClick} type={type}>
        {title}
      </ActionButton>
    </>
  );
};
export default Button;
