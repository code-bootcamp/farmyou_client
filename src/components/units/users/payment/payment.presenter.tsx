import InputComponent from "../../../commons/inputs";
import * as S from "./payment.styles";
import { IPaymentUIProps } from "./payment.types";
import { v4 as uuidv4 } from "uuid";

export default function PaymentUI(props: IPaymentUIProps) {
  return (
    <>
      <S.Header>주문 / 결제</S.Header>
      <S.Wrapper>
        <S.PayWrapper>
          <S.LeftWrapper>
            <S.Title>주문자</S.Title>
            <S.DivideLine />
            <S.InputWrapper>
              <S.Text>이메일</S.Text>
              <S.ComponentWrapper>
                <InputComponent placeholder="이메일을 입력해주세요." />
              </S.ComponentWrapper>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Text>이름</S.Text>
              <S.ComponentWrapper>
                <InputComponent placeholder="이름을 입력해주세요." />
              </S.ComponentWrapper>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Text>휴대전화</S.Text>
              <S.ComponentWrapper>
                <InputComponent placeholder="" />
              </S.ComponentWrapper>
            </S.InputWrapper>
            <S.Title>배송지</S.Title>
            <S.DivideLine />
            <S.InputWrapper>
              <S.Text>배송지명</S.Text>
              <S.ComponentWrapper>
                <InputComponent placeholder="" />
              </S.ComponentWrapper>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Text>받는사람</S.Text>
              <S.ComponentWrapper>
                <InputComponent placeholder="" />
              </S.ComponentWrapper>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Text>휴대전화</S.Text>
              <S.ComponentWrapper>
                <InputComponent placeholder="" />
              </S.ComponentWrapper>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Text style={{ alignItems: "start", paddingTop: "7px" }}>
                주소
              </S.Text>
              <S.AddressWrapper>
                <S.ComponentWrapper>
                  <InputComponent placeholder="00000" />
                  <S.Text>{"       "}</S.Text>
                  <S.AddressSearchBtn>우편번호 검색</S.AddressSearchBtn>
                </S.ComponentWrapper>
                <S.ComponentWrapper>
                  <InputComponent placeholder="" />
                </S.ComponentWrapper>
                <S.ComponentWrapper>
                  <InputComponent placeholder="" />
                </S.ComponentWrapper>
              </S.AddressWrapper>
            </S.InputWrapper>
          </S.LeftWrapper>
          <S.RightWrapper>
            <S.PayBoxWrapper>
              <S.PayBoxTitle>결제금액</S.PayBoxTitle>
              {props.isCart === "cart" ? (
                <>
                  <S.BasketTotalPriceWrapper>
                    <S.BasketName>로컬푸드 결제금액</S.BasketName>
                    <S.BasketPrice>
                      {props.localPrice.toLocaleString()}원
                    </S.BasketPrice>
                  </S.BasketTotalPriceWrapper>
                  <S.BasketTotalPriceWrapper>
                    <S.BasketName>못난이 상품 결제금액</S.BasketName>
                    <S.BasketPrice>
                      {props.bPrice.toLocaleString()}원
                    </S.BasketPrice>
                  </S.BasketTotalPriceWrapper>
                </>
              ) : (
                <>
                  <S.BasketTotalPriceWrapper>
                    <S.BasketName>결제금액</S.BasketName>
                    <S.BasketPrice>
                      {(
                        props.payProduct.price * props.payProduct.count
                      ).toLocaleString()}
                      원
                    </S.BasketPrice>
                  </S.BasketTotalPriceWrapper>
                </>
              )}

              <S.BasketTotalPriceWrapper>
                <S.BasketName>배송비</S.BasketName>
                <S.BasketPrice>0원</S.BasketPrice>
              </S.BasketTotalPriceWrapper>
              <S.PayBoxDivide />
              <S.BasketTotalPriceWrapper style={{ fontWeight: "bold" }}>
                <S.BasketName>총 결제금액</S.BasketName>
                <S.BasketPrice style={{ color: "red" }}>
                  {(props.localPrice + props.bPrice).toLocaleString()}원
                </S.BasketPrice>
              </S.BasketTotalPriceWrapper>
              <S.CheckBox>아래 내용에 모두 동의합니다.(필수)</S.CheckBox>
            </S.PayBoxWrapper>
            <S.PayBoxWarningWrapper>
              본인은 만 14세 이상이며, 주문 내용을 모두 확인하였습니다.
            </S.PayBoxWarningWrapper>
            <S.PayOrCancelBtn style={{ backgroundColor: "red" }}>
              {(props.localPrice + props.bPrice).toLocaleString()}원 결제하기
            </S.PayOrCancelBtn>
            <S.PayOrCancelBtn style={{ backgroundColor: "#bdbdbd" }}>
              이전으로
            </S.PayOrCancelBtn>
          </S.RightWrapper>
        </S.PayWrapper>
        {props.isCart === "cart" ? (
          <>
            <S.BasketWrapper>
              <S.Title>로컬푸드 주문내역</S.Title>
              <S.DivideLine />
              {props.localfoodBaskets.map((el: any, index: number) => {
                return (
                  <S.BasketItemWrapper key={uuidv4()}>
                    {console.log(el)}
                    <S.BasketItemImage src="" />
                    <S.BasketItemTextWrapper>
                      <S.BasketItemName>{el.title}</S.BasketItemName>
                      <S.BasketItemSeller>{el.name}</S.BasketItemSeller>
                      <S.BasketItemPriceCount>
                        {el.price.toLocaleString()}원 / {el.count}개
                      </S.BasketItemPriceCount>
                    </S.BasketItemTextWrapper>
                  </S.BasketItemWrapper>
                );
              })}
            </S.BasketWrapper>
            <S.BasketWrapper>
              <S.Title>못난이 상품 주문내역</S.Title>
              <S.DivideLine />
              {props.bfoodBaskets.map((el: any, index: number) => {
                return (
                  <S.BasketItemWrapper key={index}>
                    <S.BasketItemImage src="" />
                    <S.BasketItemTextWrapper>
                      <S.BasketItemName>{el.title}</S.BasketItemName>
                      <S.BasketItemSeller>
                        판매자 : {el.seller.name}
                      </S.BasketItemSeller>
                      <S.BasketItemPriceCount>
                        {el.price.toLocaleString()}원 / {el.count}개
                      </S.BasketItemPriceCount>
                    </S.BasketItemTextWrapper>
                  </S.BasketItemWrapper>
                );
              })}
            </S.BasketWrapper>
          </>
        ) : (
          <S.BasketWrapper>
            <S.Title>주문내역</S.Title>
            <S.DivideLine />
            <S.BasketItemWrapper>
              <S.BasketItemImage src="" />
              <S.BasketItemTextWrapper>
                <S.BasketItemName>{props.payProduct.title}</S.BasketItemName>
                <S.BasketItemSeller>
                  {props.payProduct.seller?.name}
                </S.BasketItemSeller>
                <S.BasketItemPriceCount>
                  {props.payProduct.price?.toLocaleString()}원 /{" "}
                  {props.payProduct.count}개
                </S.BasketItemPriceCount>
              </S.BasketItemTextWrapper>
            </S.BasketItemWrapper>
          </S.BasketWrapper>
        )}
      </S.Wrapper>
    </>
  );
}
