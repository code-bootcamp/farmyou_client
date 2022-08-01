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
            id="1c90cabf-6132-4970-ab3f-63eb6f4ca0e1"
            onClick={props.onClickCategory}
          />
          <ListCategoryItem
            src="/icons/list/eggplants.png"
            name="과채류"
            id="cc1b8948-caf0-4988-aff7-46fd231b98b8"
            onClick={props.onClickCategory}
          />
          <ListCategoryItem
            src="/icons/list/beet.png"
            name="근채류"
            id="6723bbc2-4518-43d1-a7c8-08f570bb56d3"
            onClick={props.onClickCategory}
          />
          <ListCategoryItem
            src="/icons/list/chili-pepper.png"
            name="양념류"
            id="36a90dad-6444-442d-bd52-e17060606b42"
            onClick={props.onClickCategory}
          />
          <ListCategoryItem
            src="/icons/list/strawberry.png"
            name="과일류"
            id="47a49dfb-65d6-4257-aa04-0bbe31b9d479"
            onClick={props.onClickCategory}
          />
          <ListCategoryItem
            src="/icons/list/mushroom.png"
            name="버섯류"
            id="3de5da83-c357-481c-87c4-d634205b3945"
            onClick={props.onClickCategory}
          />
          <ListCategoryItem
            src="/icons/list/wheat.png"
            name="곡류"
            id="20d5ed94-31e9-4931-bdcd-f0c5826506d6"
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
