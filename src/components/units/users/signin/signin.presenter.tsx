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
          <S.DevideLine></S.DevideLine>
          <InputComponent placeholder="이메일을 입력하세요" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Text>이름</S.Text>
          <S.DevideLine></S.DevideLine>
          <InputComponent placeholder="이름을 입력하세요" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Text>비밀번호</S.Text>
          <S.DevideLine></S.DevideLine>
          <InputComponent placeholder="비밀번호를 입력하세요" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Text>비밀번호확인</S.Text>
          <S.DevideLine></S.DevideLine>
          <InputComponent placeholder="비밀번호를 다시 입력하세요" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Text>휴대전화</S.Text>
          <S.DevideLine></S.DevideLine>
          {/* 번호 입력부분 */}
          <S.PhoneWrapper>
            <S.Select id="PhoneNumber">
              <option selected value={"010"}>
                010
              </option>
              <option value={"011"}>011</option>
              <option value={"016"}>016</option>
              <option value={"017"}>017</option>
            </S.Select>
            -<InputComponent placeholder="전화번호"></InputComponent>
            <S.BtnWrapper>
              <S.Text>03:00</S.Text>
              <ButtonComponent title="인증번호 전송" buttonColor="#F6651E" />
            </S.BtnWrapper>
          </S.PhoneWrapper>
          <S.PhoneWrapper>
            <InputComponent placeholder="인증번호 입력" />
            <S.BtnWrapper>
              <ButtonComponent title="인증하기" buttonColor="#F6651E" />
            </S.BtnWrapper>
          </S.PhoneWrapper>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Text>주소</S.Text>
          <S.DevideLine></S.DevideLine>
          <S.Address>
            <S.ZipcodeWrapper>
              <S.AddressInput>
                <InputComponent placeholder="우편번호를 입력하세요" />
              </S.AddressInput>
              <S.AddressBtn>
                <ButtonComponent title="우편번호 검색" buttonColor="#F6651E" />
              </S.AddressBtn>
            </S.ZipcodeWrapper>
            <S.AddressWrapper>
              <InputComponent placeholder="주소" />
              <InputComponent placeholder="상세주소" />
            </S.AddressWrapper>
          </S.Address>
        </S.InputWrapper>
        <S.DevideLine></S.DevideLine>
        <S.SubmitWrapper>
          <ButtonComponent title="취소하기" />
          <ButtonComponent title="가입하기" buttonColor="#F6651E" />
        </S.SubmitWrapper>
      </S.FormWrapper>
    </S.Wrapper>
  );
}
