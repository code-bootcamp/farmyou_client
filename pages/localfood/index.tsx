import LocalfoodList from "../../src/components/units/localfood/list/LocalfoodList.container";
import LayoutBanner from "../../src/components/commons/layout/banner/LayoutBanner.container";
export default function LocalFoodListPage() {
  return (
    <>
      <LayoutBanner />
      <LocalfoodList></LocalfoodList>
    </>
  );
}
