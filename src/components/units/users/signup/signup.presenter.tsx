import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import ButtonComponent from "../../../commons/buttons";
import InputComponent from "../../../commons/inputs";
import * as S from "./signup.styles";
import { IPropsSignUp } from "./signup.types";

export default function SignupUI(props: IPropsSignUp) {
  return (
    <S.Wrapper>
      <Modal visible={props.isModal}>
        <DaumPostcodeEmbed onComplete={props.handleComplete} />
      </Modal>
      <form
        onSubmit={props.handleSubmit(
          !props.isSeller ? props.onClickCreateUser : props.onClickCreateSeller
        )}
      >
        <S.FormWrapper>
          <S.Header>
            {(props.isSeller && "판매자") || "구매자"}회원가입
          </S.Header>
          <S.HeaderDivideLine></S.HeaderDivideLine>
          <S.InputWrapper>
            <S.Text>이메일</S.Text>
            <S.ErrWrapper>
              <InputComponent
                placeholder="이메일을 입력하세요"
                register={props.register("email")}
              />
              <S.Err>{props.formState.errors.email?.message}</S.Err>
            </S.ErrWrapper>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Text>이름</S.Text>
            <S.ErrWrapper>
              <InputComponent
                placeholder="이름을 입력하세요"
                register={props.register("name")}
              />
              <S.Err>{props.formState.errors.name?.message}</S.Err>
            </S.ErrWrapper>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Text>비밀번호</S.Text>
            <S.ErrWrapper>
              <InputComponent
                type="password"
                placeholder="비밀번호를 입력하세요"
                register={props.register("password")}
              />
              <S.Err>{props.formState.errors.password?.message}</S.Err>
            </S.ErrWrapper>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Text>비밀번호확인</S.Text>
            <S.ErrWrapper>
              <InputComponent
                type="password"
                placeholder="비밀번호를 다시 입력하세요"
                register={props.register("passwordCheck")}
              />
              <S.Err>{props.formState.errors.passwordCheck?.message}</S.Err>
            </S.ErrWrapper>
          </S.InputWrapper>
          {!props.isSeller && (
            <S.InputWrapper>
              <S.Text>주소</S.Text>
              <S.Address>
                <S.ZipcodeWrapper>
                  <S.AddressInput>
                    <InputComponent
                      readOnly
                      placeholder="00000"
                      register={props.register("postalCode")}
                      defaultValue={props.postalCode}
                    />
                  </S.AddressInput>
                  <S.AddressSearchBtn
                    type="button"
                    onClick={props.onClickShowModal}
                  >
                    우편번호 검색
                  </S.AddressSearchBtn>
                </S.ZipcodeWrapper>
                <InputComponent
                  readOnly
                  placeholder="주소"
                  register={props.register("address")}
                  defaultValue={props.address}
                />
                <InputComponent
                  placeholder="상세주소"
                  register={props.register("detailedAddress")}
                />
              </S.Address>
            </S.InputWrapper>
          )}
          <S.InputWrapper>
            <S.Text>휴대전화</S.Text>
            <S.PhoneWrapper>
              <InputComponent
                placeholder="-을 제외하고 입력해 주세요"
                register={props.register("phone")}
              />
            </S.PhoneWrapper>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Text></S.Text>
            <S.PhoneAgreementWrapper>
              <InputComponent placeholder="인증번호 입력" />
              <S.Text style={{ justifyContent: "center", paddingLeft: "10px" }}>
                03:00
              </S.Text>
              <S.PhoneAgreementButton type="button">
                인증번호 전송
              </S.PhoneAgreementButton>
            </S.PhoneAgreementWrapper>
          </S.InputWrapper>
          <S.SubmitWrapper>
            <ButtonComponent
              type="button"
              title="취소하기"
              onClick={props.onClickMove(`/main`)}
            />
            <ButtonComponent
              type="submit"
              title="가입하기"
              buttonColor="#F6651E"
            />
          </S.SubmitWrapper>
        </S.FormWrapper>
      </form>
    </S.Wrapper>
  );
}
