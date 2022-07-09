import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Body = styled.div`
  width: 100%;
  height: 620px;
  background-color: #fae4d1;
  /* background-image: url("/banner/banner_test.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom; */
`;
const BannerImage = styled.img`
  width: 100%;
  height: 620px;
  object-fit: cover;
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
            ? "/banner/bfood_banner1.png"
            : "/banner/localfood_banner1.png"
        }
      />
    </Body>
  );
}
