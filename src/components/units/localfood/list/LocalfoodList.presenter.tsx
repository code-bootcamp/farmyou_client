import ListItem from "../../../commons/items/list";
import * as S from "./LocalfoodList.styles";
import { Select } from "antd";
import ListCategoryItem from "../../../commons/items/listcategory";

const { Option } = Select;

export default function LocalfoodListUI() {
  return (
    <S.OutLine>
      <S.CategoryWrapper>
        <ListCategoryItem src="/icons/list/select-all.png" name="전체" />
        <ListCategoryItem src="/icons/list/chard.png" name="엽채류" />
        <ListCategoryItem src="/icons/list/eggplants.png" name="과채류" />
        <ListCategoryItem src="/icons/list/beet.png" name="근채류" />
        <ListCategoryItem src="/icons/list/chili-pepper.png" name="양념류" />
        <ListCategoryItem src="/icons/list/strawberry.png" name="과일류" />
        <ListCategoryItem src="/icons/list/mushroom.png" name="버섯류" />
        <ListCategoryItem src="/icons/list/wheat.png" name="곡류" />
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
        <S.ItemWrapper>
          {new Array(20).fill(1).map((_, index) => {
            return <ListItem key={index}></ListItem>;
          })}
        </S.ItemWrapper>
      </S.Wrapper>
    </S.OutLine>
  );
}
