import ButtonComponent from "../../../commons/buttons";
import InputComponent from "../../../commons/inputs";
import * as S from "./signup.styles";

export default function SignupUI() {
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
              <S.AddressSearchBtn>우편번호 검색</S.AddressSearchBtn>
            </S.ZipcodeWrapper>
            <InputComponent placeholder="주소" />
            <InputComponent placeholder="상세주소" />
          </S.Address>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Text>휴대전화</S.Text>
          <S.PhoneWrapper>
            <InputComponent placeholder="" /> -{" "}
            <InputComponent placeholder="" /> -{" "}
            <InputComponent placeholder="" />
          </S.PhoneWrapper>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Text></S.Text>
          <S.PhoneAgreementWrapper>
            <InputComponent placeholder="인증번호 입력" />
            <S.Text style={{ justifyContent: "center", paddingLeft: "10px" }}>
              03:00
            </S.Text>
            <S.PhoneAgreementButton>인증번호 전송</S.PhoneAgreementButton>
          </S.PhoneAgreementWrapper>
        </S.InputWrapper>
        <S.SubmitWrapper>
          <ButtonComponent title="취소하기" />
          <ButtonComponent title="가입하기" buttonColor="#F6651E" />
        </S.SubmitWrapper>
      </S.FormWrapper>
    </S.Wrapper>
  );
}
