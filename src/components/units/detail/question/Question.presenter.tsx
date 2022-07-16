import { getDate } from "../../../commons/lib/utils";
import * as S from "./Question.styles";
import { IQuestionUIProps } from "./Question.types";

export default function QuestionUI(props: IQuestionUIProps) {
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

          {props.fetchInquiriesByProductData?.fetchInquiriesByProduct.map(
            (el) => {
              return (
                <S.QuestionAnswerWrapper key={el.id}>
                  <S.QuestionTableRow
                    onClick={props.onClickQuestion}
                    id={el.id}
                  >
                    <S.QuestionStatusColumn>
                      {el.status === "ANSWERED" ? "답변 완료" : "답변 중"}
                    </S.QuestionStatusColumn>
                    <S.QuestionTitleColumn id={el.id}>
                      <S.QText>Q. </S.QText>
                      {el.title}
                      {el.status === "ANSWERED" ? (
                        <></>
                      ) : (
                        <S.EditImage
                          src="/icons/edit.svg"
                          onClick={props.onClickQuestionEdit}
                        ></S.EditImage>
                      )}
                    </S.QuestionTitleColumn>
                    <S.QuestionWriterColumn>작성자</S.QuestionWriterColumn>
                    <S.QuestionDateColumn>
                      {getDate(el.createdAt)}
                    </S.QuestionDateColumn>
                  </S.QuestionTableRow>
                  {el.id === props.isClick ? (
                    <S.AnswerWrapper>
                      <S.QuestionContents title={el.answer}>
                        {el.question}
                      </S.QuestionContents>
                      {el.status === "ANSWERED" ? (
                        <>
                          <S.AnswerTitle>
                            <S.AText>A.</S.AText>
                            {el.answerTitle}{" "}
                            <S.EditImage
                              src="/icons/edit.svg"
                              onClick={props.onClickAnswerEdit}
                            ></S.EditImage>
                          </S.AnswerTitle>
                          <S.AnswerContents>{el.answer}</S.AnswerContents>
                        </>
                      ) : (
                        <S.AnswerButton
                          onClick={props.onClickAnswerRegistration}
                        >
                          답변하기
                        </S.AnswerButton>
                      )}
                    </S.AnswerWrapper>
                  ) : (
                    <></>
                  )}
                </S.QuestionAnswerWrapper>
              );
            }
          )}
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
