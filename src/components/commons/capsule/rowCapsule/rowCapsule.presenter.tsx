import * as S from "./rowCapsule.styles";

export default function RowCapsuleUI() {
  return (
    <S.Wrapper>
      <S.ImageWrapper>NoImage</S.ImageWrapper>
      <S.TextWrapper>
        <S.InfoWrapper>
          <S.ProductName>상품이름</S.ProductName>
          <S.DeleteBtn>X</S.DeleteBtn>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.ProductSeller>판매자이름</S.ProductSeller>
          <S.ProductPrice>99,000원</S.ProductPrice>
        </S.InfoWrapper>
      </S.TextWrapper>
    </S.Wrapper>
  );
}
