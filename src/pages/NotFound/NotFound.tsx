import type { FC } from "react";
import notFoundImage from "@assets/png/notfound-image.png";
import { useNavigate } from "react-router-dom";

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#004481] w-full h-screen flex justify-center">
      <div className="my-auto flex flex-col items-center">
        <img
          src={notFoundImage}
          alt="Not Found"
          className="w-full max-w-[250px]"
        />
        <h1 className="mt-8 text-3xl font-bold text-[#FFFFFF]">Oh No!</h1>
        <p className="mt-3 text-sm font-normal text-[#FFFFFF]">
          Something went wrong!
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-10 w-full max-w-[180px] h-10 bg-black hover:bg-slate-950 transition-all rounded-md text-slate-100 font-medium text-sm cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
