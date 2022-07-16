import * as S from "./LayoutHeader.styles";
import { slide as Menu } from "react-burger-menu";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";
export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  return (
    <>
      <S.Body
        isCheckList={props.isCheckList}
        isCheck={props.isCheck}
        scroll={props.scroll}
      >
        <S.LogoImg
          src={
            props.isCheckList
              ? props.scroll
                ? "/logo/boldo.png"
                : "/logo/boldw.png"
              : "/logo/boldo.png"
          }
        />
        {props.isLogged ? (
          <S.LoginWrapper>
            <S.LoginMyPage onClick={props.onClickMoveToMypage}>
              ---님의 마이페이지
            </S.LoginMyPage>
            {!props.isCheck && (
              <S.Cart
                onDragOver={props.dragOver}
                onDrop={props.drop}
                onDragLeave={props.dragLeave}
                isIn={props.isIn}
                onClick={props.onClickToCart}
              >
                장바구니
              </S.Cart>
            )}
            <S.HamburgerMenu>
              <Menu styles={props.styles} right>
                <S.Item onClick={props.onClickMoveToLogin}>로그인</S.Item>
                <S.Item onClick={props.onClickMoveToSignup}>회원가입</S.Item>
                {!props.isCheck && <S.Item>장바구니</S.Item>}
              </Menu>
            </S.HamburgerMenu>
          </S.LoginWrapper>
        ) : (
          <S.MenuWrapper>
            <S.MenuFunction onClick={props.onClickMoveToSignup}>
              회원가입
            </S.MenuFunction>
            <S.MenuFunction onClick={props.onClickMoveToLogin}>
              로그인
            </S.MenuFunction>
            {!props.isCheck && (
              <S.Cart
                onDragOver={props.dragOver}
                onDrop={props.drop}
                onDragLeave={props.dragLeave}
                isIn={props.isIn}
                onClick={props.onClickToCart}
              >
                장바구니
              </S.Cart>
            )}
            <S.HamburgerMenu>
              <Menu styles={props.styles} right>
                <S.Item onClick={props.onClickMoveToLogin}>로그인</S.Item>
                <S.Item onClick={props.onClickMoveToSignup}>회원가입</S.Item>
                {!props.isCheck && <S.Item>장바구니</S.Item>}
              </Menu>
            </S.HamburgerMenu>
          </S.MenuWrapper>
        )}
      </S.Body>
    </>
  );
}