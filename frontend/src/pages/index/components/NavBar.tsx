import { useNavigate } from "react-router-dom";
import { TextAlignJustify, BellRing } from "lucide-react";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white">
      <div className="flex justify-between items-center border-b-2 border-dashed border-blue">
        <div className="p-4 pr-8 flex items-center border-r-2 border-dashed border-blue gap-8">
          <TextAlignJustify
            size={20}
            strokeWidth={2.5}
            className="text-blue cursor-pointer"
          />
          <div
            onClick={() => navigate("/")}
            className="flex items-center cursor-pointer group"
          >
            <h1 className="text-3xl text-blue font-bold tracking-tighter group-hover:scale-90 group-hover:-translate-x-3  group-hover:underline decoration-2  duration-700 transition-all">
              AwkwardlySocial
            </h1>
          </div>

          <BellRing
            size={20}
            strokeWidth={2.5}
            className="text-2xl text-blue hn hn-bell cursor-pointer hover:scale-90 duration-700 transition-all"
          />
        </div>

        <div className="w-full h-18 px-6 flex items-center bg-blue justify-between ">
          <h2 className="text-white text-2xl whitespace-nowrap shrink-0 pr-4 border-white border-r-2 border-dashed">
            share your thoughts to the world
          </h2>

          <div className="relative pl-4 w-full">
            <input
              type="text"
              placeholder="is internet healing?"
              className="w-full bg-white border border-white text-blue font-bold placeholder-gray-400 placeholder:tracking-tighter placeholder:font-medium p-2 pr-10 focus:outline-none focus:bg-green focus:border-white duration-700 transition-all"
            />
            <i className="hn hn-search absolute right-3 top-3 text-blue cursor-pointer "></i>
          </div>
        </div>

        <div className="p-4 h-18 flex items-center justify-center cursor-pointer text-blue transition-all group duration-700 hover:bg-green border-l-2 border-dashed border-blue">
          <h2 className="text-2xl transition-all duration-700 group-hover:scale-90 px-4">
            AWKWARD
          </h2>
        </div>
      </div>
    </nav>
  );
}
