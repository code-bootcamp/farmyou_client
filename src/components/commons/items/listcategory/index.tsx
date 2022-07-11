import styled from "@emotion/styled";

interface ICategoryItemProps {
  src: string;
  name: string;
}

export const CategoryItemWrapper = styled.div`
  width: 70px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    filter: invert(64%) sepia(63%) saturate(2786%) hue-rotate(344deg)
      brightness(97%) contrast(98%);
  }
`;

export const CategoryItemCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 90%;
  border: 1.2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ImageWrapper = styled.span`
  /* width: 38.5vw; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const CategoryItemName = styled.div`
  margin-top: 10px;
  font-size: 15px;
`;

export const CategoryImage = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px 20px;
  border-radius: 10px;

  @media (max-width: 689px) {
    width: 30px;
    height: 30px;
    margin: 10px 20px;
  }
`;
export default function ListCategoryItem(props: ICategoryItemProps) {
  return (
    <CategoryItemWrapper>
      <CategoryItemCircle>
        <CategoryImage src={props.src}></CategoryImage>
      </CategoryItemCircle>
      <CategoryItemName>{props.name}</CategoryItemName>
    </CategoryItemWrapper>
  );
}
