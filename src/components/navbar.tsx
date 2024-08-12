import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

function Navbar() {
  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
  }

  const navigate = useNavigate();

  return (
    <div className=" fixed top-0 bg-background w-full h-12 flex items-center justify-between px-8 ">
      <div
        className=" permanent-marker-regular text-3xl cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        Flipper
      </div>
      <div className=" flex gap-5">
        <Button onClick={toggleTheme}>Toggle theme</Button>
        <Button
          variant={"destructive"}
          onClick={() => {
            navigate("/admin");
          }}
        >
          Admin
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
