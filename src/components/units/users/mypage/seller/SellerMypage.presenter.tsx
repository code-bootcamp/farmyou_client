import ButtonComponent from "../../../../commons/buttons";
import InputComponent from "../../../../commons/inputs";
import * as S from "./SellerMypage.styles";
import { ISellerMypageUiProps } from "./SellerMypage.types";
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
                    <S.OrderCheckBoxIcon src="/icons/product_board.svg" />
                  </S.BoxIcons>
                  <S.BoxTitle>상품게시글</S.BoxTitle>
                  <S.Count>3</S.Count>
                </S.Box>
                <S.LengthDivideLine />
                <S.Box>
                  <S.BoxIcons>
                    <S.SellBoxIcon src="/icons/sell.svg" />
                  </S.BoxIcons>
                  <S.BoxTitle>판매량</S.BoxTitle>
                  <S.Count>1</S.Count>
                </S.Box>
                <S.LengthDivideLine></S.LengthDivideLine>
                <S.Box>
                  <S.BoxIcons>
                    <S.LikeBoxIcon src="/icons/like.svg" />
                  </S.BoxIcons>
                  <S.BoxTitle>좋아요</S.BoxTitle>
                  <S.Count>0</S.Count>
                </S.Box>
              </S.InfoBoxWrapper>
            </S.InfoRightWrapper>
          </S.InfoWrapper>
          <S.ListWrapper>
            <S.SelectListWrapper>
              <S.SelectLocalFood isSelect={true}>
                못난이 상품 게시글 내역
              </S.SelectLocalFood>
              <S.SelectLocalFood isSelect={false}>
                못난이 상품 판매내역
              </S.SelectLocalFood>
            </S.SelectListWrapper>
            <S.ListItemWrapper>
              {new Array(2).fill(1).map((_, index) => {
                return (
                  <S.ListItem key={index}>
                    <S.ItemImg></S.ItemImg>
                    <S.ItemInfoWrapper>
                      <S.ItemTitle>달달한 충주 사과 1kg</S.ItemTitle>
                      <S.ItemPrice>99000원</S.ItemPrice>
                      <S.ItemCreateDate>2022.10.23</S.ItemCreateDate>
                    </S.ItemInfoWrapper>
                    {/* <S.LengthDivideLine /> */}
                    <S.ItemSubInfoWrapper>
                      {/* <S.ReturnButton>취소요청</S.ReturnButton> */}
                    </S.ItemSubInfoWrapper>
                    <S.ItemSubInfoWrapper>
                      <S.SellerName>필요한 내용으로 수정 필요</S.SellerName>
                      <S.SellerPhoneNum>수정</S.SellerPhoneNum>
                    </S.ItemSubInfoWrapper>
                  </S.ListItem>
                );
              })}
              <S.MoreItem>+</S.MoreItem>
            </S.ListItemWrapper>
          </S.ListWrapper>
        </S.Body>
        {/* <Tracking></Tracking> */}
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
