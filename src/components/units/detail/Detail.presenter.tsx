import ButtonComponent from "../../commons/buttons";
import * as S from "./Detail.styles";
import { IDetailUIProps } from "./Detail.types";
import Question from "./question/Question.container";

export default function DetailUI(props: IDetailUIProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <S.Body>
      <S.Wrapper>
        <S.TopWrapper>
          <S.ImageWrapper>
            <S.MainImage
              src={props.mainImageSrc || "/apple_slider.png"}
            ></S.MainImage>
            <S.SubImageWrapper>
              <S.StyledSlider {...settings}>
                {new Array(3).fill(1).map((_, index) => {
                  return (
                    <S.SubImage
                      onClick={props.onClickSubImage}
                      key={index}
                      src="/apple_slider.png"
                    ></S.SubImage>
                  );
                })}
                {new Array(4).fill(1).map((_, index) => {
                  return (
                    <S.SubImage
                      onClick={props.onClickSubImage}
                      key={index}
                      src="/icons/delete.svg"
                    ></S.SubImage>
                  );
                })}
              </S.StyledSlider>
            </S.SubImageWrapper>
          </S.ImageWrapper>
          <S.MainContentsWrapper>
            <S.MainContentsHeader>
              {/* 여기 아직 안들어감 아이디만 받아오게 되어있는데 일단 그거 아니고 seller 정보 전체가 필요 */}
              <S.ItemSeller>
                {props.data?.fetchUglyProduct?.seller?.name}
              </S.ItemSeller>
              <S.IconWrapper>
                <S.Icon src="/icons/list/carrot.png"></S.Icon>
                <S.Icon src="/icons/list/garlic.png"></S.Icon>
              </S.IconWrapper>
            </S.MainContentsHeader>
            <S.MainContentsBody>
              <S.ItemName>{props.data?.fetchUglyProduct?.title}</S.ItemName>
              <S.ItemPrice>
                {(props.data?.fetchUglyProduct?.price || 0).toLocaleString()}원
              </S.ItemPrice>
            </S.MainContentsBody>
            <S.MainContentsFooter>
              <S.CountInput
                placeholder="수량을 입력해주세요."
                type="number"
                onChange={props.onChangeBuyQuantity}
              ></S.CountInput>
              <S.TotalPrice>
                {props.buyQuantity.toLocaleString()} X{" "}
                {(props.data?.fetchUglyProduct?.price || 0).toLocaleString()}
                원={" "}
                {(
                  props.buyQuantity * (props.data?.fetchUglyProduct?.price || 0)
                ).toLocaleString()}
                원
              </S.TotalPrice>
              <S.ButtonWrapper>
                <ButtonComponent
                  buttonColor="#bdbdbd"
                  title="장바구니"
                ></ButtonComponent>
                <ButtonComponent
                  buttonColor="#F6651E"
                  title="구매하기"
                ></ButtonComponent>
              </S.ButtonWrapper>
            </S.MainContentsFooter>
          </S.MainContentsWrapper>
        </S.TopWrapper>
        <S.Contents>{props.data?.fetchUglyProduct?.content}</S.Contents>
        <Question></Question>
      </S.Wrapper>
    </S.Body>
  );
}
