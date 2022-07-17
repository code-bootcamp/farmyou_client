export interface ILocalfoodListUIProps {
  onClickAll: (event: any) => void;
  onClickCategory: (event: any) => void;
  allData: any;
  categoryData: any;
  isCategory: boolean;
  drag: (event: any) => void;
}
