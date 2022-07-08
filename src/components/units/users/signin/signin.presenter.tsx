import ButtonComponent from "../../../commons/buttons";
import InputComponent from "../../../commons/inputs";
import * as S from "./signin.styles";

export default function SigninUI() {
  return (
    <S.Wrapper>
      <S.FormWrapper>
        <S.Header>회원가입</S.Header>
        <S.InputWrapper>
          <S.Text>이메일</S.Text>
          <InputComponent placeholder="이메일을 입력하세요" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Text>이름</S.Text>
          <InputComponent placeholder="이름을 입력하세요" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Text>비밀번호</S.Text>
          <InputComponent placeholder="비밀번호를 입력하세요" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Text>비밀번호확인</S.Text>
          <InputComponent placeholder="비밀번호를 다시 입력하세요" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Text>주소</S.Text>
          <S.Address>
            <S.ZipcodeWrapper>
              <S.AddressInput>
                <InputComponent placeholder="00000" />
              </S.AddressInput>
              <S.AddressBtn>
                <S.AddressSearchBtn>우편번호 검색</S.AddressSearchBtn>
              </S.AddressBtn>
            </S.ZipcodeWrapper>
            {/* <S.AddressWrapper> */}
            <InputComponent placeholder="주소" />
            <InputComponent placeholder="상세주소" />
            {/* </S.AddressWrapper> */}
          </S.Address>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Text>휴대전화</S.Text>
          <S.PhoneWrapper>
            <InputComponent placeholder="" />
            <S.Text style={{ padding: "0 1vw" }}> - </S.Text>
            <InputComponent placeholder="" />
            <S.Text style={{ padding: "0 1vw" }}> - </S.Text>
            <InputComponent placeholder="" />
          </S.PhoneWrapper>
        </S.InputWrapper>

        <S.BtnWrapper>
          <InputComponent placeholder="인증번호 입력" />
          <S.Text style={{ justifyContent: "center" }}>03:00</S.Text>
          <S.AddressSearchBtn>인증번호 전송</S.AddressSearchBtn>
        </S.BtnWrapper>

        <S.SubmitWrapper>
          <ButtonComponent title="취소하기" />
          <ButtonComponent title="가입하기" buttonColor="#F6651E" />
        </S.SubmitWrapper>
      </S.FormWrapper>
    </S.Wrapper>
  );
}
