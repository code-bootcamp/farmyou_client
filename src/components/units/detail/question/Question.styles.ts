import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
`;

export const QuestionTitleWrapper = styled.div`
  font-size: 1.5vw;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid #f6651e;
  margin-bottom: 20px;
`;

export const QuestionTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
`;

export const QuestionButton = styled.button`
  border: 0px solid;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: white;
  :hover {
    color: #f6651e;
  }
  @media (max-width: 575px) {
    font-size: 1.1rem;
  }
`;

export const QuestionTableWrapper = styled.div`
  width: 100%;
`;

export const QuestionAnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #bdbdbd;
`;

export const QuestionTableRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.3vw;
  text-align: center;
  padding: 1vw 0px;

  :hover {
    background-color: #ccc;
  }
`;

export const QuestionStatusColumn = styled.div`
  width: 15%;
  text-align: center;
`;
export const QuestionStatusColumnHeader = styled.div`
  width: 15%;
  color: #fff;
`;

interface ClickProps {
  isClick?: boolean;
  id?: string;
}
export const QuestionTitleColumn = styled.div`
  width: 50%;
  padding-bottom: 5px;
  text-overflow: ellipsis;
  white-space: ${(props: ClickProps) =>
    props.isClick === props.id ? "default" : "nowrap"};
  flex-wrap: ${(props: ClickProps) =>
    props.isClick === props.id ? "wrap" : "default"};
  overflow: hidden;
  text-align: left;
`;
export const QuestionTitleColumnHeader = styled.div`
  width: 50%;
  text-overflow: ellipsis;
  white-space: ${(props: ClickProps) =>
    props.isClick === props.id ? "default" : "nowrap"};
  flex-wrap: ${(props: ClickProps) =>
    props.isClick === props.id ? "wrap" : "default"};
  overflow: hidden;
  text-align: left;
  color: #fff;
`;
export const QuestionWriterColumn = styled.div`
  width: 15%;
`;
export const QuestionDateColumn = styled.div`
  width: 20%;
`;
export const QuestionWriterColumnHeader = styled.div`
  width: 15%;
  color: #fff;
`;
export const QuestionDateColumnHeader = styled.div`
  width: 20%;
  color: #fff;
`;

export const AnswerWrapper = styled.div`
  width: 100%;
  font-size: 1.3vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

interface QuestionContentsProps {
  title?: string;
}

export const QuestionContents = styled.div`
  width: 85%;
  padding: 0px 20px 10px 0px;

  border-bottom: ${(props: QuestionContentsProps) =>
    props.title ? "1px solid #bdbdbd" : ""};
`;

export const AnswerTitle = styled.div`
  padding: 10px 20px 10px 0px;
  width: 85%;
  flex-wrap: wrap;
`;

export const AnswerContents = styled.div`
  padding: 0px 20px 10px 0px;
  width: 85%;
  flex-wrap: wrap;
`;

export const QText = styled.span`
  color: #f6651e;
`;

export const EditImage = styled.img`
  margin-left: 10px;
  width: auto;
  height: 100%;
`;

export const AText = styled.span`
  color: #f6651e;
`;

export const AnswerButton = styled.button`
  width: 100px;
  font-size: 1.1rem;
  font-size: bold;
  background-color: white;
  border: 0px;
  margin-right: 2vw;
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    color: #f6651e;
  }

  @media (max-width: 575px) {
    font-size: 0.9rem;
  }
`;

export const CustomModal = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0px 10%;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  border-radius: 5px;

  background-color: white;
  padding: 30px;
  position: relative;
`;

export const TitleContentsText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 2rem;
  font-size: 1.2rem;
  margin-bottom: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

export const ContentsTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  border: 1px solid #cccccc;
  border-radius: 5px;
  ::placeholder {
    font-size: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const RegistrationEditButton = styled.button`
  width: 100px;
  height: 40px;
  font-size: 1rem;
  color: white;
  background-color: #f6651e;
  border: 0px solid;
  cursor: pointer;
`;

export const CancelButton = styled.img`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const PaginationWrapper = styled.div`
  cursor: pointer;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
