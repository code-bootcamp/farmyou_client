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
  font-size: 20px;
  width: 100vw;
  height: 50px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding: 0.7em;
  outline-color: #055143;

  @media (max-width: 575px) {
    height: 2em;
    font-size: 14px;
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
