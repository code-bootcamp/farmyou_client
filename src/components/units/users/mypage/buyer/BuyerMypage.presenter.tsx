import ButtonComponent from "../../../../commons/buttons";
import InputComponent from "../../../../commons/inputs";
import * as S from "./BuyerMypage.styles";
import { IBuyerMypageUIProps } from "./BuyerMypage.types";
export default function BuyerMypageUI(props: IBuyerMypageUIProps) {
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
                <S.Function onClick={props.showModal}>회원정보수정</S.Function>
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
      </S.Wrapper>
      {props.isVisible && (
        <S.EditModel>
          <S.EditModalWrapper>
            <S.Title>회원 정보 수정</S.Title>
            <S.CancelIcon
              src="/icons/cancel.png"
              onClick={props.handleCancel}
            />
            <S.ModalDivideLine />
            <S.EditWrapper>
              <S.Img />
              <S.InputWrapper>
                <S.InputTitle>이름 : </S.InputTitle>
                <InputComponent placeholder="이름을 입력해주세요." />
              </S.InputWrapper>
              <S.InputWrapper>
                <S.InputTitle>전화번호 : </S.InputTitle>
                <InputComponent placeholder="전화번호를 입력해주세요.( - 생략)" />
              </S.InputWrapper>
              <S.UserAddresses>
                <S.InputTitle>주소정보 </S.InputTitle>
                <S.AddressWrapper>
                  <S.Address>
                    <S.UserAddress>대전 동구 판교1길 3 (판암동)</S.UserAddress>
                    <S.UserAddressDetail>20-30</S.UserAddressDetail>
                  </S.Address>
                  {/* <S.MainAddress>기본 주소지</S.MainAddress> */}
                </S.AddressWrapper>
                <S.AddressWrapper>
                  <S.Address>
                    <S.UserAddress>대전 동구 판교1길 3 (판암동)</S.UserAddress>
                    <S.UserAddressDetail>20-30</S.UserAddressDetail>
                  </S.Address>
                  {/* <S.MainAddress>기본 주소지</S.MainAddress> */}
                </S.AddressWrapper>
              </S.UserAddresses>
              <S.InputWrapper>
                <S.InputTitle>비밀번호 : </S.InputTitle>
                <InputComponent placeholder="변경할 비밀번호를 입력해주세요." />
              </S.InputWrapper>
              <ButtonComponent title="수정하기" buttonColor="#F6651E" />
            </S.EditWrapper>
          </S.EditModalWrapper>
        </S.EditModel>
      )}
    </>
  );
}
