import * as S from "./Question.styles";
import { IQuestionUIProps } from "./Question.types";

const aaa = [
  {
    id: "1",
    title: "제목 제목 제목",
    contents: "내용 내용 내용",
    writer: "원용현",
    date: "2022. 07. 01",
  },
  {
    id: "2",
    title:
      "제목 제목 제목제목 제목 제목제목 제목 제목제목 제목 제목제목 제목 제목제목 제목 제목제목 제목 제목제목 제목 제목제목 제목 제목제목 제목 제목",
    contents:
      "내용 내용 내용내용 내용 내용내용 내용 내용내용 내용 내용내용 내용 내용내용 내용 내용내용 내용 내용내용 내용 내용내용 내용 내용내용 내용 내용내용 내용 내용내용 내용 내용내용 내용 내용",
    writer: "유연희",
    date: "2022. 07. 01",
  },
  {
    id: "3",
    title: "제목 제목 제목",
    contents: "내용 내용 내용",
    writer: "김민승",
    date: "2022. 07. 01",
  },
  {
    id: "4",
    title: "제목 제목 제목",
    contents: "내용 내용 내용",
    writer: "이승원",
    date: "2022. 07. 01",
  },
  {
    id: "5",
    title: "제목 제목 제목",
    contents: "내용 내용 내용",
    writer: "김지영",
    date: "2022. 07. 01",
    seller_title: "셀러입니다~",
    seller_contents: "문의 답변입니다~",
  },
];

export default function QuestionUI(props: IQuestionUIProps) {
  // 이 값 변경시키면 질문 내용이랑 답글 달렸으면 답글도 출력
  const isClick = true;
  return (
    <>
      <S.Wrapper>
        <S.QuestionTitleWrapper>
          <S.QuestionTitle>상품문의</S.QuestionTitle>
          <S.QuestionButton onClick={props.onClickQuestionRegistration}>
            문의하기
          </S.QuestionButton>
        </S.QuestionTitleWrapper>
        <S.QuestionTableWrapper>
          <S.QuestionTableRow
            style={{
              backgroundColor: "#F6651E",
              borderRadius: "5px 5px 0px 0px",
            }}
          >
            <S.QuestionStatusColumnHeader>
              답변 상태
            </S.QuestionStatusColumnHeader>
            <S.QuestionTitleColumnHeader style={{ textAlign: "center" }}>
              제목
            </S.QuestionTitleColumnHeader>
            <S.QuestionWriterColumnHeader>작성자</S.QuestionWriterColumnHeader>
            <S.QuestionDateColumnHeader>작성일</S.QuestionDateColumnHeader>
          </S.QuestionTableRow>

          {aaa.map((el) => {
            return (
              <S.QuestionAnswerWrapper key={el.id}>
                <S.QuestionTableRow onClick={props.onClickQuestion} id={el.id}>
                  <S.QuestionStatusColumn>
                    {el.seller_title ? "답변 완료" : "답변 중"}
                  </S.QuestionStatusColumn>
                  <S.QuestionTitleColumn id={el.id}>
                    <S.QText>Q. </S.QText>
                    {el.title}
                    {el.seller_title ? (
                      <></>
                    ) : (
                      <S.EditImage
                        src="/icons/edit.svg"
                        onClick={props.onClickQuestionEdit}
                      ></S.EditImage>
                    )}
                  </S.QuestionTitleColumn>
                  <S.QuestionWriterColumn>{el.writer}</S.QuestionWriterColumn>
                  <S.QuestionDateColumn>{el.date}</S.QuestionDateColumn>
                </S.QuestionTableRow>
                {el.id === props.isClick ? (
                  <S.AnswerWrapper>
                    <S.QuestionContents title={el.seller_title}>
                      {el.contents}
                    </S.QuestionContents>
                    {el.seller_title ? (
                      <>
                        <S.AnswerTitle>
                          <S.AText>A.</S.AText>
                          {el.seller_title}{" "}
                          <S.EditImage
                            src="/icons/edit.svg"
                            onClick={props.onClickAnswerEdit}
                          ></S.EditImage>
                        </S.AnswerTitle>
                        <S.AnswerContents>
                          {el.seller_contents}
                        </S.AnswerContents>
                      </>
                    ) : (
                      <S.AnswerButton onClick={props.onClickAnswerRegistration}>
                        답변하기
                      </S.AnswerButton>
                    )}
                  </S.AnswerWrapper>
                ) : (
                  <></>
                )}
              </S.QuestionAnswerWrapper>
            );
          })}
        </S.QuestionTableWrapper>
      </S.Wrapper>
      {console.log(props.isVisible)}
      {props.isVisible && (
        <S.CustomModal>
          <S.ModalWrapper>
            <S.TitleContentsText>
              {props.isAnswer ? "답변 제목" : "문의 제목"}
            </S.TitleContentsText>
            <S.TitleInput></S.TitleInput>
            <S.TitleContentsText>
              {props.isAnswer ? "답변 내용" : "문의 내용"}
            </S.TitleContentsText>
            <S.ContentsTextarea></S.ContentsTextarea>
            <S.ButtonWrapper>
              <S.RegistrationEditButton>
                {props.isEdit ? "수정하기" : "등록하기"}
              </S.RegistrationEditButton>
            </S.ButtonWrapper>
            <S.CancelButton
              src="/icons/delete.svg"
              onClick={props.onClickModalCancel}
            />
          </S.ModalWrapper>
        </S.CustomModal>
      )}
    </>
  );
}
