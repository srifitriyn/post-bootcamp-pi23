import { Link } from "react-router-dom";
import MainButton from "./MainButton";
import { TextInput } from "flowbite-react";

function Navbar({ showInput = false }) {
  return (
    <div className="py-4 flex items-center justify-center bg-[#f1d287]">
      <Link to="/">
        <MainButton text="Back" />
      </Link>
      <div className="flex flex-col items-center gap-4 basis-4/5">
        <img src="./src/assets/pokemon-logo.png" width={200} alt="" />
        {showInput && (
          <TextInput
            className="rounded-lg border-none"
            id="search"
            type="text"
            placeholder="Search your fighter..."
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;