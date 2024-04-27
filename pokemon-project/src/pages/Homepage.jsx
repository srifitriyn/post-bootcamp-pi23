import { Link } from "react-router-dom";
import MainButton from "../components/MainButton";
import "./pages.css";

function Homepage() {
  return (
    <div className="page-container gap-5">
      <div className="bg-image"></div>
      <h1 className="font-bold text-4xl text-[#4A4A41]">Welcome to The Pokemon World</h1>
      <Link to={"/pokemons"}>
        <MainButton text="Choose Your Fighter" />
      </Link>
      <p className="absolute text-[#4A4A41] text-sm bottom-10">Created by: Sri Fitri Yani Nurhasanah, 2024.</p>
    </div>
  );
}

export default Homepage;
