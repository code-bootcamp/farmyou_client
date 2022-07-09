import * as S from "./rowCapsule.styles";

export default function RowCapsuleUI() {
  return (
    <S.Wrapper>
      <S.ImageWrapper src="/apple_slider.png" />
      <S.InfoWrapper>
        <S.InfoLeftWrapper>
          <S.Name>상품이름상품이름</S.Name>
          <S.Seller>로컬푸드 구로점</S.Seller>
          <S.Price>9,900원</S.Price>
        </S.InfoLeftWrapper>
        <S.InfoRightWrapper>
          <S.CountWrapper>
            <S.CountText>수량</S.CountText>
            <S.CountInput />
            <S.CountUpDownButtonWrapper>
              <S.CountUpDownButton src="/icons/polygon_up.svg" />
              <S.CountUpDownButton src="/icons/polygon_down.svg" />
            </S.CountUpDownButtonWrapper>
          </S.CountWrapper>
        </S.InfoRightWrapper>
      </S.InfoWrapper>
      <S.DeleteButtonWrapper>
        <S.DeleteButton src="/icons/delete.svg" />
      </S.DeleteButtonWrapper>
    </S.Wrapper>
  );
}
