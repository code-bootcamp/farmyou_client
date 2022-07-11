import * as S from "./Main.styles";
import { IMainUIProps } from "./Main.types";

export default function MainUI(props: IMainUIProps) {
  return (
    <S.Body>
      <S.VideoWrapper>
        <S.MainVideo
          muted={true}
          autoPlay={true}
          loop={true}
          src="/bgv/main.mp4"
        />
      </S.VideoWrapper>
      <S.SubTitle>
        생산자를 보호하고
        <br /> 소비자의 먹거리 안전을 보장하는 <br />
        {/* <span style={{ fontWeight: "700" }}>로컬푸드</span> 온라인 마켓 */}
      </S.SubTitle>
      <S.Title>“행복한 밥상 팜유와 함께하세요”</S.Title>
      <S.NextIcon onClick={props.onClickLocal}>
        <S.Icon src="/icons/arrow.svg" />
      </S.NextIcon>
      <S.LocalScrollWrapper ref={props.localRef}>
        <div style={{ height: "100px", width: "100%" }}></div>
        <S.LocalWrapper>
          <S.LocalLeftWrapper>
            <S.LocalTitle>로컬푸드 직매장</S.LocalTitle>
            <S.LocalTitle>바로가기</S.LocalTitle>
            <S.LocalSubTitle>집에서 가까운 매장을 찾아</S.LocalSubTitle>
            <S.LocalSubTitle>
              신선한 농산물을 바로 받아보는 온라인 마켓을 이용해보세요.
            </S.LocalSubTitle>
          </S.LocalLeftWrapper>
          <S.LocalRightWrapper>
            <S.LocalSearchBar>
              <S.LocalSearch
                placeholder="주소를 입력해 가장 가까운 로컬푸드 마켓을 찾아보세요!"
                type="text"
              />
              <S.SearchIcon src="/icons/search.png" />
            </S.LocalSearchBar>
            <S.LocalMarket>
              <S.MarketName>원당농협 로컬푸드직매장</S.MarketName>
              <S.MarketAddress>
                경기도 고양시 덕양구 고양대로1369번길 69
              </S.MarketAddress>
            </S.LocalMarket>
            <S.LocalMarket>
              <S.MarketName>강서농협 로컬푸드직매장 마곡점</S.MarketName>
              <S.MarketAddress>
                서울 강서구 양천로30길 123-28 (마곡동)
              </S.MarketAddress>
            </S.LocalMarket>
            <S.LocalMarket>
              <S.MarketName>진양농협 로컬푸드직매장</S.MarketName>
              <S.MarketAddress>
                경남 진주시 일반성면 동부로 1947 (창촌리)
              </S.MarketAddress>
            </S.LocalMarket>
          </S.LocalRightWrapper>
        </S.LocalWrapper>
      </S.LocalScrollWrapper>
      <S.BfoodWrapper>
        <S.BfoodImgWrapper>
          <S.BfoodImg src="/main/bfood.png" />
        </S.BfoodImgWrapper>
        <S.BfoodRightWRapper>
          <S.BfoodSubTitleWrapper>
            <S.BfoodSubTitleTop>“소비자와 농가의</S.BfoodSubTitleTop>
            <S.BfoodSubTitleLow>새로운 공생방법"</S.BfoodSubTitleLow>
          </S.BfoodSubTitleWrapper>
          <S.BfoodTitle>못난이 농산물 마켓</S.BfoodTitle>
          <S.BfoodButton>바로가기</S.BfoodButton>
        </S.BfoodRightWRapper>
      </S.BfoodWrapper>
    </S.Body>
  );
}
