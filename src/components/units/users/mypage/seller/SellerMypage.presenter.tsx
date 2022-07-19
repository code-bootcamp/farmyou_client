import ButtonComponent from "../../../../commons/buttons";
import InputComponent from "../../../../commons/inputs";
import * as S from "./SellerMypage.styles";
import { ISellerMypageUiProps } from "./SellerMypage.types";
import Tracking from "./tracking";
export default function SellerMypageUI(props: ISellerMypageUiProps) {
  return (
    <>
      <S.Wrapper>
        <S.Body>
          <S.InfoWrapper>
            <S.InfoProfile>
              <S.ProfileImage />
              <S.ProfileName>홍길동</S.ProfileName>
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
                  <S.Count>3</S.Count>
                </S.Box>
                <S.LengthDivideLine />
                <S.Box>
                  <S.BoxIcons>
                    <S.DeliveryBoxIcon src="/icons/mypage/delivery.png" />
                  </S.BoxIcons>
                  <S.BoxTitle onClick={props.onClickPostTracking}>
                    배송중
                  </S.BoxTitle>
                  <S.Count>1</S.Count>
                </S.Box>
                <S.LengthDivideLine></S.LengthDivideLine>
                <S.Box>
                  <S.BoxIcons>
                    <S.BoxBoxIcon src="/icons/mypage/box.png" />
                  </S.BoxIcons>
                  <S.BoxTitle>수령완료</S.BoxTitle>
                  <S.Count>6</S.Count>
                </S.Box>
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
                ? new Array(2).fill(1).map((_, index) => {
                    return (
                      // 라우터로 id 값을 통해서 이동하는데 id에 index가 들어가서 제대로 안들어감
                      <S.ListItem key={index}>
                        <S.ItemImg></S.ItemImg>
                        <S.ItemInfoWrapper
                          onClick={props.onClickLocalDetail}
                          id={String(index)}
                        >
                          <S.ItemTitle>달달한 충주 사과 1kg</S.ItemTitle>
                          <S.ItemPrice>99000원</S.ItemPrice>
                          <S.ItemCreateDate>
                            구매 날짜 : 2022.10.23
                          </S.ItemCreateDate>
                        </S.ItemInfoWrapper>
                        {/* <S.LengthDivideLine /> */}
                        <S.ItemSubInfoWrapper>
                          <S.ReturnButton onClick={props.onClickPostTracking}>
                            배송조회
                            <Tracking
                              trackingRef={props.trackingRef}
                            ></Tracking>
                          </S.ReturnButton>
                        </S.ItemSubInfoWrapper>
                        <S.ItemSubInfoWrapper>
                          <S.SellerName>판매자 이름</S.SellerName>
                          <S.SellerPhoneNum>010-xxxx-xxxx</S.SellerPhoneNum>
                        </S.ItemSubInfoWrapper>
                      </S.ListItem>
                    );
                  })
                : new Array(2).fill(1).map((_, index) => {
                    return (
                      // 라우터로 id 값을 통해서 이동하는데 id에 index가 들어가서 제대로 안들어감
                      <S.ListItem key={index} id={String(index)}>
                        <S.ItemImg></S.ItemImg>
                        <S.ItemInfoWrapper
                          onClick={props.onClickBfoodDetail}
                          id={String(index)}
                        >
                          <S.ItemTitle>달달한 충주 사과 10kg</S.ItemTitle>
                          <S.ItemPrice>99000원</S.ItemPrice>
                          <S.ItemCreateDate>
                            구매 날짜 : 2022.10.23
                          </S.ItemCreateDate>
                        </S.ItemInfoWrapper>
                        {/* <S.LengthDivideLine /> */}
                        <S.ItemSubInfoWrapper>
                          <S.ReturnButton>취소요청</S.ReturnButton>
                        </S.ItemSubInfoWrapper>
                        <S.ItemSubInfoWrapper>
                          <S.SellerName>판매자 이름</S.SellerName>
                          <S.SellerPhoneNum>010-xxxx-xxxx</S.SellerPhoneNum>
                        </S.ItemSubInfoWrapper>
                      </S.ListItem>
                    );
                  })}

              <S.MoreItem>+</S.MoreItem>
            </S.ListItemWrapper>
          </S.ListWrapper>
        </S.Body>
        <Tracking></Tracking>
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
              <S.InputWrapper>
                <S.InputTitle>비밀번호 : </S.InputTitle>
                <InputComponent
                  register={props.register("password")}
                  placeholder="변경할 비밀번호를 입력해주세요."
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
