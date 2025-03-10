import Header from "./Header";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import ProfileImage from "./ProfileImage";
import Languages from "./Languages";

const RightColumn = () => {
  return (
    <div className="col-span-2  font-inter px-6 py-5 md:pl-12 md:pr-8 md:pt-12">
      <div className="flex justify-center md:hidden">
        <ProfileImage />
      </div>

      <Header />
      <Summary />
      
      <Experience />
      <Education />
      <Languages />
      

    </div>
  );
};

export default RightColumn;
