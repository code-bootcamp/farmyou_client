import * as S from "./Main.styles";
export default function MainUI() {
  return (
    <S.Body>
      <div style={{ height: "100vh" }}>
        <S.MainVideo
          muted={true}
          autoPlay={true}
          loop={true}
          src="/bgv/main.mp4"
        />
      </div>
      <S.Wrapper></S.Wrapper>
    </S.Body>
  );
}
