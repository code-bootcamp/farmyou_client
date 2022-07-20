import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  const router = useRouter();
  const [selected, setSelected] = useState(500);

  const onChangeAmount = (event: any) => {
    setSelected(Number(event.target.value));
  };

  const requestPay = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "포인트 충전하기",
        amount: selected,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // 결제 완료 후 이동할 페이지
        m_redirect_url: "/mypage",
      },
      (rsp: any) => {
        if (rsp.success) {
          console.log(rsp);
          router.push("/mypage");
        } else {
          alert("결제에 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
  };

  return (
    <>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <select onChange={onChangeAmount}>
        <option value="500">500</option>
        <option value="1000">1000</option>
        <option value="2000">2000</option>
        <option value="5000">5000</option>
      </select>
      <button onClick={requestPay}>결제하기</button>
    </>
  );
}
