import Header from "../../components/Header";
import Summary from "../../components/Summary";
import Experience from "../../components/Experience";
import Education from "../../components/Education";
import Achievements from "../../components/Achievements";
import Strength from "../../components/Strengths";




export default function Home() {
  return (
    <div className=" mx-auto p-[50px] bg-gray-50 min-h-screen">
      <Header />
      <Summary />
      <Experience />
      <Education />
      <Strength />
      <Achievements />
    </div>
  );
}
