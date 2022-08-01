import ListItem from "../../../commons/items/list";
import * as S from "./BfoodList.styles";
import { Select } from "antd";
import { v4 as uuidv4 } from "uuid";
import {
  IBfoodListUIProps,
  IFetchUglyProductsSortedByTitle,
} from "./BfoodList.types";
import InfiniteScroll from "react-infinite-scroller";
import PopUp from "../../../commons/popup";
const { Option } = Select;

export default function BfoodListUI(props: IBfoodListUIProps) {
  return (
    <>
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
            <S.SearchInputWrapper>
              <S.SearchInput
                placeholder="검색어를 입력해주세요."
                onChange={props.onChangeSearch}
              />
            </S.SearchInputWrapper>
          </S.SearchWrapper>
          <InfiniteScroll
            pageStart={1}
            loadMore={props.loadFunc}
            hasMore={true}
            useWindow={false}
          >
            <S.ItemWrapper>
              {props.data?.fetchUglyProductsSortedByTitle.map(
                (el: IFetchUglyProductsSortedByTitle) => {
                  return (
                    <ListItem
                      key={uuidv4()}
                      el={el}
                      drag={props.drag}
                      onClickToDetail={props.onClickToDetail}
                    />
                  );
                }
              )}
            </S.ItemWrapper>
          </InfiniteScroll>
        </S.Wrapper>
      </S.OutLine>
      <PopUp />
    </>
  );
}
