import ProfileImage from "./ProfileImage";
import Languages from "./Languages";
import Skills from "./Skills";
import Projects from "./Courses";
import Achievements from "./Achievements";
import Passion from "./PassionComponent";

const LeftColumn = () => {
  return (
    <div className="md:bg-[rgb(34,64,92)] font-inter bg-white md:text-[#e6e6e6] text-black md:border-t-[20px] md:border-[#233347] md:p-8 p-4 w-full md:w-[330px] font-inter">
     
      <div className="hidden md:block">
        <ProfileImage />
      </div>
      <Achievements />
      <Skills />
      <Projects />
      <Passion />
      
    </div>
  );
};

export default LeftColumn;
