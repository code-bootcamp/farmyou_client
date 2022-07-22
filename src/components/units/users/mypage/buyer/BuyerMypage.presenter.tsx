import ButtonComponent from "../../../../commons/buttons";
import InputComponent from "../../../../commons/inputs";
import * as S from "./BuyerMypage.styles";
import { IBuyerMypageUIProps } from "./BuyerMypage.types";
import Tracking from "./tracking";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../commons/lib/utils";
export default function BuyerMypageUI(props: IBuyerMypageUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.Body>
          <S.InfoWrapper>
            <S.InfoProfile>
              <S.ProfileImage />
              <S.ProfileName>
                {props.userData?.fetchUserLoggedIn?.name}
              </S.ProfileName>
              <S.FunctionWrapper>
                <S.Function>로그아웃</S.Function>
                <S.LengthDivideLine />
                <S.Function onClick={props.showPasswordModal}>
                  회원정보수정
                </S.Function>
              </S.FunctionWrapper>
            </S.InfoProfile>
            <S.InfoRightWrapper>
              <S.InfoBoxWrapper>
                <S.Box>
                  <S.BoxIcons>
                    <S.OrderCheckBoxIcon src="/icons/mypage/ordercheck.png" />
                  </S.BoxIcons>
                  <S.BoxTitle>결제완료</S.BoxTitle>
                  <S.Count>{props.count}</S.Count>
                </S.Box>
                <S.LengthDivideLine />
                <S.Box>
                  <S.BoxIcons>
                    <S.DeliveryBoxIcon src="/icons/mypage/delivery.png" />
                  </S.BoxIcons>
                  <S.BoxTitle onClick={props.onClickPostTracking}>
                    배송
                  </S.BoxTitle>
                  <S.Count>1</S.Count>
                </S.Box>
                {/* <S.LengthDivideLine></S.LengthDivideLine>
                <S.Box>
                  <S.BoxIcons>
                    <S.BoxBoxIcon src="/icons/mypage/box.png" />
                  </S.BoxIcons>
                  <S.BoxTitle>수령완료</S.BoxTitle>
                  <S.Count>6</S.Count>
                </S.Box> */}
                <S.LengthDivideLine></S.LengthDivideLine>
                <S.Box>
                  <S.BoxIcons>
                    {" "}
                    <S.ReturnBoxIcon src="/icons/mypage/return.png" />
                  </S.BoxIcons>
                  <S.BoxTitle>결제취소</S.BoxTitle>
                  <S.Count>0</S.Count>
                </S.Box>
              </S.InfoBoxWrapper>
            </S.InfoRightWrapper>
          </S.InfoWrapper>
          <S.ListWrapper>
            <S.SelectListWrapper>
              <S.SelectLocalFood
                isSelect={props.isSelect}
                onClick={props.onClickLocalList}
              >
                로컬푸드 구매내역
              </S.SelectLocalFood>
              <S.SelectLocalFood
                isSelect={!props.isSelect}
                onClick={props.onClickBfoodList}
              >
                못난이 상품 구매내역
              </S.SelectLocalFood>
            </S.SelectListWrapper>
            <S.ListItemWrapper>
              {props.isSelect
                ? props.completePaymentsLocal
                    ?.slice(0, props.sliceNumber)
                    .map((el) => {
                      return (
                        // 라우터로 id 값을 통해서 이동하는데 id에 index가 들어가서 제대로 안들어감
                        <S.ListItem key={uuidv4()}>
                          <S.ItemImg></S.ItemImg>
                          <S.ItemInfoWrapper
                            onClick={props.onClickLocalDetail}
                            id={el.id}
                          >
                            <S.ItemTitle>{el.productDirect?.title}</S.ItemTitle>
                            <S.ItemPrice>
                              {el.productDirect?.price?.toLocaleString()}원
                            </S.ItemPrice>
                            <S.ItemCreateDate>
                              구매 날짜 : {getDate(el.createdAt)}
                            </S.ItemCreateDate>
                          </S.ItemInfoWrapper>
                          <S.ItemSubInfoWrapper>
                            {el.invoice ? (
                              <S.ReturnButton
                                onClick={props.onClickPostTracking}
                              >
                                배송조회
                                <Tracking
                                  trackingRef={props.trackingRef}
                                ></Tracking>
                              </S.ReturnButton>
                            ) : (
                              <S.ReturnButton>취소요청</S.ReturnButton>
                            )}
                          </S.ItemSubInfoWrapper>
                          <S.ItemSubInfoWrapper>
                            <S.SellerName>판매자 이름</S.SellerName>
                            <S.SellerPhoneNum>010-xxxx-xxxx</S.SellerPhoneNum>
                          </S.ItemSubInfoWrapper>
                        </S.ListItem>
                      );
                    })
                : props.completePaymentsUgly
                    ?.slice(0, props.sliceNumber)
                    .map((el) => {
                      return (
                        <S.ListItem key={uuidv4()} id={el.id}>
                          <S.ItemImg></S.ItemImg>
                          <S.ItemInfoWrapper
                            onClick={props.onClickBfoodDetail}
                            id={el.id}
                          >
                            <S.ItemTitle>{el.productUgly?.title}</S.ItemTitle>
                            <S.ItemPrice>
                              {el.productUgly?.price.toLocaleString()}원
                            </S.ItemPrice>
                            <S.ItemCreateDate>
                              구매 날짜 : {getDate(el.createdAt)}
                            </S.ItemCreateDate>
                          </S.ItemInfoWrapper>
                          {/* <S.LengthDivideLine /> */}
                          <S.ItemSubInfoWrapper>
                            <S.ReturnButton>
                              {el.invoice ? (
                                <S.ReturnButton
                                  onClick={props.onClickPostTracking}
                                >
                                  배송조회
                                  <Tracking
                                    trackingRef={props.trackingRef}
                                  ></Tracking>
                                </S.ReturnButton>
                              ) : (
                                <S.ReturnButton>취소요청</S.ReturnButton>
                              )}
                            </S.ReturnButton>
                          </S.ItemSubInfoWrapper>
                          <S.ItemSubInfoWrapper>
                            <S.SellerName>판매자 이름</S.SellerName>
                            <S.SellerPhoneNum>010-xxxx-xxxx</S.SellerPhoneNum>
                          </S.ItemSubInfoWrapper>
                        </S.ListItem>
                      );
                    })}
              <S.MoreItem onClick={props.onClickFetchMore}>더보기</S.MoreItem>
            </S.ListItemWrapper>
          </S.ListWrapper>
        </S.Body>
      </S.Wrapper>
      {props.isUserVisible && (
        <S.Model>
          <S.PasswordModalWrapper>
            <S.CancelIcon
              src="/icons/cancel.png"
              onClick={props.passwordCancel}
            />
            <S.InputWrapper>
              <S.InputTitle>비밀번호 : </S.InputTitle>
              <InputComponent
                onChange={props.onChangePassword}
                placeholder="비밀번호를 입력해주세요."
                type="password"
              />
            </S.InputWrapper>
            <S.Button onClick={props.onClickConfirm}>확인</S.Button>
            <S.Error>{props.error}</S.Error>
          </S.PasswordModalWrapper>
        </S.Model>
      )}
      {props.isEditVisible && (
        <S.Model>
          <S.EditModalWrapper onSubmit={props.handleSubmit(props.onClickEdit)}>
            <S.Title>회원 정보 수정</S.Title>
            <S.CancelIcon src="/icons/cancel.png" onClick={props.editCancel} />
            <S.ModalDivideLine />
            <S.EditWrapper>
              {props.fileUrl ? (
                <S.Img
                  onClick={props.onClickUpload}
                  src={`https://storage.googleapis.com/${props.fileUrl}`}
                />
              ) : (
                <S.UploadButton onClick={props.onClickUpload}>
                  <>+</>
                  <>Upload</>
                </S.UploadButton>
              )}
              <S.UploadFileHidden
                type="file"
                ref={props.fileRef}
                onChange={props.onChangeFile}
              />
              <S.InputWrapper>
                <S.InputTitle>이름 : </S.InputTitle>
                <InputComponent
                  register={props.register("name")}
                  placeholder="이름을 입력해주세요."
                />
              </S.InputWrapper>
              <S.InputWrapper>
                <S.InputTitle>전화번호 : </S.InputTitle>
                <InputComponent
                  register={props.register("phone")}
                  placeholder="전화번호를 입력해주세요.( - 생략)"
                />
              </S.InputWrapper>
              <S.UserAddresses>
                <S.InputTitle>주소정보 </S.InputTitle>
                {props.userAddressData?.fetchAddressesOfTheUser.map(
                  (el: any) => (
                    <S.AddressWrapper key={el.id}>
                      <S.Address>
                        <S.UserAddress>주소 : {el.address}</S.UserAddress>
                        <S.UserAddressDetail>
                          상세주소 : {el.detailedAddress}
                        </S.UserAddressDetail>
                      </S.Address>
                      {el.isMain && <S.MainAddress>기본 주소지</S.MainAddress>}
                      {!el.isMain && (
                        <S.AddressOption>
                          <S.Option
                            id={el.id}
                            onClick={props.onClickMainAddress}
                          >
                            기본 주소지 설정
                          </S.Option>
                          <S.Option
                            id={el.id}
                            onClick={props.onClickDeleteAddress}
                          >
                            삭제
                          </S.Option>
                        </S.AddressOption>
                      )}
                    </S.AddressWrapper>
                  )
                )}
              </S.UserAddresses>
              <S.InputWrapper>
                <S.InputTitle>비밀번호 : </S.InputTitle>
                <InputComponent
                  register={props.register("password")}
                  placeholder="변경할 비밀번호를 입력해주세요."
                  type="password"
                />
              </S.InputWrapper>
              <ButtonComponent title="수정하기" buttonColor="#F6651E" />
            </S.EditWrapper>
          </S.EditModalWrapper>
        </S.Model>
      )}
    </>
  );
}
