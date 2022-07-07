import styled from "@emotion/styled";

interface IButtonProps {
  title?: string | undefined;
  onClick?: () => void | undefined;
  type?: "button" | "submit" | "reset";
  buttonColor?: string | undefined;
  disabled?: boolean;
}

const Button = styled.button`
  width: 10vw;
  height: 2.5vw;
  min-height: 35px;
  font-size: 0.8vw;
  cursor: pointer;
  background-color: ${(props: IButtonProps) => {
    return props.buttonColor;
  }};
  border: 0px solid;
  color: white;
  border-radius: 5px;

  @media (max-width: 575px) {
    width: 5vw;
    height: 1.25vw;
    font-size: 0.6vw;
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
