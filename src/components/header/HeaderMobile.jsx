import logo from "../../assets/logo.png";

function HeaderMobile() {
  return (
    <div className="sticky top-0 py-2 flex justify-center bg-[#F5F5F5] z-50 lg:hidden shadow-md">
      <div>
        <img className="max-h-16" src={logo} alt="Brand Logo" />
      </div>
    </div>
  );
}

export default HeaderMobile;
