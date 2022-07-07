import ButtonComponent from "../../../commons/buttons";
import RowCapsule from "../../../commons/capsule/rowCapsule/rowCapsule.container";
import * as S from "./basket.styles";

export default function BasketUI() {
  return (
    <S.OutLine>
      <S.PageHeader>장바구니</S.PageHeader>
      <S.DevideLine></S.DevideLine>
      <S.Wrapper>
        <S.Header>로컬푸드 직매장 장바구니</S.Header>
        <S.DevideLine></S.DevideLine>
        <S.ListWrapper>
          {/* 아래 내용 Map으로 뿌려서 el 받아오기 */}
          <RowCapsule />
        </S.ListWrapper>
        <S.Header>못난이 상품 장바구니</S.Header>
        <S.DevideLine></S.DevideLine>
        <S.ListWrapper>
          {/* 아래 내용 Map으로 뿌려서 el 받아오기 */}
          <RowCapsule />
        </S.ListWrapper>
        <S.DevideLine></S.DevideLine>
        {/* 상품 총액, 결제비용 */}
        <S.Payment>
          <S.Header>결제하기</S.Header>
          <S.Price>
            <S.Text>총 상품금액</S.Text>
            <S.PriceWrapper>
              <S.Text>198,000</S.Text>
              <S.Won>원</S.Won>
            </S.PriceWrapper>
          </S.Price>
          <S.Delivery>
            <S.Text>총 배송비</S.Text>
            <S.PriceWrapper>
              <S.Text>0</S.Text>
              <S.Won>원</S.Won>
            </S.PriceWrapper>
          </S.Delivery>
          <S.DevideLine></S.DevideLine>
          <S.Total>
            <S.Text>결제금액</S.Text>
            <S.PriceWrapper>
              <S.Text>198,000</S.Text>
              <S.Won>원</S.Won>
            </S.PriceWrapper>
          </S.Total>
        </S.Payment>
        <S.BtnWrapper>
          <ButtonComponent title="취소하기" buttonColor="#bdbdbd" />
          <ButtonComponent title="구매하기" buttonColor="#F6651E" />
        </S.BtnWrapper>
      </S.Wrapper>
    </S.OutLine>
  );
}
