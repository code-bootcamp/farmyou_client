import styled from "@emotion/styled";
import Slider from "react-slick";
import { Input } from "antd";

export const Wrapper = styled.div`
  width: 100%;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 0;
  border-bottom: 1px solid #bdbdbd;

  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 575px) {
    width: 80vw;
  }
`;

export const MainImage = styled.img`
  width: 30vw;
  height: 30vw;
  object-fit: contain;
  @media (max-width: 575px) {
    width: 60vw;
    height: 60vw;
  }
`;

export const SubImageWrapper = styled.div`
  width: 30vw;
  @media (max-width: 575px) {
    width: 60vw;
  }
`;

export const StyledSlider = styled(Slider)`
  .slick-prev:before {
    font-size: 1.5vw;
    color: #ccc;
  }

  .slick-next:before {
    font-size: 1.5vw;
    color: #ccc;
  }
`;

export const SubImage = styled.img`
  object-fit: contain;
  width: 5vw;
  min-width: 5vw;
  height: 5vw;
  margin: 50px 0px;
  @media (max-width: 575px) {
    width: 10vw;
    height: 10vw;
  }

  /* background-color: blue; */
`;

export const MainContentsWrapper = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;

  @media (max-width: 575px) {
    width: 80vw;
    height: 80vw;
  }
`;

export const MainContentsHeader = styled.div`
  padding-top: 1vw;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
`;

export const ItemSeller = styled.div`
  width: 20vw;
  font-size: 1vw;
  font-weight: 500;
  color: #adadad;
  padding-bottom: 20px;

  @media (max-width: 575px) {
    font-size: 2vw;
  }
`;

export const IconWrapper = styled.div`
  width: 10vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 3vw;

  @media (max-width: 575px) {
    width: 20vw;
    /* height: 60vw; */
  }
`;

export const Icon = styled.img`
  width: 1.5vw;
  height: 1.5vw;
  @media (max-width: 575px) {
    width: 3vw;
    height: 3vw;
  }
`;

export const MainContentsBody = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #bdbdbd;
  padding: 30px 0;
`;

export const ItemName = styled.div`
  font-size: 1vw;
  flex-wrap: wrap;
  width: 80%;
  padding-bottom: 4vw;

  @media (max-width: 575px) {
    font-size: 3vw;
  }
`;

export const ItemPrice = styled.div`
  width: 100%;
  text-align: end;
  font-size: 1.5vw;
  font-weight: bold;

  @media (max-width: 575px) {
    font-size: 4vw;
  }
`;

export const MainContentsFooter = styled.div`
  padding: 5vw 0;
  display: flex;
  flex-direction: column;
`;

export const TotalPrice = styled.div`
  padding: 20px 0;
  width: 100%;
  text-align: end;
  font-size: 1.6vw;
  font-weight: bold;

  @media (max-width: 575px) {
    font-size: 3.5vw;
  }
`;

export const CountInput = styled(Input)`
  height: 2em + 5px;
  font-size: 1.5vw;
  outline-color: #055143;
  border-radius: 5px;

  @media (max-width: 575px) {
    font-size: 3vw;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20%;

  @media (max-width: 575px) {
    margin: 0px;
    position: fixed;
    bottom: 0;
    left: 0;
    /* display: inline-block; */
    background-color: white;
    height: 50px;
    width: 100%;
  } ;
`;

export const Contents = styled.div`
  width: 100%;
  padding: 50px;
  border-bottom: 1px solid #bdbdbd;
`;