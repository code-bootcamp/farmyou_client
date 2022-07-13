import * as S from "./BuyerMypage.styles";
export default function BuyerMypageUI() {
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
                    <S.ItemCreateDate>구매 날짜 : 2022.10.23</S.ItemCreateDate>
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
  );
}
