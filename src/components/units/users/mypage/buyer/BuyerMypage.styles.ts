import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 0px auto;

  @media (max-width: 1440px) {
    padding: 0 10vw;
  }
`;

export const Body = styled.div`
  width: 1200px;
  margin: 0px auto;

  @media (max-width: 1440px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  font-size: 2rem;
  font-weight: 700;
  padding-left: 10%;
  margin-top: 50px;
`;
export const DivideLine = styled.div`
  width: 100%;
  border-top: 1px solid #f6651e;
  margin: 20px 0px;
`;
export const MessageBox = styled.div`
  width: 100%;
  height: 50px;
  background-color: #809497;
  padding: 10px 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Icon = styled.img`
  width: 20px;
  height: 25px;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: 400px;
  /* margin: 5vh 0px; */
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 667px) {
    height: 100%;
    margin: 6vw 0;
  }
`;

export const InfoProfile = styled.div`
  width: 240px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #cccccc;
  padding: 10px;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 90%;
  border: 1px solid #ccc;
`;
export const NoProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 90%;
  border: 1px solid #ccc;
  padding: 10px;
`;

export const ProfileName = styled.div`
  font-size: 1.5rem;
  margin: 20px;
`;

export const FunctionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  border: 1px solid #ccc;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 934px) {
    flex-direction: column;
  }
`;

export const Function = styled.div`
  font-size: 1rem;
  cursor: pointer;
`;

export const InfoRightWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const InfoBoxWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 749px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  width: 24%;
  height: 80%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 749px) {
    width: 100%;
    height: 80%;
    padding: 2vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const BoxTitle = styled.div`
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 50px;
  @media (max-width: 749px) {
    font-size: 1rem;
    margin: 0px;
  }
`;
export const Count = styled.div`
  font-size: 3rem;
  color: #f6651e;
  @media (max-width: 667px) {
    font-size: 1.5rem;
  }
`;

export const BoxIcons = styled.div`
  width: 75px;
  height: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const OrderCheckBoxIcon = styled.img`
  width: 70px;
  padding: 10%;
`;

export const DeliveryBoxIcon = styled.img`
  width: 65px;
`;
export const ReturnBoxIcon = styled.img`
  width: 65px;
`;

export const LengthDivideLine = styled.div`
  width: 1px;
  height: 60%;
  background-color: #ccc;
  @media (max-width: 749px) {
    /* display: none; */
    width: 90%;
    height: 1px;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
`;

export const SelectListWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

interface ISelectLocalFoodProps {
  isSelect: boolean;
}
export const SelectLocalFood = styled.div`
  width: 50%;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 1vw 0px;
  text-align: center;
  cursor: pointer;
  border: ${(props: ISelectLocalFoodProps) =>
    props.isSelect ? "2px solid #F6651E" : "none"};
  border-bottom: ${(props: ISelectLocalFoodProps) =>
    props.isSelect ? "none" : "2px solid #F6651E"};
  background-color: ${(props: ISelectLocalFoodProps) =>
    props.isSelect ? "white" : "#F5F4F4"};
`;

export const ListItemWrapper = styled.div`
  width: 100%;
  height: 80%;
  margin-bottom: 20px;
`;

export const ListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1vw 2vw;
  border-top: 1px solid #ccc;
  :first-of-type {
    border-top: none;
  }
`;

export const ItemImgWrapper = styled.div`
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

export const ItemInfoWrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 95%;
  height: 100%;
  margin-left: 3vw;
  padding: 0.5vw 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ItemTitle = styled.div`
  font-size: 1rem;
`;

export const ItemPrice = styled.div`
  font-size: 1rem;
`;

export const ItemCreateDate = styled.div`
  font-size: 0.8rem;
`;

export const ReturnButton = styled.div`
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    border-bottom: 1px solid black;
    cursor: pointer;
  }
  @media (max-width: 749px) {
    font-size: 0.8rem;
  }
`;

export const ItemSubInfoWrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SellerName = styled.div`
  font-size: 0.9rem;
  @media (max-width: 749px) {
    display: none;
  }
`;

export const SellerPhoneNum = styled.div`
  font-size: 0.8rem;
  @media (max-width: 749px) {
    display: none;
  }
`;
export const MoreItemWrapper = styled.div`
  width: 100%;
  height: 50px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;
export const MoreItem = styled.div`
  width: 120px;
  height: 50px;
  border-radius: 30px;
  background-color: white;
  border: 1.5px solid #ccc;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 100;
  margin: 0px auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;
export const Model = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0px 10%;
  z-index: 100;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  background-color: rgba(0, 0, 0, 0.4);
`;
export const EditModalWrapper = styled.form`
  width: 100%;
  height: 100%;
  max-height: 650px;
  max-width: 650px;
  min-width: 350px;
  border-radius: 5px;
  background-color: white;
  padding: 30px;
  /* position: relative; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Title = styled.span`
  font-size: 2rem;
  font-weight: 700;
  padding-bottom: 20px;
`;
export const CancelIcon = styled.img`
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 25px;
`;
export const ModalDivideLine = styled.div`
  width: 100%;
  border-top: 1px solid #f6651e;
`;
export const EditWrapper = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
export const DefaultImg = styled.div`
  position: absolute;
  top: 200px;
  right: 120px;
  font-size: 0.8rem;
  cursor: pointer;
`;
export const Img = styled.img`
  object-fit: cover;
  border-radius: 90%;
  width: 120px;
  height: 120px;
  border: 1.2px solid #cccccc;
  margin: 20px auto 10px auto;
`;
export const UploadFileHidden = styled.input`
  display: none;
`;
export const UploadButton = styled.div`
  cursor: pointer;
  border-radius: 90%;
  width: 120px;
  height: 120px;
  border: 1px solid black;
  margin: 20px auto 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const InputWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const InputTitle = styled.div`
  font-size: 1rem;
  width: 100px;
  margin-right: 5px;
`;
export const UserAddresses = styled.div`
  width: 75%;
  height: auto;
  max-height: 150px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 0.5px solid #ccc;
  border-radius: 10px;
  padding: 10px 15px;
  margin-top: 10px;
  min-height: 80px;
  position: relative;
`;
export const Address = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserAddress = styled.div`
  font-size: 0.8rem;
`;
export const UserAddressDetail = styled.div`
  font-size: 0.8rem;
`;
export const MainAddress = styled.div`
  text-decoration: underline;
  font-size: 0.7rem;
  position: absolute;
  right: 20px;
  bottom: 10px;
  color: #f6651e;
`;
export const AddressOption = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 20px;
  bottom: 10px;
`;
export const Option = styled.div`
  cursor: pointer;
  font-size: 0.7rem;
  margin-left: 20px;
  &:hover {
    color: #f6651e;
  }
`;

export const PasswordModalWrapper = styled.div`
  width: 400px;
  height: 200px;
  /* max-height: 150px;
  max-width: 450px;
  min-width: 450px; */
  border-radius: 5px;
  background-color: white;
  padding: 30px;
  /* position: relative; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 70px;
  height: 40px;
  color: white;
  border-radius: 5px;
  background-color: #f6651e;
  border: none;
`;
export const Error = styled.div`
  color: red;
  font-size: 1rem;
  position: absolute;
  bottom: 50px;
`;

export const DefaultValueWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 0px;
`;
export const DefaultValueImg = styled.img`
  width: 5vw;
  min-width: 100px;
  margin-bottom: 30px;
`;
export const DefaultText = styled.div`
  font-size: 1.2rem;
  color: gray;
`;
