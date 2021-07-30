import Login from "./Login/login";
import { isAuthenticated } from "../context/Auth2Context"
import Home from "./Home";

export default function Index() {

  if (isAuthenticated) {
    return <Home />
  } else {
    return <Login />
  }


}