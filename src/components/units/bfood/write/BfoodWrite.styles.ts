import styled from "@emotion/styled";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const PageTitle = styled.div`
  width: 100%;
  font-size: 35px;
  margin: 10px 0px;
`;

export const ImageItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: auto;
  white-space: nowrap;
`;
export const ImageItem = styled.div`
  min-width: 280px;
  width: 280px;
  height: 210px;
  border-radius: 5px;
  background-color: #d9d9d9;
  margin-right: 25px;
`;
export const Label = styled.div`
  width: 100%;
  font-size: 24px;
  margin: 20px 0px;
`;
export const InputWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputQuill = styled(ReactQuill)`
  width: 100%;
  height: 300px;
  margin-bottom: 60px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px auto;
`;
