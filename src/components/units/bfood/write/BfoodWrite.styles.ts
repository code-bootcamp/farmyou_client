import styled from "@emotion/styled";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const InnerWrapper = styled.div`
  width: 80%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
`;

export const PageTitle = styled.div`
  width: 100%;
  font-size: 2rem;
  margin: 1vw 0px;
  padding-left: 10vw;
  @media (max-width: 575px) {
    font-size: 1.8rem;
  }
`;

export const ImageItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: auto;
  white-space: nowrap;
  cursor: pointer;
`;
export const ImageItem = styled.div`
  min-width: 80px;
  width: 22vw;
  height: 18vw;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  background-color: #fff;
  margin-right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.div`
  width: 100%;
  font-size: 1.5rem;
  margin: 2vw 0px;
  @media (max-width: 575px) {
    font-size: 1.2rem;
  }
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
  height: 30vw;
  margin-bottom: 60px;
  @media (max-width: 575px) {
    margin-bottom: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 30rem;
  /* min-width: 30rem; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 50px auto;
  @media (max-width: 575px) {
    width: 14rem;
  }
`;
