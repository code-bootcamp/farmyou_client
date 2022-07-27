import InputComponent from "../../../commons/inputs";
import * as S from "./payment.styles";
import { IPaymentUIProps } from "./payment.types";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function PaymentUI(props: IPaymentUIProps) {
  return (
    <>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.Header>주문 / 결제</S.Header>
      <S.Wrapper>
        <S.PayWrapper>
          <S.LeftWrapper>
            <S.Title>주문자</S.Title>
            <S.DivideLine />
            <S.InputWrapper>
              <S.Text>이메일</S.Text>
              <S.ComponentWrapper>
                <InputComponent
                  placeholder="이메일을 입력해주세요."
                  register={props.register("email")}
                />
              </S.ComponentWrapper>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Text>이름</S.Text>
              <S.ComponentWrapper>
                <InputComponent
                  placeholder="이름을 입력해주세요."
                  register={props.register("name")}
                />
              </S.ComponentWrapper>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Text>휴대전화</S.Text>
              <S.ComponentWrapper>
                <InputComponent
                  placeholder=""
                  register={props.register("phone")}
                />
              </S.ComponentWrapper>
            </S.InputWrapper>
            <S.Title>배송지</S.Title>
            <S.DivideLine />
            <S.InputWrapper>
              <S.Text>받는사람</S.Text>
              <S.ComponentWrapper>
                <InputComponent
                  placeholder=""
                  register={props.register("receiverName")}
                />
              </S.ComponentWrapper>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Text>휴대전화</S.Text>
              <S.ComponentWrapper>
                <InputComponent
                  placeholder=""
                  register={props.register("receiverPhone")}
                />
              </S.ComponentWrapper>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Text style={{ alignItems: "start", paddingTop: "7px" }}>
                주소
              </S.Text>
              <S.AddressWrapper>
                <S.ComponentWrapper>
                  <InputComponent
                    placeholder="00000"
                    register={props.register("receiverPostalCode")}
                  />
                  <S.Text>{"       "}</S.Text>
                  <S.AddressSearchBtn onClick={props.toggleModal}>
                    배송지찾기
                  </S.AddressSearchBtn>
                </S.ComponentWrapper>
                <S.ComponentWrapper>
                  <InputComponent
                    placeholder=""
                    register={props.register("receiverAddress")}
                  />
                </S.ComponentWrapper>
                <S.ComponentWrapper>
                  <InputComponent
                    placeholder=""
                    register={props.register("receiverAddressDetail")}
                  />
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
                  {(props.isCart === "cart"
                    ? props.localPrice + props.bPrice
                    : props.payProduct.price * props.payProduct.count
                  ).toLocaleString()}
                  원
                </S.BasketPrice>
              </S.BasketTotalPriceWrapper>
              <S.CheckBox onChange={props.onChangeCheckBox}>
                아래 내용에 모두 동의합니다. (필수)
              </S.CheckBox>
            </S.PayBoxWrapper>
            <S.PayBoxWarningWrapper>
              본인은 만 14세 이상이며, 주문 내용을 모두 확인하였습니다.
            </S.PayBoxWarningWrapper>
            <S.PayOrCancelBtn
              onClick={props.requestPay}
              style={{ backgroundColor: "red" }}
            >
              {(props.isCart === "cart"
                ? props.localPrice + props.bPrice
                : props.payProduct.price * props.payProduct.count
              ).toLocaleString()}
              원 결제하기
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
              {props.localfoodBaskets.map((el) => {
                return (
                  <S.BasketItemWrapper key={uuidv4()}>
                    <S.BasketItemImage
                      src={`https://storage.googleapis.com/${
                        el.files[0]?.url?.split(",")[0]
                      }`}
                    />
                    <S.BasketItemTextWrapper>
                      <S.BasketItemName>{el.title}</S.BasketItemName>
                      <S.BasketItemSeller>
                        {el.directStore.name}
                      </S.BasketItemSeller>
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
              {props.bfoodBaskets.map((el) => {
                return (
                  <S.BasketItemWrapper key={uuidv4()}>
                    <S.BasketItemImage
                      src={`https://storage.googleapis.com/${
                        el.files[0]?.url?.split(",")[0]
                      }`}
                    />
                    <S.BasketItemTextWrapper>
                      <S.BasketItemName>{el.title}</S.BasketItemName>
                      <S.BasketItemSeller>{el.seller.name}</S.BasketItemSeller>
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
              <S.BasketItemImage
                src={
                  props.payProduct.files[0]?.url?.split(",")[0]
                    ? `https://storage.googleapis.com/${
                        props.payProduct.files[0]?.url?.split(",")[0]
                      }`
                    : ""
                }
              />
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

      {props.isVisible && (
        <S.CustomModal>
          <S.ModalWrapper>
            {props.data?.fetchAddressesOfTheUser.map((el) => {
              return (
                <S.AddressListWrapper key={uuidv4()}>
                  <S.AddressListMain>
                    {el.isMain && "기본배송지"}
                  </S.AddressListMain>
                  <S.AddressListAddress>
                    <div style={{ color: "#BDBDBD" }}>{el.postalCode}</div>
                    <div>{el.address}</div>
                    <div>{el.detailedAddress}</div>
                  </S.AddressListAddress>
                  <S.AddressListCheck
                    onClick={props.onClickMainAddressSetting(el)}
                  >
                    {" "}
                    선택
                  </S.AddressListCheck>
                </S.AddressListWrapper>
              );
            })}
            <S.CancelButton
              src="/icons/delete.svg"
              onClick={props.onClickModalCancel}
            />
            <S.NewAddress onClick={props.onClickNewAddressButton}>
              배송지 등록하기
            </S.NewAddress>
          </S.ModalWrapper>
        </S.CustomModal>
      )}
      {props.newAddress && (
        <S.CustomModal>
          <S.ModalWrapper>
            <S.CancelButton
              src="/icons/delete.svg"
              onClick={props.onClickNewAddressCancel}
            />
            <S.Address>
              <S.ZipcodeWrapper>
                <S.AddressInput>
                  <InputComponent
                    readOnly
                    placeholder="00000"
                    register={props.register("newPostalCode")}
                  />
                </S.AddressInput>
                <button onClick={props.toggleDaumPostCode}>
                  다음포스트코드
                </button>
              </S.ZipcodeWrapper>
              <InputComponent
                readOnly
                placeholder="주소"
                register={props.register("newAddress")}
              />
              <InputComponent
                placeholder="상세주소"
                register={props.register("newDetailedAddress")}
              />
              <S.NewAddress onClick={props.onClickNewAddressRegistration}>
                배송지 등록하기
              </S.NewAddress>
            </S.Address>
          </S.ModalWrapper>
          {props.isModalVisible && (
            <Modal
              zIndex={100000}
              visible={true}
              onOk={props.toggleDaumPostCode}
              onCancel={props.toggleDaumPostCode}
            >
              <DaumPostcode onComplete={props.handleComplete} />
            </Modal>
          )}
        </S.CustomModal>
      )}
    </>
  );
}
