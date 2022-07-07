import * as S from "./Question.styles";

export default function QuestionUI() {
  // 이 값 변경시키면 질문 내용이랑 답글 달렸으면 답글도 출력
  const isClick = true;
  return (
    <>
      <S.Wrapper>
        <S.QuestionTitle>상품 문의</S.QuestionTitle>
        <S.QuestionWarning>
          상품에 판매자의 답글이 달리는 경우 수정 및 삭제가 불가능합니다. <br />
          개인정보(휴대전화 번호, 주민등록 번호 등)의 작성에 유의하여 주시기
          바랍니다.
        </S.QuestionWarning>
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

          {/* 여기서부터 아래의 코드는 map으로 그려주기, id값 잘 비교해서 문의 답변도 달아주기 */}
          {new Array(3).fill(1).map((el, index) => {
            return (
              <S.QuestionAnswerWrapper key={index}>
                <S.QuestionTableRow key={index}>
                  <S.QuestionStatusColumn>답변 중</S.QuestionStatusColumn>
                  <S.QuestionTitleColumn>
                    <S.QText>Q. </S.QText>
                    제목 제목 제목 제목 제목
                  </S.QuestionTitleColumn>
                  <S.QuestionWriterColumn>홍길동</S.QuestionWriterColumn>
                  <S.QuestionDateColumn>2023. 7. 2</S.QuestionDateColumn>
                </S.QuestionTableRow>
              </S.QuestionAnswerWrapper>
            );
          })}
          <S.QuestionAnswerWrapper>
            <S.QuestionTableRow>
              <S.QuestionStatusColumn>답변 완료</S.QuestionStatusColumn>
              <S.QuestionTitleColumn isClick={isClick}>
                <S.QText>Q. </S.QText>
                제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목
                제목 제목 제목 제목 제목 제목 제목
              </S.QuestionTitleColumn>
              <S.QuestionWriterColumn>홍길동</S.QuestionWriterColumn>
              <S.QuestionDateColumn>2023. 6. 25</S.QuestionDateColumn>
            </S.QuestionTableRow>
            <S.AnswerWrapper>
              {/* 지금 여기 눌렸는지에 대해서면 구현, 답변이 달려있는지에 대해서도 구현해야함 */}
              {isClick && (
                <>
                  <S.QuestionContents>
                    질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문
                    질문질문 질문 질문 질문 질문 질문질문 질문 질문 질문 질문
                    질문질문 질문 질문 질문 질문 질문질문 질문 질문 질문 질문
                    질문질문 질문 질문 질문 질문 질문질문 질문 질문 질문 질문
                    질문질문 질문 질문 질문 질문 질문
                  </S.QuestionContents>
                  <S.AnswerTitle>
                    <S.AText>A.</S.AText>
                    답변 제목 답변 제목 답변 제목 답변 제목 답변 제목 답변 제목
                    답변 제목 답변 제목 답변 제목 답변 제목 답변 제목 답변 제목
                    답변 제목{" "}
                  </S.AnswerTitle>
                  <S.AnswerContents>
                    답변 내용 답변 내용 답변 내용 답변 내용 답변 내용 답변 내용
                    답변 내용 답변 내용 답변 내용 답변 내용 답변 내용 답변 내용
                    답변 내용 답변 내용 답변 내용 답변 내용 답변 내용 답변 내용
                    답변 내용 답변 내용 답변 내용 답변 내용 답변 내용 답변 내용
                    답변 내용 답변 내용 답변 내용 답변 내용 답변 내용 답변 내용
                    답변 내용 답변 내용 답변 내용 답변 내용 답변 내용 답변 내용
                    답변 내용{" "}
                  </S.AnswerContents>
                </>
              )}
            </S.AnswerWrapper>
          </S.QuestionAnswerWrapper>
          {new Array(6).fill(1).map((el, index) => {
            return (
              <S.QuestionAnswerWrapper key={index}>
                <S.QuestionTableRow>
                  <S.QuestionStatusColumn>답변 완료</S.QuestionStatusColumn>
                  <S.QuestionTitleColumn>
                    <S.QText>Q. </S.QText>
                    제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목
                    제목 제목
                  </S.QuestionTitleColumn>
                  <S.QuestionWriterColumn>홍길동</S.QuestionWriterColumn>
                  <S.QuestionDateColumn>2023. 6. 7</S.QuestionDateColumn>
                </S.QuestionTableRow>
              </S.QuestionAnswerWrapper>
            );
          })}
        </S.QuestionTableWrapper>
      </S.Wrapper>
    </>
  );
}
