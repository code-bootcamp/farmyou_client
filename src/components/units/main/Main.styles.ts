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
  top: 63vh;
  left: 0;
  font-size: 2rem;
  z-index: 3;
  color: white;
  @media (max-width: 806px) {
    font-size: 4vw;
  }
`;
export const Title = styled.div`
  text-align: center;
  position: absolute;
  width: 100%;
  top: 75vh;
  left: 0;
  font-size: 3.3rem;
  z-index: 3;
  color: white;

  @media (max-width: 806px) {
    /* padding-top: 15px; */
    font-size: 7vw;
  }
`;
export const NextIcon = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 90vh;
  font-size: 1rem;
  z-index: 3;

  @media (max-width: 806px) {
    display: none;
  }
`;
export const Icon = styled.img`
  width: 3vw;
`;

export const LocalScrollWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  margin-bottom: 100px;
`;

export const LocalWrapper = styled.div`
  width: 100%;
  margin: 10vh auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const LocalLeftWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const LocalTitle = styled.div`
  font-size: 3.7rem;
  font-weight: 600;
  color: #f58220;
  @media (max-width: 1200px) {
    font-size: 6vw;
  }
`;

export const LocalSubTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 400;

  @media (max-width: 1200px) {
    font-size: 3vw;
  }
`;
export const LocalRightWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;
export const LocalSearchBar = styled.div`
  width: 35rem;
  height: 3rem;
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #f58220;
  padding: 0px 1vw;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    margin-top: 10vw;
    width: 80%;
    padding: 0px 3vw;
  }
`;
export const LocalSearch = styled.input`
  width: 33vw;
  outline-style: none;
  border: none;
  font-size: 1.2rem;
  &::placeholder {
    color: #ccc;
    font-size: 0.9rem;
  }

  @media (max-width: 1200px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

export const SearchIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

export const LocalMarket = styled.div`
  width: 32rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: 2vw 0px;
  display: flex;
  padding: 2vw 3vw;
  flex-direction: column;
  justify-content: space-around;
  &:hover {
    box-shadow: 10px 5px 5px #f6651e60;
    border: 1.2px solid #f6651e60;
    transform: scale(1.05);
    transition: 0.3s;
  }

  @media (max-width: 1200px) {
    width: 80%;
    /* font-size: 0.8rem; */
  }
`;
export const MarketName = styled.div`
  font-size: 1.7rem;
  @media (max-width: 1200px) {
    font-size: 2.4vw;
  }
`;

export const MarketAddress = styled.div`
  font-size: 1rem;
  @media (max-width: 1200px) {
    font-size: 2vw;
  }
`;

export const BfoodWrapper = styled.div`
  padding: 10vw 15vw;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #f6651e;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
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

  @media (max-width: 1200px) {
    width: 40vw;
    height: 40vw;
  }
`;

export const BfoodImg = styled.img`
  width: 28vw;
  height: 28vw;
  object-fit: cover;
  @media (max-width: 1200px) {
    width: 40vw;
    height: 40vw;
  }
`;

export const BfoodRightWRapper = styled.div`
  width: 50%;
  height: 100%;
  padding: 1vw 8vw 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 0;
    width: 100%;
  }
`;
export const BfoodSubTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 22vw;
  padding-top: 3vw;
  @media (max-width: 1200px) {
    width: 40vw;
  }
`;
export const BfoodSubTitleTop = styled.div`
  font-size: 2vw;
  color: white;
  text-align: start;
  @media (max-width: 1200px) {
    font-size: 4vw;
  }
`;
export const BfoodSubTitleLow = styled.div`
  font-size: 2vw;
  color: white;
  text-align: end;
  @media (max-width: 1200px) {
    font-size: 4vw;
  }
`;
export const BfoodTitle = styled.div`
  font-size: 3.5vw;
  width: 100%;
  font-weight: 900;
  color: white;
  padding-top: 3vw;
  @media (max-width: 1200px) {
    font-size: 6vw;
    text-align: center;
  }
`;
export const BfoodButton = styled.button`
  border: 2px solid white;
  color: white;
  background-color: transparent;
  width: 22vw;
  padding: 1vw 0;
  margin: 30px 0px;
  font-size: 1.8vw;
  border-radius: 5px;
  &:hover {
    background-color: white;
    color: #f6651e;
  }

  @media (max-width: 1200px) {
    width: 40vw;
    font-size: 4vw;
    text-align: center;
  }
`;
