import InputComponent from "../../../commons/inputs";
import * as S from "./BfoodWrite.styles";
import "react-quill/dist/quill.snow.css";
import ButtonComponent from "../../../commons/buttons";
export default function BfoodWriteUI() {
  return (
    <S.Wrapper>
      <S.PageTitle>상품 등록</S.PageTitle>
      <S.ImageItemWrapper>
        <S.ImageItem></S.ImageItem>
        <S.ImageItem></S.ImageItem>
        <S.ImageItem></S.ImageItem>
        <S.ImageItem></S.ImageItem>
        <S.ImageItem></S.ImageItem>
      </S.ImageItemWrapper>
      <S.Label>상품명</S.Label>
      <InputComponent placeholder={"상품명을 입력해주세요."} type={"text"} />
      <S.FormWrapper>
        <S.InputWrapper>
          <S.Label>상품가격</S.Label>
          <InputComponent placeholder={"40000"} type={"number"} />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>상품 총 수량</S.Label>
          <InputComponent placeholder={"100"} type={"number"} />
        </S.InputWrapper>
      </S.FormWrapper>
      <S.Label>생산지역</S.Label>
      <InputComponent placeholder={"생산 지역을 입력해주세요."} type={"text"} />
      <S.Label>상품설명</S.Label>
      <S.InputQuill />
      <S.ButtonWrapper>
        <ButtonComponent buttonColor="#055143" title="등록하기" />
        <ButtonComponent buttonColor="#BDBDBD" title="이전으로" />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
