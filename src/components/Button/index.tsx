import { ActionButton } from "./styles";

interface ButtonProps {
  handleClick?: () => void;
  type: "button" | "submit" | "reset";
  title: string;
  backgroundColor: string;
}

const Button = ({ handleClick, type, title, backgroundColor }: ButtonProps) => {
  return (
    <>
      {console.log(backgroundColor)}
      <ActionButton
        onClick={handleClick}
        type={type}
        backgroundColor={backgroundColor}
      >
        {title}
      </ActionButton>
    </>
  );
};
export default Button;
