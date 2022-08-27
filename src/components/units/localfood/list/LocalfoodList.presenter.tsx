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
            id="0c66bf51-5766-46d4-8eef-52f6bddba181"
            onClick={props.onClickCategory}
          />
          <ListCategoryItem
            src="/icons/list/eggplants.png"
            name="과채류"
            id="d30bfec3-09fe-4d53-b821-65ec53781b07"
            onClick={props.onClickCategory}
          />
          <ListCategoryItem
            src="/icons/list/beet.png"
            name="근채류"
            id="d7ac5587-5aa9-4d37-a515-f8f8e6ba9dab"
            onClick={props.onClickCategory}
          />
          <ListCategoryItem
            src="/icons/list/chili-pepper.png"
            name="양념류"
            id="ef426836-02ae-46d8-a715-d71ad1af1ba3"
            onClick={props.onClickCategory}
          />
          <ListCategoryItem
            src="/icons/list/strawberry.png"
            name="과일류"
            id="2144df70-c36d-45fc-904e-d790d5631d25"
            onClick={props.onClickCategory}
          />
          <ListCategoryItem
            src="/icons/list/mushroom.png"
            name="버섯류"
            id="f7018fb6-dcd9-474e-93a0-b23e4267adc5"
            onClick={props.onClickCategory}
          />
          <ListCategoryItem
            src="/icons/list/wheat.png"
            name="곡류"
            id="40c5c645-66c8-462c-986c-75b401126656"
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
