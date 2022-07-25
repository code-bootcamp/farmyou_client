import ButtonComponent from "../../commons/buttons";
import * as S from "./Detail.styles";
import { IDetailUIProps } from "./Detail.types";
import Question from "./question/Question.container";
import { v4 as uuidv4 } from "uuid";
import Dompurify from "dompurify";

export default function DetailUI(props: IDetailUIProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    auto: false,
  };

  return (
    <S.Body>
      <S.Wrapper>
        <S.TopWrapper>
          <S.ImageWrapper>
            <S.MainImage
              src={`https://storage.googleapis.com/${props.mainImageSrc}`}
            ></S.MainImage>
            <S.SubImageWrapper>
              <S.StyledSlider {...settings}>
                {props.data.files[0]?.url.split(",").map((el) => {
                  return (
                    <S.SubImage
                      onClick={props.onClickSubImage}
                      key={uuidv4()}
                      id={el}
                      src={`https://storage.googleapis.com/${el}`}
                    ></S.SubImage>
                  );
                })}
                {props.data.files[0]?.url.split(",").length < 5 &&
                  new Array(5 - props.data.files[0]?.url.split(",").length)
                    .fill(1)
                    .map((_) => {
                      return <div key={uuidv4()}></div>;
                    })}
              </S.StyledSlider>
            </S.SubImageWrapper>
          </S.ImageWrapper>
          <S.MainContentsWrapper>
            <S.MainContentsHeader>
              <S.ItemSeller>
                {props.data?.seller?.name || props.data?.directStore?.name}
              </S.ItemSeller>
            </S.MainContentsHeader>
            <S.MainContentsBody>
              <S.ItemName>{props.data?.title}</S.ItemName>
              <S.ItemPrice>
                {(props.data?.price || 0).toLocaleString()}원
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
                {(props.data?.price || 0).toLocaleString()}
                원={" "}
                {(
                  props.buyQuantity * (props.data?.price || 0)
                ).toLocaleString()}
                원
              </S.TotalPrice>
              <S.ButtonWrapper>
                <ButtonComponent
                  buttonColor="#bdbdbd"
                  title="장바구니"
                  onClick={props.onClickBasketsButton}
                ></ButtonComponent>
                <ButtonComponent
                  onClick={props.onClickBuyButton}
                  buttonColor="#F6651E"
                  title="구매하기"
                ></ButtonComponent>
              </S.ButtonWrapper>
            </S.MainContentsFooter>
          </S.MainContentsWrapper>
        </S.TopWrapper>
        <S.Contents
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(props.data.content),
          }}
        ></S.Contents>
        <Question data={props.data}></Question>
      </S.Wrapper>
    </S.Body>
  );
}
