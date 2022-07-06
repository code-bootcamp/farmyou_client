import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
`;

export const QuestionTitle = styled.div`
  font-size: 1.5vw;
  padding-bottom: 20px;
`;

export const QuestionWarning = styled.div`
  padding-left: 1.5vw;
  font-size: 1.3vw;
  padding-bottom: 20px;
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
`;

export const QuestionStatusColumn = styled.div`
  width: 15%;
`;

interface ClickProps {
  isClick?: boolean;
}
export const QuestionTitleColumn = styled.div`
  width: 50%;
  text-overflow: ellipsis;
  white-space: ${(props: ClickProps) => (props.isClick ? "default" : "nowrap")};
  flex-wrap: ${(props: ClickProps) => (props.isClick ? "wrap" : "default")};
  overflow: hidden;
  text-align: left;
`;
export const QuestionWriterColumn = styled.div`
  width: 15%;
`;
export const QuestionDateColumn = styled.div`
  width: 20%;
`;

export const AnswerWrapper = styled.div`
  width: 100%;
  font-size: 1.3vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const QuestionContents = styled.div`
  width: 85%;
  padding: 0px 20px 10px 0px;
  /* background-color: blue; */
  border-bottom: 1px solid #bdbdbd;
`;

export const AnswerTitle = styled.div`
  padding: 10px 20px 20px 0px;
  width: 85%;
  flex-wrap: wrap;
`;

export const AnswerContents = styled.div`
  padding: 0px 20px 20px 0px;
  width: 85%;
  flex-wrap: wrap;
`;
