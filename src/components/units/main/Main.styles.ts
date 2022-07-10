import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  top: 0px;
`;

export const MainVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;
export const VideoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
export const SubTitle = styled.div`
  text-align: center;
  position: absolute;
  width: 100%;
  top: 70vh;
  left: 0;
  font-size: 1.6vw;
  z-index: 3;
  color: white;
`;
export const Title = styled.div`
  text-align: center;
  position: absolute;
  width: 100%;
  top: 75vh;
  left: 0;
  font-size: 2vw;
  z-index: 3;
  color: white;
`;
export const NextIcon = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 85vh;
  font-size: 2vw;
  z-index: 3;
`;
export const Icon = styled.img`
  width: 3vw;
`;

export const LocalWrapper = styled.div`
  /* padding: 10vh;
  width: 100%; */
  width: 80%;
  margin: 10vh auto;
  height: 40vw;
  display: flex;
  flex-direction: row;
`;
export const LocalLeftWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 8vw 0px 0px 8vw;
`;
export const LocalTitle = styled.div`
  font-size: 3vw;
  font-weight: 600;
  color: #f58220;
`;
export const LocalSubTitle = styled.div`
  font-size: 1.2vw;
  font-weight: 400;
`;
export const LocalRightWrapper = styled.div`
  width: 50%;
  height: 100%;
  padding: 1vw 8vw 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LocalSearchBar = styled.div`
  width: 35vw;
  height: 4.5vw;
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid #f58220;
  padding: 0px 30px;
  margin-bottom: 10px;
`;
export const LocalSearch = styled.input`
  width: 33vw;
  height: 80%;
  outline-style: none;
  border: none;
  font-size: 1.2vw;
  &::placeholder {
    color: #ccc;
  }
`;

export const SearchIcon = styled.img`
  width: 2.5vw;
  height: 2.5vw;
`;
export const LocalMarket = styled.div`
  width: 33vw;
  height: 7vw;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: 1vw 0px;
  display: flex;
  padding: 1vw 3vw 1vw 3vw;
  flex-direction: column;
  justify-content: flex-start;
  &:hover {
    box-shadow: 10px 5px 5px #f6651e60;
    border: 1.2px solid #f6651e60;
  }
`;
export const MarketName = styled.div`
  font-size: 1.5vw;
`;
export const MarketAddress = styled.div`
  font-size: 1vw;
`;
export const BfoodWrapper = styled.div`
  padding: 10vw 15vw;
  width: 100%;
  height: 40vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #f6651e;
`;
export const BfoodLeftWrapper = styled.div`
  width: 50%;
  height: 100%;
  padding: 8vw 0px 0px 8vw;
`;
export const BfoodImgWrapper = styled.div`
  width: 28vw;
  height: 28vw;
  margin-right: 0px;
  border-radius: 90%;
  background-color: white;
`;
export const BfoodImg = styled.img`
  width: 28vw;
  height: 28vw;
  object-fit: cover;
`;
export const BfoodRightWRapper = styled.div`
  width: 50%;
  height: 100%;
  padding: 1vw 8vw 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BfoodSubTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 22vw;
`;
export const BfoodSubTitleTop = styled.div`
  font-size: 2vw;
  color: white;
  text-align: start;
`;
export const BfoodSubTitleLow = styled.div`
  font-size: 2vw;
  color: white;
  text-align: end;
`;
export const BfoodTitle = styled.div`
  font-size: 3.5vw;
  font-weight: 900;
  color: white;
`;
export const BfoodButton = styled.button`
  border: 2px solid white;
  color: white;
  background-color: transparent;
  width: 22vw;
  height: 3.5vw;
  margin: 30px 0px;
  font-size: 1.8vw;
  border-radius: 5px;
  &:hover {
    background-color: white;
    color: #f6651e;
  }
`;
