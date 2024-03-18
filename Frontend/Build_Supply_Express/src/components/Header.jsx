import HeaderBar from "./HeaderBar";
import HeaderNav from "./HeaderNav";
// import { categoriesData } from "../static/data";

function Header() {
  return (
    <>
      <HeaderNav /*categoriesData={categoriesData}*/></HeaderNav>
      <HeaderBar /*categoriesData={categoriesData}*/></HeaderBar>
    </>
  );
}

export default Header;
