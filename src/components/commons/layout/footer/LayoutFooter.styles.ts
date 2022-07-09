import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100%;
  height: 200px;
  background-color: black;

  @media (max-width: 575px) {
    display: none;
  }
`;
export const Wrapper = styled.div`
  width: 80vw;
  height: 200px;
  margin: 0px auto;
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const LogoImg = styled.img`
  width: 12vw;
  min-width: 200px;
  margin: 5px 0px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;
export const Title = styled.div`
  color: white;
  font-weight: 500;
  font-size: 1.1vw;
  margin-right: 30px;
`;
export const Content = styled.div`
  color: white;
  font-size: 1vw;
  margin: 5px 10px;
`;
export const LeftWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  height: 1em;
`;
export const LeftItem = styled.div`
  color: white;
  font-size: 1vw;
`;
export const DivideLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: white;
  margin: 0px 20px;
`;
