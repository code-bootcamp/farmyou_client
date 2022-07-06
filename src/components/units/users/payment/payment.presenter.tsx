import ButtonComponent from "../../../commons/buttons";
import InputComponent from "../../../commons/inputs";
import * as S from "./payment.styles";

export default function PaymentUI() {
  return (
    <S.Wrapper>
      <S.Header>주문 / 결제</S.Header>
      <S.DevideLine></S.DevideLine>
      <S.InputWrapper>
        <S.Text>이름</S.Text>
        <S.ComponentWrapper>
          <InputComponent placeholder="" />
        </S.ComponentWrapper>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Text>이메일</S.Text>
        <S.ComponentWrapper>
          <InputComponent placeholder="" />
          @
          <InputComponent placeholder="" />
        </S.ComponentWrapper>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Text>휴대전화</S.Text>
        <S.ComponentWrapper>
          <S.Select>
            <S.Option selected value="010">
              010
            </S.Option>
            <S.Option value="011">011</S.Option>
            <S.Option value="016">016</S.Option>
            <S.Option value="017">017</S.Option>
          </S.Select>
          <InputComponent placeholder="" />
        </S.ComponentWrapper>
      </S.InputWrapper>
      <S.Header>배송지</S.Header>
      <S.DevideLine />
      <S.InputWrapper>
        <S.Text>배송지명</S.Text>
        <S.ComponentWrapper>
          <InputComponent placeholder="" />
        </S.ComponentWrapper>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Text>받을 사람</S.Text>
        <S.ComponentWrapper>
          <InputComponent placeholder="" />
        </S.ComponentWrapper>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Text>주소</S.Text>
        <S.AddressWrapper>
          <S.ComponentWrapper>
            <InputComponent placeholder="" />
            <ButtonComponent title="주소찾기" buttonColor="#055143" />
          </S.ComponentWrapper>
          <InputComponent placeholder="" />
          <InputComponent placeholder="" />
        </S.AddressWrapper>
      </S.InputWrapper>
      <S.Header>주문상품</S.Header>
      <S.DevideLine></S.DevideLine>
      <div>깃최신화 하면 캡슐컴포넌트자리</div>
      <S.BtnWrapper>
        <ButtonComponent
          buttonColor="#bdbdbd"
          title="취소하기"
        ></ButtonComponent>
        <ButtonComponent
          buttonColor="#055143"
          title="결제하기"
        ></ButtonComponent>
      </S.BtnWrapper>
    </S.Wrapper>
  );
}
