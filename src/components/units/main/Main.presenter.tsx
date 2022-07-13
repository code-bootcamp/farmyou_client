import LocalListCapsule from "./LocalListCapsule";
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
                onChange={props.onChangeSearch}
                placeholder="주소를 입력해 가장 가까운 로컬푸드 마켓을 찾아보세요!"
                type="text"
              />
              <S.SearchIcon src="/icons/search.png" />
            </S.LocalSearchBar>
            {(props.isSearch && (
              <div>
                <LocalListCapsule />
                <LocalListCapsule />
                <LocalListCapsule />
              </div>
            )) || (
              <div
                style={{ width: "100%", height: "500px", textAlign: "center" }}
              >
                주소지를 입력해주세요
              </div>
            )}
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
          <S.BfoodButton onClick={props.onClickMove(`/bfood`)}>
            바로가기
          </S.BfoodButton>
        </S.BfoodRightWRapper>
      </S.BfoodWrapper>
    </S.Body>
  );
}
