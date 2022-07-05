import * as S from "./LayoutHeader.styles";
export default function LayoutHeaderUI() {
  return (
    <S.Body>
      <S.LogoImg src="/logoimgs/FarmYouHeaderLogo.png" />
      <S.MenuWrapper>
        <S.MenuFunction>로그인</S.MenuFunction>
        <S.MenuCart src="/icons/cart.png" />
      </S.MenuWrapper>
    </S.Body>
  );
}
