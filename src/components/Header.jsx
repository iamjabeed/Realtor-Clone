import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  // console.log(location.pathname);
  function pathMatchRoute(route) {
    if (route === location.pathname) return true;
  }
  return (
    <>
      <div className="flex justify-between items-center px-4 max-w-5xl sticky top-0 z-50 bg-white border-b shadow-sm mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5"
          />
        </div>
        <div>
          <ul className="flex justify-between items-center gap-4 cursor-pointer">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b- ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b- ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
            >
              <Link to={"/offers"}>Offers</Link>
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b- ${
                pathMatchRoute("/sign-in") && "text-black border-b-red-500"
              }`}
            >
              <Link to={"/sign-in"}> sign in</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
