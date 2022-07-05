import styled from "@emotion/styled";

interface IButtonProps {
  title?: string | undefined;
  onClick?: () => void | undefined;
  type?: "button" | "submit" | "reset";
  buttonColor?: string | undefined;
  disabled?: boolean;
}

const Button = styled.button`
  width: 200px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  background-color: ${(props: IButtonProps) => {
    return props.buttonColor;
  }};
  border: 0px solid;
  color: white;
  border-radius: 5px;

  @media (max-width: 575px) {
    width: 100px;
    height: 25px;
    font-size: 12px;
  }
`;

export default function ButtonComponent(props: IButtonProps) {
  return (
    <Button
      onClick={props.onClick}
      type={props.type}
      buttonColor={props.buttonColor}
      //   disabled={props?.disabled}
    >
      {props.title}
    </Button>
  );
}
