import Header from "./components/Header";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Strength from "./components/Strengths";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import '../globals.css';


export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto p-4 sm:p-8 md:p-12 lg:p-[50px] bg-gray-50 min-h-screen">
     
        <Header />
        <Summary />
        <Experience />
    
        <Education />
        <Strength />
        <Languages />
    
        <Skills />
        <Achievements />
   
    </div>
  );
}
