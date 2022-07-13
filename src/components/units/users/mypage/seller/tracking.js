import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: none;
`;

export default function Tracking(props) {
  return (
    <Wrapper>
      <form action="http://info.sweettracker.co.kr/tracking/5" method="post">
        <div className="form-group">
          <label htmlFor="t_key">API key</label>
          <input
            type="text"
            className="form-control"
            id="t_key"
            name="t_key"
            placeholder="제공받은 APIKEY"
            value={"uDoOXokWAiIlA5yJfJf8fA"}
          />
        </div>
        <div className="form-group">
          <label htmlFor="t_code">택배사 코드</label>
          <input
            type="text"
            className="form-control"
            name="t_code"
            id="t_code"
            placeholder="택배사 코드"
            value={"04"}
          />
        </div>
        <div className="form-group">
          <label htmlFor="t_invoice">운송장 번호</label>
          <input
            type="text"
            className="form-control"
            name="t_invoice"
            id="t_invoice"
            placeholder="운송장 번호"
            value={"343056477465"}
          />
        </div>
        <button
          ref={props.trackingRef}
          type="submit"
          className="btn btn-default"
        >
          조회하기
        </button>
      </form>
    </Wrapper>
  );
}
