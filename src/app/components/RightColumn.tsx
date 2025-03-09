import Header from "./Header";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import Certification from "./Certification";
import ProfileImage from "./ProfileImage";
// import Footer from "./layout/Footer"

const RightColumn = () => {
  return (
    <div className="col-span-2 h-full px-4 py-5 md:px-12 md:py-10">
      {/* Center Profile Image only on small screens */}
      <div className="flex justify-center md:hidden">
        <ProfileImage />
      </div>

      <Header />
      <Summary />
      <Experience />
      <Education />
      <Certification />
      {/* <Footer /> */}

    </div>
  );
};

export default RightColumn;
