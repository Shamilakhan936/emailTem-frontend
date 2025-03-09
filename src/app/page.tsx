import { NextPage } from "next";
import Resume from "./components/Resume";
// import Layout from "./components/layout/PageLayout";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10  ">
      
      <Resume />

    </div>
  );
};

export default Home;
