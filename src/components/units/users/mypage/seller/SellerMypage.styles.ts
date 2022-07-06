import styled from "@emotion/styled";
import { Switch } from "antd";
export const Body = styled.div`
  width: 100%;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: 18%;
  margin: 5vh 0px;
  display: flex;
  flex-direction: row;
`;
export const InfoProfile = styled.div`
  width: 20%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #cccccc;
`;
export const ProfileImage = styled.div`
  width: 8vw;
  height: 8vw;
  border-radius: 90%;
  border: 1px solid #ccc;
`;
export const ProfileName = styled.div`
  font-size: 1.5vw;
  margin: 20px;
`;
export const FunctionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 10vw;
  border: 1px solid #ccc;
  align-items: center;
  justify-content: space-around;
`;
export const Function = styled.div`
  font-size: 0.8vw;
`;
export const InfoRightWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
export const ToggleWrapper = styled.div`
  height: 15%;
  font-size: 1.2vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export const ToggleSwitch = styled(Switch)`
  background-color: green;
  margin-left: 20px;
`;
export const InfoBoxWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const Box = styled.div`
  width: 22%;
  height: 80%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const BoxTitle = styled.div`
  font-size: 1vw;
`;
export const Count = styled.div`
  font-size: 3vw;
`;
export const BoxIcons = styled.div`
  width: 45%;
`;
export const OrderCheckBoxIcon = styled.img`
  width: 100%;
  padding: 10%;
`;
export const DeliveryBoxIcon = styled.img`
  width: 100%;
`;
export const BoxBoxIcon = styled.img`
  width: 100%;
  padding: 10%;
`;
export const ReturnBoxIcon = styled.img`
  width: 100%;
`;

export const DivideLine = styled.div`
  width: 1px;
  height: 60%;
  background-color: #ccc;
`;

export const ListWrapper = styled.div`
  width: 100%;
`;
export const SelectListWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SelectList = styled.div`
  width: 50%;
  height: 4.5vw;
  font-size: 1.5vw;
  padding: 10px 0px;
  text-align: center;
  border: ${(props) => (props.isSelect ? "2px solid #ccc" : "none")};
  border-bottom: ${(props) => (props.isSelect ? "none" : "2px solid #ccc")};
`;
export const ListItemWrapper = styled.div`
  width: 100%;
  height: 80%;
  border-bottom: 1px solid #bbb;
  margin-bottom: 20px;
`;
export const ListItem = styled.div`
  width: 100%;
  height: 15vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1vw 3vw;
  border-bottom: 1px solid #ccc;
`;
export const ItemImg = styled.div`
  width: 12vw;
  height: 12vw;
  background-color: rebeccapurple;
`;
export const ItemInfoWrapper = styled.div`
  width: 45vw;
  height: 12vw;
  margin: 0px 3vw;
  padding: 2vw 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const ItemTitle = styled.div`
  font-size: 1.5vw;
`;
export const ItemPrice = styled.div`
  font-size: 1vw;
  margin-bottom: 2vw;
`;
export const ItemCreateDate = styled.div`
  font-size: 0.8vw;
`;
export const ItemSubInfoWrapper = styled.div`
  width: 12vw;
  height: 12vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LeftOver = styled.div`
  font-size: 1vw;
`;

export const LeftOverCount = styled.div`
  font-size: 2.5vw;
`;
export const MoreItem = styled.div`
  width: 100%;
  height: 5vw;
  border: 1px solid #ccc;
  font-size: 2vw;
  text-align: center;
  padding: 0.8vw 3vw;
`;
