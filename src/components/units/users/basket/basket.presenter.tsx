import ButtonComponent from "../../../commons/buttons";
import RowCapsule from "../../../commons/capsule/rowCapsule/rowCapsule.container";
import * as S from "./basket.styles";
import { IBaskets, IBasketUIProps } from "./basket.types";
// import { v4 as uuidv4 } from "uuid";

export default function BasketUI(props: IBasketUIProps) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.PageHeader>장바구니</S.PageHeader>
        <S.Header>로컬푸드 직매장 장바구니</S.Header>
        <S.DivideLine />
        <S.ListWrapper>
          {props.localFoodData.map((el: IBaskets, index: number) => (
            <RowCapsule
              key={el.id}
              foodEl={el}
              index={index}
              foodSum={props.localFoodSum}
              foodSums={props.localFoodSums}
              setFoodSums={props.setLocalFoodSums}
              setFoodBasketsCount={props.setLocalfoodBasketsCount}
              id="localfood"
            />
          ))}
        </S.ListWrapper>

        <S.Header>못난이 상품 장바구니</S.Header>
        <S.DivideLine />
        <S.ListWrapper>
          {props.bFoodData.map((el: IBaskets, index: number) => (
            <RowCapsule
              key={el.id}
              foodEl={el}
              index={index}
              foodSum={props.bFoodSum}
              foodSums={props.bFoodSums}
              setFoodSums={props.setBFoodSums}
              setFoodBasketsCount={props.setBfoodBasketsCount}
              id="bfood"
            />
          ))}
        </S.ListWrapper>

        {/* 상품 총액, 결제비용 */}
        <S.Header>결제 예상 금액</S.Header>
        <S.DivideLine />
        <S.Payment>
          <S.PriceWrapper>
            <S.Text>로컬푸드 상품금액</S.Text>
            <S.Price>
              <S.Text>{props.localFoodSum}</S.Text>
              <S.Won>원</S.Won>
            </S.Price>
          </S.PriceWrapper>
          <S.PriceWrapper>
            <S.Text>못난이 상품 삼풍금액</S.Text>
            <S.Price>
              <S.Text>{props.bFoodSum}</S.Text>
              <S.Won>원</S.Won>
            </S.Price>
          </S.PriceWrapper>
          <S.PriceWrapper>
            <S.Text>배송비</S.Text>
            <S.Price>
              <S.Text>0</S.Text>
              <S.Won>원</S.Won>
            </S.Price>
          </S.PriceWrapper>
          <S.DivideLine />
          <S.Total style={{ fontWeight: "bold" }}>
            <S.Text>결제금액</S.Text>
            <S.PriceWrapper>
              <S.Text>{props.bFoodSum + props.localFoodSum}</S.Text>
              <S.Won>원</S.Won>
            </S.PriceWrapper>
          </S.Total>
        </S.Payment>
        <S.BtnWrapper>
          <ButtonComponent title="취소하기" buttonColor="#bdbdbd" />
          <ButtonComponent title="구매하기" buttonColor="#F6651E" />
        </S.BtnWrapper>
      </S.Wrapper>
    </S.Body>
  );
}
