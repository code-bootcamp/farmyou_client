import { useMutation } from "@apollo/client";
import { AxiosError } from "axios";
import dynamic from "next/dynamic";
import { useMemo, useRef } from "react";
import { UseFormGetValues } from "react-hook-form";

import { UPLOAD_FILE } from "../../units/bfood/write/UploadImage/UploadImage.query";

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return function comp({ forwardedRef, ...props }: any) {
      return (
        <RQ
          style={{ width: "100%", height: "500px", marginBottom: "60px" }}
          ref={forwardedRef}
          {...props}
        />
      );
    };
  },
  { ssr: false }
);

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

interface IData {
  title: string;
  content: string;
  price: number;
  quantity: number;
  origin: string;
}

interface IProps {
  getValues: UseFormGetValues<IData>;
  onChangeContent: (value: string) => void;
}

export default function ReactQuillContainer(props: IProps) {
  const QuillRef = useRef<any>();
  const [uploadFile] = useMutation(UPLOAD_FILE);

  // 이미지를 업로드 하기 위한 함수
  const imageHandler = () => {
    // if (typeof document !== "undefined") {
    const input = document.createElement("input");
    // 파일을 업로드 하기 위한 input 태그 생성
    const formData = new FormData();
    let url = "";

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    // 파일이 input 태그에 담기면 실행 될 함수
    input.onchange = async () => {
      const file = input.files;
      if (file !== null) {
        formData.append("image", file[0]);

        try {
          // const res = axios를 통해 백엔드 개발자분과 통신했고, 데이터는 폼데이터로 주고받았습니다.
          const result = await uploadFile({
            variables: {
              files: file,
            },
          });

          // 백엔드 개발자 분이 통신 성공시에 보내주는 이미지 url을 변수에 담는다.

          url = result.data.uploadFile[0];

          // 커서의 위치를 알고 해당 위치에 이미지 태그를 넣어주는 코드
          // 해당 DOM의 데이터가 필요하기에 useRef를 사용한다.

          const range = QuillRef.current?.getEditor().getSelection()?.index;

          console.log(range);

          if (range !== null && range !== undefined) {
            const quill = QuillRef.current?.getEditor();

            quill?.setSelection(range, 1);

            quill?.clipboard.dangerouslyPasteHTML(
              range,
              `<img src="https://storage.googleapis.com/${url}"/>`
            );

            console.log(quill);
          }

          return { ...result, success: true };
        } catch (error) {
          console.log(error);
          const err = error as AxiosError;
          return { ...err.response, success: false };
        }
      }
    };
    // }
  };

  // useMemo를 사용한 이유는 modules가 렌더링마다 변하면 에디터에서 입력이 끊기는 버그가 발생
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
        handlers: { image: imageHandler },
      },
    }),
    []
  );

  return (
    <ReactQuill
      forwardedRef={QuillRef}
      placeholder="본문을 입력하세요..."
      modules={modules}
      formats={formats}
      value={props.getValues("content") || ""}
      onChange={props.onChangeContent}
    />
  );
}
