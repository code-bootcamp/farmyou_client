import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Body = styled.div`
  width: 100%;
  height: 520px;
  @media (max-width: 575px) {
    height: 320px;
  }
`;
const BannerImage = styled.img`
  width: 100%;
  height: 520px;
  object-fit: cover;
  object-position: right;
  position: relative;
  @media (max-width: 575px) {
    height: 320px;
  }
`;
const BfoodBannerTextWrapper = styled.div`
  width: 450px;
  height: 250px;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 250px;
  right: 10vw;
  @media (max-width: 575px) {
    width: 250px;
    height: 150px;
    top: 110px;
    right: 1rem;
    justify-content: flex-end;
  }
`;
const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
  width: auto;
`;
const Tag = styled.div`
  height: 2em;
  padding: 5px 15px;
  color: #bd9480;
  background-color: white;
  font-size: 18px;
  border-radius: 20px;
  @media (max-width: 575px) {
    display: none;
  }
`;
const BfoodTextFront = styled.div`
  font-size: 60px;
  font-weight: 800;
  color: white;

  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
    width: 260px;
    margin: 0px auto;
    font-size: 40px;
  }
`;
const BfoodTextEnd = styled.span`
  font-size: 40px;
  margin-left: 20px;
  font-weight: 400;
  line-height: 40px;

  @media (max-width: 575px) {
    margin-left: 0;
    font-size: 30px;
  }
`;
const LocalFoodBannerTextWrapper = styled.div`
  width: 450px;
  height: 250px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  top: 160px;
  right: 150px;
  @media (max-width: 575px) {
    top: 100px;
    right: 50px;
  }
`;
export const LocalFoodTextFront = styled.span`
  font-size: 75px;
  font-weight: 700;
  color: #f6651e;
  margin-bottom: 10px;
  @media (max-width: 575px) {
    margin-left: 0;
    font-size: 50px;
  }
`;
export const LocalFoodTextEnd = styled.span`
  font-size: 80px;
  font-weight: 700;
  color: #464646;
  @media (max-width: 575px) {
    margin-left: 0;
    font-size: 50px;
  }
`;
export const LocalFoodContent = styled.span`
  color: #464646;
  font-size: 28px;
  @media (max-width: 575px) {
    margin-left: 0;
    font-size: 18px;
  }
`;
export const LocalFoodContentEmphasis = styled.div`
  color: #f6651e;
  font-size: 28px;
  @media (max-width: 575px) {
    margin-left: 0;
    font-size: 20px;
  }
`;

export default function LayoutBanner() {
  const router = useRouter();
  const CHECK = ["/bfood"];
  const isCheck = CHECK.includes(router.asPath);

  return (
    <Body>
      <BannerImage
        src={
          isCheck
            ? "/banner/bfood_banner_test3.png"
            : "/banner/localfood_banner_test4.png"
        }
      />
      {isCheck ? (
        <BfoodBannerTextWrapper>
          <TagsWrapper>
            <Tag>#못생겨도</Tag>
            <Tag>#맛</Tag>
            <Tag>#품질</Tag>
            <Tag>#최고</Tag>
          </TagsWrapper>
          <BfoodTextFront>
            못난이<BfoodTextEnd>농산물의 재발견</BfoodTextEnd>
          </BfoodTextFront>
        </BfoodBannerTextWrapper>
      ) : (
        <LocalFoodBannerTextWrapper>
          <LocalFoodTextFront>
            Local
            <LocalFoodTextEnd>Food</LocalFoodTextEnd>
          </LocalFoodTextFront>
          <LocalFoodContent>지역과 건강을 생각한 올바른 선택</LocalFoodContent>
          <LocalFoodContentEmphasis>
            신선한 먹거리<LocalFoodContent> 로컬푸드</LocalFoodContent>
          </LocalFoodContentEmphasis>
        </LocalFoodBannerTextWrapper>
      )}
    </Body>
  );
}
