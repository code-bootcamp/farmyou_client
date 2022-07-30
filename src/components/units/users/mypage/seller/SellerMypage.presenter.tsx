import ButtonComponent from "../../../../commons/buttons";
import InputComponent from "../../../../commons/inputs";
import { getDate } from "../../../../commons/lib/utils";
import * as S from "./SellerMypage.styles";
import { ISellerMypageUiProps } from "./SellerMypage.types";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "antd";

export default function SellerMypageUI(props: ISellerMypageUiProps) {
  return (
    <>
      <S.Wrapper>
        <S.Body>
          <S.InfoWrapper>
            <S.InfoProfile>
              {props.data?.fetchUserLoggedIn.files[0] &&
              props.data?.fetchUserLoggedIn.files[0].url !== "" ? (
                <S.ProfileImage
                  src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.files[0].url}`}
                />
              ) : (
                <S.NoProfileImage src={`/icons/mypage/farmer.png`} />
              )}
              <S.ProfileName>
                {props.data?.fetchUserLoggedIn?.name}
              </S.ProfileName>
              <S.FunctionWrapper>
                <S.Function onClick={props.onClickLogout}>로그아웃</S.Function>
                <S.LengthDivideLine />
                <S.Function onClick={props.showPasswordModal}>
                  회원정보수정
                </S.Function>
              </S.FunctionWrapper>
              <S.NewFunction onClick={props.onClickToWrite}>
                <S.NewImg src="/icons/mypage/write.png" />
                못난이 상품 등록하기
              </S.NewFunction>
            </S.InfoProfile>
            <S.InfoRightWrapper>
              <S.InfoBoxWrapper>
                <S.Box>
                  <S.BoxIcons>
                    <S.OrderCheckBoxIcon src="/icons/product_board.svg" />
                  </S.BoxIcons>
                  <S.BoxTitle>상품게시글</S.BoxTitle>
                  <S.Count>
                    {
                      props.fetchUglyProductsBySellerData
                        ?.fetchUglyProductsBySeller?.length
                    }
                  </S.Count>
                </S.Box>
                <S.LengthDivideLine />
                <S.Box>
                  <S.BoxIcons>
                    <S.SellBoxIcon src="/icons/sell.svg" />
                  </S.BoxIcons>
                  <S.BoxTitle>판매량</S.BoxTitle>
                  <S.Count>
                    {
                      props.fetchCompletedPaymentsForSellerData
                        ?.fetchCompletedPaymentsForSeller.length
                    }
                  </S.Count>
                </S.Box>
                <S.LengthDivideLine></S.LengthDivideLine>
                <S.Box>
                  <S.BoxIcons>
                    <S.LikeBoxIcon src="/icons/like.svg" />
                  </S.BoxIcons>
                  <S.BoxTitle>좋아요</S.BoxTitle>
                  <S.Count>0</S.Count>
                </S.Box>
              </S.InfoBoxWrapper>
            </S.InfoRightWrapper>
          </S.InfoWrapper>
          <S.ListWrapper>
            <S.SelectListWrapper>
              <S.SelectLocalFood
                isSelect={props.isSelect}
                onClick={props.onClickSellingList}
              >
                못난이 상품 게시글 내역
              </S.SelectLocalFood>
              <S.SelectLocalFood
                isSelect={!props.isSelect}
                onClick={props.onClickPaymentList}
              >
                못난이 상품 판매내역
              </S.SelectLocalFood>
            </S.SelectListWrapper>
            <S.ListItemWrapper>
              {props.isSelect
                ? props.fetchUglyProductsBySellerData?.fetchUglyProductsBySeller
                    ?.slice(0, props.sliceNumber)
                    .map((el) => {
                      return (
                        <S.ListItem key={uuidv4()}>
                          <S.ItemImg
                            src={`https://storage.googleapis.com/${
                              el.files[0]?.url.split(",")[0]
                            }`}
                            onClick={props.onClickMoveToUglyDetail}
                            id={el.id}
                          ></S.ItemImg>
                          <S.ItemInfoWrapper
                            onClick={props.onClickMoveToUglyDetail}
                            id={el.id}
                          >
                            <S.ItemTitle>{el.title}</S.ItemTitle>
                            <S.ItemPrice>
                              {el.price.toLocaleString()}원
                            </S.ItemPrice>
                            <S.ItemCreateDate>
                              {getDate(el.createdAt)}
                            </S.ItemCreateDate>
                          </S.ItemInfoWrapper>
                          <S.ItemSubInfoWrapper>
                            <S.SellerName
                              id={el.id}
                              onClick={props.onClickMoveToEditPage}
                            >
                              수정
                            </S.SellerName>
                          </S.ItemSubInfoWrapper>
                        </S.ListItem>
                      );
                    })
                : props.fetchCompletedPaymentsForSellerData?.fetchCompletedPaymentsForSeller
                    ?.slice(0, props.sliceNumber)
                    .map((el) => {
                      return (
                        <S.ListItem key={uuidv4()}>
                          <S.ItemImg
                            src={`https://storage.googleapis.com/${
                              el.productUgly?.files[0].url.split(",")[0]
                            }`}
                          ></S.ItemImg>
                          <S.ItemInfoWrapper>
                            <S.ItemTitle>{el.productUgly?.title}</S.ItemTitle>
                            <S.ItemPrice>
                              {el.productUgly?.price.toLocaleString()}원
                            </S.ItemPrice>
                            <S.ItemCreateDate>
                              {getDate(el.createdAt)}
                            </S.ItemCreateDate>
                          </S.ItemInfoWrapper>
                          <S.ItemSubInfoWrapper>
                            {el.invoice}
                            <S.SellerName
                              id={el.id}
                              onClick={
                                el.invoice
                                  ? props.onClickInvoiceEdit
                                  : props.toggleModal
                              }
                            >
                              {el.invoice ? "운송장 수정" : "운송장 등록"}
                            </S.SellerName>
                          </S.ItemSubInfoWrapper>
                        </S.ListItem>
                      );
                    })}
              {(props.isSelect
                ? props.fetchUglyProductsCount > props.sliceNumber
                : props.fetchCompletedPaymentsCount > props.sliceNumber) && (
                <S.MoreItemWrapper>
                  <S.MoreItem onClick={props.onClickFetchMore}>
                    더보기
                  </S.MoreItem>
                  <S.DivideLine style={{ borderTop: "1px solid #ccc" }} />
                </S.MoreItemWrapper>
              )}
            </S.ListItemWrapper>
          </S.ListWrapper>
        </S.Body>
      </S.Wrapper>
      {props.isUserVisible && (
        <S.Model>
          <S.PasswordModalWrapper>
            <S.CancelIcon
              src="/icons/cancel.png"
              onClick={props.passwordCancel}
            />
            <S.InputWrapper>
              <S.InputTitle>비밀번호 : </S.InputTitle>
              <InputComponent
                onChange={props.onChangePassword}
                placeholder="비밀번호를 입력해주세요."
                type="password"
              />
            </S.InputWrapper>
            <S.Button onClick={props.onClickConfirm}>확인</S.Button>
            <S.Error>{props.error}</S.Error>
          </S.PasswordModalWrapper>
        </S.Model>
      )}
      {props.isEditVisible && (
        <S.Model>
          <S.EditModalWrapper onSubmit={props.handleSubmit(props.onClickEdit)}>
            <S.Title>회원 정보 수정</S.Title>
            <S.CancelIcon src="/icons/cancel.png" onClick={props.editCancel} />
            <S.ModalDivideLine />
            <S.EditWrapper>
              {props.fileUrl ? (
                <S.Img
                  onClick={props.onClickUpload}
                  src={`https://storage.googleapis.com/${props.fileUrl}`}
                />
              ) : (
                <S.UploadButton onClick={props.onClickUpload}>
                  <>+</>
                  <>Upload</>
                </S.UploadButton>
              )}
              <S.UploadFileHidden
                type="file"
                ref={props.fileRef}
                onChange={props.onChangeFile}
              />
              <S.InputWrapper>
                <S.DefaultImg onClick={props.onClickDefaultFile}>
                  이미지 초기화
                </S.DefaultImg>
                <S.InputTitle>이름 : </S.InputTitle>
                <InputComponent
                  register={props.register("name")}
                  placeholder="이름을 입력해주세요."
                  defaultValue={props.data?.fetchUserLoggedIn.name}
                />
              </S.InputWrapper>
              <S.InputWrapper>
                <S.InputTitle>전화번호 : </S.InputTitle>
                <InputComponent
                  register={props.register("phone")}
                  placeholder="전화번호를 입력해주세요.( - 생략)"
                  defaultValue={props.data?.fetchUserLoggedIn.phone}
                />
              </S.InputWrapper>
              <S.InputWrapper>
                <S.InputTitle>비밀번호 : </S.InputTitle>
                <InputComponent
                  register={props.register("password")}
                  placeholder="변경할 비밀번호를 입력해주세요."
                  type="password"
                />
              </S.InputWrapper>
              <ButtonComponent title="수정하기" buttonColor="#F6651E" />
            </S.EditWrapper>
          </S.EditModalWrapper>
        </S.Model>
      )}

      {props.isModalVisible && (
        <Modal
          visible={props.isModalVisible}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <S.InvoiceInput>
            <InputComponent
              placeholder="운송장 번호를 입력해주세요."
              onChange={props.onChangeInvoiceNum}
              defaultValue={props.invoiceNum}
            ></InputComponent>
          </S.InvoiceInput>
        </Modal>
      )}
    </>
  );
}
