import * as S from "./rowCapsule.styles";

export default function RowCapsuleUI(props: any) {
  return (
    <S.Wrapper>
      <S.ImageWrapper src="/apple_slider.png" />
      <S.InfoWrapper>
        <S.InfoLeftWrapper>
          <S.Name>{props.bFoodEl?.title}</S.Name>
          <S.Seller>{props.bFoodEl?.seller.name}</S.Seller>
          <S.Price>{props.bFoodEl?.price.toLocaleString()}원</S.Price>
        </S.InfoLeftWrapper>
        <S.InfoRightWrapper>
          <S.CountWrapper>
            <S.CountText>수량</S.CountText>
            <S.CountInput value={props.count} onChange={props.onChangeCount} />
            {/* <S.CountInput>{props.count}</S.CountInput> */}
            <S.CountUpDownButtonWrapper>
              <S.CountUpDownButton
                src="/icons/polygon_up.svg"
                onClick={props.onClickCountUp}
              />
              <S.CountUpDownButton
                src="/icons/polygon_down.svg"
                onClick={props.onClickCountDown}
              />
            </S.CountUpDownButtonWrapper>
          </S.CountWrapper>
        </S.InfoRightWrapper>
      </S.InfoWrapper>
      <S.DeleteButtonWrapper>
        <S.DeleteButton
          id={props.bFoodEl?.id}
          src="/icons/delete.svg"
          onClick={props.onCliCkDeleteBfood}
        />
      </S.DeleteButtonWrapper>
    </S.Wrapper>
  );
}
