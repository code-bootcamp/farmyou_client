import ListItem from "../../../commons/items/list";
import * as S from "./LocalfoodList.styles";
import { Select } from "antd";
import ListCategoryItem from "../../../commons/items/listcategory";
import { v4 as uuidv4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";
import {
  IFetchDirectProductsSortedByTitle,
  ILocalfoodListUIProps,
} from "./LocalfoodList.types";
import PopUp from "../../../commons/popup";

const { Option } = Select;

export default function LocalfoodListUI(props: ILocalfoodListUIProps) {
  return (
    <>
      <S.OutLine>
        <S.CategoryWrapper>
          <ListCategoryItem
            src="/icons/list/select-all.png"
            name="전체"
            id="all"
            onClick={props.onClickAll}
          />
          <ListCategoryItem
            src="/icons/list/chard.png"
            name="엽채류"
            id="bfc70f34-8ec9-4ae2-8141-f0b7b6dadd26"
            onClick={props.onClickCategory}
          />
          <ListCategoryItem
            src="/icons/list/eggplants.png"
            name="과채류"
            id="2a4d6fb3-7dec-4876-9b33-942b6f5e1044"
            onClick={props.onClickCategory}
          />
          <ListCategoryItem
            src="/icons/list/beet.png"
            name="근채류"
            id="e5cd51b0-1e77-4b5d-a53b-439bf6a539c2"
            onClick={props.onClickCategory}
          />
          <ListCategoryItem
            src="/icons/list/chili-pepper.png"
            name="양념류"
            id="e895e43f-9fec-4b34-8f35-768074aa5c99"
            onClick={props.onClickCategory}
          />
          <ListCategoryItem
            src="/icons/list/strawberry.png"
            name="과일류"
            id="7b92d172-9ef5-40db-b307-c7d8341c2f21"
            onClick={props.onClickCategory}
          />
          <ListCategoryItem
            src="/icons/list/mushroom.png"
            name="버섯류"
            id="151cb7d2-484e-462d-b21e-bc5524a90e40"
            onClick={props.onClickCategory}
          />
          <ListCategoryItem
            src="/icons/list/wheat.png"
            name="곡류"
            id="2b5270a4-47e4-4212-8bb6-3468ce207a5a"
            onClick={props.onClickCategory}
          />
        </S.CategoryWrapper>
        <S.Wrapper>
          <S.SearchWrapper>
            <S.MarketName>{props.storeName}</S.MarketName>
            <S.SearchOption>
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
                  onChange={props.onChangeSearch}
                  placeholder="검색어를 입력해주세요."
                  ref={props.myRef}
                  // value={props.text}
                />
              </S.SearchInputWrapper>
            </S.SearchOption>
          </S.SearchWrapper>
          <InfiniteScroll
            pageStart={1}
            loadMore={props.loadFunc}
            hasMore={true}
            useWindow={false}
          >
            <S.ItemWrapper>
              {props.data?.fetchDirectProductsSortedByTitle.map(
                (el: IFetchDirectProductsSortedByTitle) => {
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
