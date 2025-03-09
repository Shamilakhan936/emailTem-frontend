import Header from "./Header";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import Certification from "./Certification";

const RightColumn = () => {
  return (
    <div className="col-span-2 pt-[60px] pl-[50px] pr-[35px] pb-[20px]">
      <Header />
      <Summary />
      <Experience />
      <Education />
      <Certification />
    </div>
  );
};

export default RightColumn;
