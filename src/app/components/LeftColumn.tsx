import ProfileImage from "./ProfileImage";
import Languages from "./Languages";
import Skills from "./Skills";
import Projects from "./Projects";
import Achievements from "./Achievements";

const LeftColumn = () => {
  return (
    <div className="bg-[rgb(34,64,92)] text-white p-8 w-[330px]">
      <ProfileImage />
      <Languages />
      <Skills />
      <Projects />
      <Achievements />
    </div>
  );
};

export default LeftColumn;
