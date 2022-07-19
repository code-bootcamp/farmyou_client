import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import UploadsImageUI from "./UploadImage.presenter";
import { UPLOAD_FILE } from "./UploadImage.query";
import { IUploadsImageProps } from "./UploadImage.types";

export default function UploadImage(props: IUploadsImageProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation(UPLOAD_FILE);

  function onClickUpload() {
    fileRef.current?.click();
  }

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const result = await uploadFile({
        variables: {
          files: file,
        },
      });
      console.log(result.data.uploadFile[0]);
      props.onChangeFiles(props.index, result.data?.uploadFile[0]);
    } catch (error) {
      Modal.error({
        content: "에러발생",
      });
    }
  }

  return (
    <UploadsImageUI
      fileRef={fileRef}
      // 미리보기 url이 담겨있는 배열에서 해당 위치의 값을 보내줍니다.
      fileUrl={props.fileUrls[props.index]}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
