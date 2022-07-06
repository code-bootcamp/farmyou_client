import * as S from "./rowCapsule.styles";

export default function RowCapsuleUI() {
  return (
    <S.Wrapper>
      <S.ImageWrapper>NoImage</S.ImageWrapper>
      <S.TextWrapper>
        <S.InfoWrapper>
          <S.ProductName>
            상품이름상품이름상품이름상품이름상품이름상품이름상품이름상품이름상품이름상품이름
            상품이름상품이름상품이름상품이름상품이름상품이름상품이름상품이름상품이름
          </S.ProductName>
          <S.DeleteBtn>X</S.DeleteBtn>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.ProductSeller>판매자이름</S.ProductSeller>

          <S.Right>
            <S.ProductPrice>99,000원</S.ProductPrice>

            <S.RightUp>
              <S.Text>수량</S.Text>
              <S.ProductCount defaultValue={1}></S.ProductCount>
            </S.RightUp>
            <S.RightDown>
              <S.UpBtn src="/icons/arrow_upward.png"></S.UpBtn>
              <S.UpBtn src="/icons/arrow_downward.png"></S.UpBtn>
            </S.RightDown>
          </S.Right>
        </S.InfoWrapper>
      </S.TextWrapper>
    </S.Wrapper>
  );
}
