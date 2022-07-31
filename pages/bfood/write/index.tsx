import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import BfoodWrite from "../../../src/components/units/bfood/write/BfoodWrite.container";

export default function BfoodWritePage() {
  useAuth();
  return <BfoodWrite />;
}
