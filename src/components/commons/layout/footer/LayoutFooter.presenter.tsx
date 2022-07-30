import * as S from "./LayoutFooter.styles";
export default function LayoutFooterUI() {
  return (
    <S.Body>
      <S.Wrapper>
        <S.RightWrapper>
          <S.LogoImg src="/logo/boldw.png" />
          <S.Content>(주)FARM YOU</S.Content>
          <S.ContentWrapper>
            <S.Title>관리책임</S.Title>
            <S.Content>전국농협로컬푸드직매장협의회 / 팜유</S.Content>
          </S.ContentWrapper>
          <S.ContentWrapper>
            <S.Title>대표번호</S.Title>
            <S.Content>02-0000-0000</S.Content>
          </S.ContentWrapper>
        </S.RightWrapper>
        <S.LeftWrapper>
          <S.LeftItem>개인정보처리방침</S.LeftItem>
          <S.DivideLine />
          <S.LeftItem>이용약관</S.LeftItem>
          <S.DivideLine />
          <S.LeftItem>이메일 무단수집 거부</S.LeftItem>
          <S.DivideLine />
          <S.LeftItem>고객센터</S.LeftItem>
        </S.LeftWrapper>
      </S.Wrapper>
    </S.Body>
  );
}
