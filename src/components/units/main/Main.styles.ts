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

export const InfoWrapper = styled.div`
  padding: 10vh;
  width: 100%;
  height: 600px;
`;
export const InfoTitle = styled.div`
  width: 100%;
  text-align: center;
  color: #f58220;
  font-size: 8vh;
  margin-bottom: 2vw;
`;

export const InfoContents = styled.div`
  width: 100%;
  text-align: center;
  font-size: 3vh;
`;
