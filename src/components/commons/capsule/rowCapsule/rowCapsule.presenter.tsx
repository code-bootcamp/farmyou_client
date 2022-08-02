import * as S from "./rowCapsule.styles";
import { IRowCapsuleUIProps } from "./rowCapsule.types";

export default function RowCapsuleUI(props: IRowCapsuleUIProps) {
  return (
    <S.Wrapper>
      <S.ImageWrapper
        src={`https://storage.googleapis.com/${
          props.foodEl?.files[0].url.split(",")[0]
        }`}
      />
      <S.InfoWrapper>
        <S.InfoLeftWrapper>
          <S.Name>{props.foodEl?.title}</S.Name>
          <S.Seller>{props.foodEl?.seller?.name}</S.Seller>
          <S.Price>{props.foodEl?.price.toLocaleString()}원</S.Price>
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
      <S.DeleteButtonWrapper
        onClick={props.onCliCkDeleteFood}
        id={props.foodEl?.id}
      >
        <S.DeleteButton id={props.id} src="/icons/delete.svg" />
      </S.DeleteButtonWrapper>
    </S.Wrapper>
  );
}
