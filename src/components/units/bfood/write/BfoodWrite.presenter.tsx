import InputComponent from "../../../commons/inputs";
import * as S from "./BfoodWrite.styles";
import "react-quill/dist/quill.snow.css";
import ButtonComponent from "../../../commons/buttons";
import { IBfoodWriteUIProps } from "./BfoodWrite.types";
import UploadImage from "./UploadImage/UploadImage.container";
export default function BfoodWriteUI(props: IBfoodWriteUIProps) {
  return (
    <S.Wrapper>
      <S.PageTitle>상품 등록</S.PageTitle>
      <form
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickEdit : props.onClickSubmit
        )}
      >
        <S.InnerWrapper>
          <S.ImageItemWrapper>
            {new Array(props.fileUrls.length + 1).fill(1).map((data, index) => (
              <UploadImage
                key={`${data}_${index}`}
                index={index}
                onChangeFiles={props.onChangeFiles}
                fileUrls={props.fileUrls}
              />
            ))}
          </S.ImageItemWrapper>
          <S.Label>상품명</S.Label>
          <InputComponent
            placeholder={"상품명을 입력해주세요."}
            type="text"
            register={props.register("title")}
            defaultValue={props.fetchProductUglyData?.fetchProductUgly.title}
          />
          <S.FormWrapper>
            <S.InputWrapper>
              <S.Label>상품가격</S.Label>
              <InputComponent
                placeholder={"40000"}
                type="number"
                register={props.register("price")}
                defaultValue={String(
                  props.fetchProductUglyData?.fetchProductUgly.price
                )}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>상품 총 수량</S.Label>
              <InputComponent
                placeholder={"100"}
                type="number"
                register={props.register("quantity")}
                defaultValue={String(
                  props.fetchProductUglyData?.fetchProductUgly.quantity || ""
                )}
              />
            </S.InputWrapper>
          </S.FormWrapper>
          <S.Label>생산지역</S.Label>
          <InputComponent
            placeholder={"생산 지역을 입력해주세요."}
            type="text"
            register={props.register("origin")}
            defaultValue={props.fetchProductUglyData?.fetchProductUgly.origin}
          />
          <S.Label>상품설명</S.Label>
          <S.InputQuill
            onChange={props.onChangeContent}
            defaultValue={props.fetchProductUglyData?.fetchProductUgly.content}
          />
          <S.ButtonWrapper>
            <ButtonComponent
              buttonColor="#f6651e"
              title={props.isEdit ? "수정하기" : "등록하기"}
              type="submit"
            />
            <ButtonComponent
              buttonColor="#BDBDBD"
              title="이전으로"
              type="button"
              onClick={props.onClickToCancel}
            />
          </S.ButtonWrapper>
        </S.InnerWrapper>
      </form>
    </S.Wrapper>
  );
}
