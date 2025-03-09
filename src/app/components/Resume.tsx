import { NextPage } from "next";
import LeftColumn from "../components/LeftColumn"; 
import RightColumn from "../components/RightColumn"; 

const Home: NextPage = () => {
  return (
    <div className="max-w-[840px] max-h-[1310px] mx-auto my-8 bg-white shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <RightColumn
        />
        <LeftColumn
        />
      </div>
    </div>
  );
};

export default Home;
