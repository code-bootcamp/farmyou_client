import ButtonComponent from "../../commons/buttons";
import * as S from "./Detail.styles";
import Question from "./question/Question.container";

export default function DetailUI() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <S.OutLine>
      <S.Wrapper>
        <S.TopWrapper>
          <S.ImageWrapper>
            <S.MainImage src="/apple_slider.png"></S.MainImage>
            <S.SubImageWrapper>
              <S.StyledSlider {...settings}>
                <S.SubImage src="/apple_slider.png"></S.SubImage>
                <S.SubImage src="/apple_slider.png"></S.SubImage>
                <S.SubImage src="/apple_slider.png"></S.SubImage>
                <S.SubImage src="/apple_slider.png"></S.SubImage>
                <S.SubImage src="/apple_slider.png"></S.SubImage>
                <S.SubImage src="/apple_slider.png"></S.SubImage>
                <S.SubImage src="/apple_slider.png"></S.SubImage>
                <S.SubImage src="/apple_slider.png"></S.SubImage>
                <S.SubImage src="/apple_slider.png"></S.SubImage>
                <S.SubImage src="/apple_slider.png"></S.SubImage>
              </S.StyledSlider>
            </S.SubImageWrapper>
          </S.ImageWrapper>
          <S.MainContentsWrapper>
            <S.MainContentsHeader>
              <S.ItemSeller>용현이네 과수원</S.ItemSeller>
              <S.IconWrapper>
                <S.Icon src="/icons/list/carrot.png"></S.Icon>
                <S.Icon src="/icons/list/garlic.png"></S.Icon>
              </S.IconWrapper>
            </S.MainContentsHeader>
            <S.MainContentsBody>
              <S.ItemName>맛있는 사과 1KG 팜</S.ItemName>
              <S.ItemPrice>19,000원</S.ItemPrice>
            </S.MainContentsBody>
            <S.MainContentsFooter>
              <S.CountInput
                placeholder="수량을 입력해주세요."
                type="number"
              ></S.CountInput>
              <S.TotalPrice>1 X 19,000원 = 19,000원</S.TotalPrice>
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
        <S.Contents>
          상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내
          용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품
          내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상
          품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용
          상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내
          용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품
          내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상
          품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용
          상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내
          용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품
          내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상
          품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용 상 품 내 용
          상 품 내 용 상 품 내 용 상 품 내 용
        </S.Contents>
        <Question></Question>
      </S.Wrapper>
    </S.OutLine>
  );
}
