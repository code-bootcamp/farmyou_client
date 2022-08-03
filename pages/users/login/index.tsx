import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import Login from "../../../src/components/units/users/login/login.container";

export default function LoginPage() {
  useAuth();
  return <Login />;
}
