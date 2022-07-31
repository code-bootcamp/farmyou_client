import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface IInputProps {
  placeholder: string | undefined;
  disabled?: boolean;
  type?: string;
  defaultValue?: string;
  readOnly?: boolean;
  register?: object;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void | undefined;
}

const Input = styled.input`
  font-size: 0.8vw;
  width: 100%;
  min-height: 35px;
  height: 2.5vw;
  border: 1px solid #828282;
  border-radius: 5px;
  padding: 0.7em;
  outline-color: #f66512;

  @media (max-width: 575px) {
    height: 2em;
    font-size: 0.8rem;
  }
`;

export default function InputComponent(props: IInputProps) {
  return (
    <Input
      placeholder={props?.placeholder}
      onChange={props?.onChange}
      disabled={props?.disabled}
      type={props?.type}
      readOnly={props?.readOnly}
      defaultValue={props?.defaultValue}
      {...props?.register}
    ></Input>
  );
}
