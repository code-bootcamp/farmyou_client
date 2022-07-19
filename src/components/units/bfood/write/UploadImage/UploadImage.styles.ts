import styled from "@emotion/styled";

export const UploadImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
  margin: 10px;
`;

export const UploadButton = styled.button`
  min-width: 80px;
  width: 14rem;
  height: 11rem;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  background-color: #fff;
  margin-right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
