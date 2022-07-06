import ButtonComponent from "../../../commons/buttons";
import RowCapsule from "../../../commons/capsule/rowCapsule/rowCapsule.container";
import * as S from "./basket.styles";

export default function BasketUI() {
  return (
    <S.Wrapper>
      <S.Header>로컬푸드 직매장 장바구니</S.Header>
      <S.DevideLine></S.DevideLine>
      <S.ListWrapper>
        {/* 아래 내용 Map으로 뿌려서 el 받아오기 */}
        <S.DevideWrapper>
          <S.Left>
            <RowCapsule />
          </S.Left>
          {/* <S.VerticalDevideLine></S.VerticalDevideLine> */}
          <S.Right>
            <S.RightUp>
              <S.Text>수량</S.Text>
              <S.ProductCount defaultValue={1}></S.ProductCount>
            </S.RightUp>
            <S.RightDown>
              <S.UpBtn src="/icons/arrow_upward.png"></S.UpBtn>
              <S.UpBtn src="/icons/arrow_downward.png"></S.UpBtn>
            </S.RightDown>
          </S.Right>
        </S.DevideWrapper>
      </S.ListWrapper>
      <S.Header>못난이 상품 장바구니</S.Header>
      <S.DevideLine></S.DevideLine>
      <S.ListWrapper>
        {/* 아래 내용 Map으로 뿌려서 el 받아오기 */}
        <S.DevideWrapper>
          <S.Left>
            <RowCapsule />
          </S.Left>
          {/* <S.VerticalDevideLine></S.VerticalDevideLine> */}
          <S.Right>
            <S.RightUp>
              <S.Text>수량</S.Text>
              <S.ProductCount defaultValue={1}></S.ProductCount>
            </S.RightUp>
            <S.RightDown>
              <S.UpBtn src="/icons/arrow_upward.png"></S.UpBtn>
              <S.UpBtn src="/icons/arrow_downward.png"></S.UpBtn>
            </S.RightDown>
          </S.Right>
        </S.DevideWrapper>
      </S.ListWrapper>
      <S.BtnWrapper>
        <ButtonComponent title="취소하기" buttonColor="#bdbdbd" />
        <ButtonComponent title="구매하기" buttonColor="#055143" />
      </S.BtnWrapper>
    </S.Wrapper>
  );
}
