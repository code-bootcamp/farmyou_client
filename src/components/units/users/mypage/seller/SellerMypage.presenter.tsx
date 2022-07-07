import * as S from "./SellerMypage.styles";
export default function SellerMypageUI() {
  return (
    <S.Wrapper>
      <S.Header>마이페이지</S.Header>
      <S.DevideLine></S.DevideLine>
      <S.Body>
        <S.InfoWrapper>
          <S.InfoProfile>
            <S.ProfileImage></S.ProfileImage>
            <S.ProfileName>홍길동</S.ProfileName>
            <S.FunctionWrapper>
              <S.Function>로그아웃</S.Function>
              <S.DivideLine></S.DivideLine>
              <S.Function>회원정보수정</S.Function>
            </S.FunctionWrapper>
          </S.InfoProfile>
          <S.InfoRightWrapper>
            <S.ToggleWrapper>
              구매자로 전환하기
              <S.ToggleSwitch defaultChecked />
            </S.ToggleWrapper>
            <S.InfoBoxWrapper>
              <S.Box>
                <S.BoxIcons>
                  <S.OrderCheckBoxIcon src="/icons/mypage/ordercheck.png" />
                </S.BoxIcons>
                <S.BoxTitle>상품 게시글</S.BoxTitle>
                <S.Count>3</S.Count>
              </S.Box>
              <S.DivideLine></S.DivideLine>
              <S.Box>
                <S.BoxIcons>
                  <S.DeliveryBoxIcon src="/icons/mypage/delivery.png" />
                </S.BoxIcons>
                <S.BoxTitle>배송중</S.BoxTitle>
                <S.Count>1</S.Count>
              </S.Box>
              <S.DivideLine></S.DivideLine>
              <S.Box>
                <S.BoxIcons>
                  <S.BoxBoxIcon src="/icons/mypage/box.png" />
                </S.BoxIcons>
                <S.BoxTitle>총 판매량</S.BoxTitle>
                <S.Count>6</S.Count>
              </S.Box>
              <S.DivideLine></S.DivideLine>
              <S.Box>
                <S.BoxIcons>
                  <S.ReturnBoxIcon src="/icons/mypage/return.png" />
                </S.BoxIcons>
                <S.BoxTitle>좋아요</S.BoxTitle>
                <S.Count>0</S.Count>
              </S.Box>
            </S.InfoBoxWrapper>
          </S.InfoRightWrapper>
        </S.InfoWrapper>
        <S.ListWrapper>
          <S.SelectListWrapper>
            <S.SelectList isSelect={true}>판매중</S.SelectList>
            <S.SelectList isSelect={false}>판매완료</S.SelectList>
          </S.SelectListWrapper>
          <S.ListItemWrapper>
            {new Array(2).fill(1).map((_, index) => {
              return (
                <S.ListItem key={index}>
                  <S.ItemImg></S.ItemImg>
                  <S.ItemInfoWrapper>
                    <S.ItemTitle>못낫지만 달달한 충주 사과 1kg</S.ItemTitle>
                    <S.ItemPrice>99000원 / 10개</S.ItemPrice>
                    <S.ItemCreateDate>2022.10.23</S.ItemCreateDate>
                  </S.ItemInfoWrapper>
                  <S.DivideLine />
                  <S.ItemSubInfoWrapper>
                    <S.LeftOver>잔여 재고량</S.LeftOver>
                    <S.LeftOverCount>40</S.LeftOverCount>
                  </S.ItemSubInfoWrapper>
                </S.ListItem>
              );
            })}
            <S.MoreItem>+</S.MoreItem>
          </S.ListItemWrapper>
        </S.ListWrapper>
      </S.Body>
    </S.Wrapper>
  );
}
