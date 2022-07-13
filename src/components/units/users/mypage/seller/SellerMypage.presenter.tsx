import * as S from "./SellerMypage.styles";
import { ISellerMypageUiProps } from "./SellerMypage.types";
import Tracking from "./tracking";
export default function SellerMypageUI(props: ISellerMypageUiProps) {
  return (
    <S.Wrapper>
      <S.Body>
        <S.InfoWrapper>
          <S.InfoProfile>
            <S.ProfileImage />
            <S.ProfileName>홍길동</S.ProfileName>
            <S.FunctionWrapper>
              <S.Function>로그아웃</S.Function>
              <S.LengthDivideLine />
              <S.Function>회원정보수정</S.Function>
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
                          <Tracking trackingRef={props.trackingRef}></Tracking>
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
  );
}
