import ListItem from "../../../commons/items/list";
import * as S from "./BfoodList.styles";
import { Select } from "antd";
import { IBfoodListUIProps } from "./BfoodList.types";
import InfiniteScroll from "react-infinite-scroller";
const { Option } = Select;

export default function BfoodListUI(props: IBfoodListUIProps) {
  return (
    <S.OutLine>
      <S.Wrapper>
        <S.SearchWrapper>
          <Select
            defaultValue="최신순"
            style={{ width: 150 }}
            onChange={props.onChangeSorted}
          >
            <Option value="최신순">최신순</Option>
            <Option value="높은가격순">높은가격순</Option>
            <Option value="낮은가격순">낮은가격순</Option>
            {/* <Option value="판매량순">판매량순</Option> */}
          </Select>
          <S.SearchInput
            placeholder="검색어를 입력해주세요."
            onChange={props.onChangeSearch}
            value={props.text}
          />
        </S.SearchWrapper>
        {/* <InfiniteScroll
          pageStart={0}
          loadMore={props.loadFunc}
          hasMore={true}
          useWindow={false}
        > */}
        <S.ItemWrapper>
          {props.data?.fetchUglyProductsSortedByTitle.map((el: any) => {
            return <ListItem key={el.id} el={el} drag={props.drag} />;
          })}
        </S.ItemWrapper>
        {/* </InfiniteScroll> */}
      </S.Wrapper>
    </S.OutLine>
  );
}
