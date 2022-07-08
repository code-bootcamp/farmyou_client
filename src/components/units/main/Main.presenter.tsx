import * as S from "./Main.styles";
export default function MainUI() {
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
      {/* <S.Title>
        생산자를 보호하고
        <br /> 소비자의 먹거리 안전을 보장하는
        <span style={{ fontWeight: "700" }}>로컬푸드</span> 온라인 마켓
      </S.Title> */}
      <S.SubTitle>
        생산자를 보호하고소비자의 먹거리 안전을 보장하는 <br />
        <span style={{ fontWeight: "700" }}>로컬푸드</span> 온라인 마켓
      </S.SubTitle>
      {/* <S.Title>“행복한 밥상 팜유와 함께하세요”</S.Title> */}
      <S.NextIcon>
        <S.Icon src="/icons/arrow.svg" />
      </S.NextIcon>
      <S.InfoWrapper>
        <S.InfoTitle>로컬푸드란?</S.InfoTitle>
        <S.InfoContents>
          <span style={{ fontSize: "2vw" }}>로컬푸드</span>는{" "}
          <b>
            지역에서 생산한 먹거리를 장거리 이동과 다단계 유통과정을 거치지 않고
            지역에서 소비하는 새로운 먹거리
          </b>{" "}
          <br /> 유통문화로 장거리 운송을 거치지 않은 지역 농산물(흔히 반경 50km
          이내에서 생산된 농산물)을 지칭합니다.
        </S.InfoContents>
      </S.InfoWrapper>
    </S.Body>
  );
}
