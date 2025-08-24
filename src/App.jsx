import HomeLayout from "./pages/HomeLayout";
import pattern from "./assets/svg/Pattern Gold.svg";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#126634]">
      <div
        className="opacity-5 absolute inset-0 bg-repeat"
        style={{ backgroundImage: `url(${pattern})`, backgroundSize: "500px" }}
      ></div>
      <div className="relative z-10">
        <HomeLayout />
      </div>
    </div>
  );
}
