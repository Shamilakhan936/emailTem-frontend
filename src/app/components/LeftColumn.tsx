import ProfileImage from "./ProfileImage";
import Languages from "./Languages";
import Skills from "./Skills";
import Projects from "./Projects";
import Achievements from "./Achievements";

const LeftColumn = () => {
  return (
    <div className="md:bg-[rgb(34,64,92)] bg-white md:text-white text-black md:border-t-[20px] md:border-[#233347] md:p-8 p-4 w-full md:w-[330px] font-inter">
      {/* Profile Image (Hidden on Small Screens) */}
      <div className="hidden md:block">
        <ProfileImage />
      </div>

      <Languages />
      <Skills />
      <Projects />
      <Achievements />
    </div>
  );
};

export default LeftColumn;
