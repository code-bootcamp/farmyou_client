import ListItem from "../../../commons/items/list";
import * as S from "./LocalfoodList.styles";
import { Select } from "antd";
import ListCategoryItem from "../../../commons/items/listcategory";
import { ILocalfoodListUIProps } from "./LocalfoodList.types";

const { Option } = Select;

export default function LocalfoodListUI(props: ILocalfoodListUIProps) {
  return (
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
          id="fef19348-62d0-47b5-9e7f-25fdafe59acd"
          onClick={props.onClickCategory}
        />
        <ListCategoryItem
          src="/icons/list/eggplants.png"
          name="과채류"
          id="d68644d7-efa3-4738-9175-8c3e2ad9daf6"
          onClick={props.onClickCategory}
        />
        <ListCategoryItem
          src="/icons/list/beet.png"
          name="근채류"
          id="84a3acb4-fdc5-4718-a8f3-b1d381e09c1e"
          onClick={props.onClickCategory}
        />
        <ListCategoryItem
          src="/icons/list/chili-pepper.png"
          name="양념류"
          id="eca05fa1-0c4f-43fc-aa39-0e237f443ffe"
          onClick={props.onClickCategory}
        />
        <ListCategoryItem
          src="/icons/list/strawberry.png"
          name="과일류"
          id="b3796219-4b3f-4130-bf0f-1deb0feae810"
          onClick={props.onClickCategory}
        />
        <ListCategoryItem
          src="/icons/list/mushroom.png"
          name="버섯류"
          id="b289363c-b29f-498c-b767-d12aa2523843"
          onClick={props.onClickCategory}
        />
        <ListCategoryItem
          src="/icons/list/wheat.png"
          name="곡류"
          id="44cc4424-eb4c-4da0-b24c-28bf60cf9bc7"
          onClick={props.onClickCategory}
        />
      </S.CategoryWrapper>
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
            <Option value="판매량순">판매량순</Option>
          </Select>
          <S.SearchInput
            onChange={props.onChangeSearch}
            placeholder="검색어를 입력해주세요."
            value={props.text}
          />
        </S.SearchWrapper>
        <S.ItemWrapper>
          {props.data?.fetchDirectProductsSortedByTitle.map((el: any) => {
            return (
              <ListItem
                key={el.id}
                el={el}
                drag={props.drag}
                onClickToDetail={props.onClickToDetail}
              />
            );
          })}
        </S.ItemWrapper>
      </S.Wrapper>
    </S.OutLine>
  );
}
