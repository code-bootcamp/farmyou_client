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
          id="4714ef0e-058d-41fe-a312-83452ade768e"
          onClick={props.onClickAll}
        />
        <ListCategoryItem
          src="/icons/list/chard.png"
          name="엽채류"
          id="aee5e17b-14fd-48be-be68-b697791e5d39"
          onClick={props.onClickCategory}
        />
        <ListCategoryItem
          src="/icons/list/eggplants.png"
          name="과채류"
          id="09f3161c-a29f-4258-aec2-c218ba99da46"
          onClick={props.onClickCategory}
        />
        <ListCategoryItem
          src="/icons/list/beet.png"
          name="근채류"
          id="d2ca5445-d38e-40b1-8433-a50ca2d8337a"
          onClick={props.onClickCategory}
        />
        <ListCategoryItem
          src="/icons/list/chili-pepper.png"
          name="양념류"
          id="bc2f2bfd-9f53-4877-acd1-90346792e00c"
          onClick={props.onClickCategory}
        />
        <ListCategoryItem
          src="/icons/list/strawberry.png"
          name="과일류"
          id="d9434649-f177-4455-9c90-9ceabea2f6ad"
          onClick={props.onClickCategory}
        />
        <ListCategoryItem
          src="/icons/list/mushroom.png"
          name="버섯류"
          id="7eb7a2a7-5e43-4dd9-9ae7-1865dc314682"
          onClick={props.onClickCategory}
        />
        <ListCategoryItem
          src="/icons/list/wheat.png"
          name="곡류"
          id="52b78eb6-0dbb-42ed-8829-7627378e74fa"
          onClick={props.onClickCategory}
        />
      </S.CategoryWrapper>
      <S.Wrapper>
        <S.SearchWrapper>
          <Select
            defaultValue="최신순"
            style={{ width: 150 }}
            // onChange={handleChange}
          >
            <Option value="최신순">최신순</Option>
            <Option value="높은가격순">높은가격순</Option>
            <Option value="낮은가격순">낮은가격순</Option>
            <Option value="판매량순">판매량순</Option>
          </Select>
          <S.SearchInput placeholder="검색어를 입력해주세요." />
        </S.SearchWrapper>
        {!props.isCategory && (
          <S.ItemWrapper>
            {props.allData?.fetchDirectProductsByDirectStoreId?.map(
              (el: any) => {
                return <ListItem key={el.id} el={el} drag={props.drag} />;
              }
            )}
          </S.ItemWrapper>
        )}
        {props.isCategory && (
          <S.ItemWrapper>
            {props.categoryData?.fetchDirectProductsByStoreAndCategoryByDateCreated.map(
              (el: any) => {
                return <ListItem key={el.id} el={el} drag={props.drag} />;
              }
            )}
          </S.ItemWrapper>
        )}
      </S.Wrapper>
    </S.OutLine>
  );
}
