import { Modal, Radio } from "antd";
import ButtonComponent from "../../../commons/buttons";
import InputComponent from "../../../commons/inputs";
import * as S from "./login.styles";
import { IPropsLogin } from "./login.types";

export default function LoginUI(props: IPropsLogin) {
  return (
    <>
      <Modal
        visible={props.isModal}
        footer={[
          <S.FootWrapper key="back">
            <S.Button onClick={props.handleCancel}>취소</S.Button>
            <S.Button onClick={props.handleOk}>재설정 하기</S.Button>
          </S.FootWrapper>,
        ]}
      >
        <S.Contents>비밀번호 재설정</S.Contents>
        <S.DivideLine></S.DivideLine>
        <S.EmailWrapper>
          <S.EmailInput
            placeholder="이메일(아이디)를 입력해주세요"
            onChange={props.onChangeEmail}
          />
        </S.EmailWrapper>
        <S.PhoneWrapper>
          <S.PhoneInput
            onChange={props.onChangePhone}
            placeholder="핸드폰 번호를 입력하세요"
          ></S.PhoneInput>
          <S.PhoneButton onClick={props.onClickSend}>
            인증번호전송
          </S.PhoneButton>
        </S.PhoneWrapper>
        <S.TokenWrapper>
          <S.PhoneToken
            placeholder="인증번호를 입력하세요"
            onChange={props.onChangeToken}
          ></S.PhoneToken>
          <S.TokenCheckBtn onClick={props.onClickCheck}>
            인증번호제출
          </S.TokenCheckBtn>
        </S.TokenWrapper>
      </Modal>
      {/* 모달 2 */}
      <Modal
        visible={props.isModal2}
        footer={[
          <S.FootWrapper key="primary">
            <S.Button onClick={props.handleCancel2}>취소</S.Button>
            <S.Button onClick={props.handleOk2}>완료</S.Button>
          </S.FootWrapper>,
        ]}
      >
        <S.Contents>비밀번호 재설정</S.Contents>
        <S.PwdWrapper
          onSubmit={props.handleSubmit(
            props.userType === "user"
              ? props.onSubmitChangeUser
              : props.onSubmitChangeSeller
          )}
        >
          <S.PwdInputWrapper>
            <S.PwdInput
              {...props.register("password2")}
              placeholder="재설정 할 비밀번호를 입력하세요"
            ></S.PwdInput>
            <S.PwdChangeBtn type="submit">변경하기</S.PwdChangeBtn>
          </S.PwdInputWrapper>
          <S.PwdErr>{props.formState.errors.password2?.message}</S.PwdErr>
        </S.PwdWrapper>
      </Modal>
      <S.Wrapper
        onSubmit={props.handleSubmit(
          props.isUser === "buyer"
            ? props.onClickLogin
            : props.onClickSellerLogin
        )}
      >
        <S.LoginWrapper>
          <S.InputWrapper>
            <S.Text>로그인</S.Text>
            <S.DivideLine></S.DivideLine>
            <InputComponent
              placeholder="Email address"
              register={props.register("email")}
            />
            <InputComponent
              type="password"
              placeholder="Password"
              register={props.register("password")}
            />
            <S.FindPwd onClick={props.onClickModal}>
              <u>비밀번호를 잊어버리셧나요?</u>
            </S.FindPwd>
          </S.InputWrapper>
          <Radio.Group onChange={props.onChangeAuth}>
            <Radio value={"buyer"}>구매자 로그인</Radio>
            <Radio value={"seller"}>판매자 로그인</Radio>
          </Radio.Group>
          <S.BtnWrapper>
            <ButtonComponent
              type="button"
              title="회원가입"
              buttonColor="#bdbdbd"
              onClick={props.onClickMove(`/users/signup`)}
            />
            {props.isModal2 ? (
              <ButtonComponent
                type="button"
                disabled
                title="로그인"
                buttonColor="#F6651E"
              />
            ) : (
              <ButtonComponent
                type="submit"
                title="로그인"
                buttonColor="#F6651E"
              />
            )}
          </S.BtnWrapper>
        </S.LoginWrapper>
      </S.Wrapper>
    </>
  );
}
