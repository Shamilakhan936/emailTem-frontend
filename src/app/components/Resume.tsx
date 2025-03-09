import { NextPage } from "next";
import LeftColumn from "../components/LeftColumn"; 
import RightColumn from "../components/RightColumn"; 

const Home: NextPage = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 bg-white shadow-lg">
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
