import { HeaderData, Experience, Education, Language } from '../types/datatypes';
import Header from "./Header";
import ExperienceSection from "./Experience";
import EducationSection from "./Education";
import Languages from "./Languages";

interface RightColumnProps {
  header: HeaderData;
  experience: Experience[];
  education: Education[];
  languages: Language[];
}

export default function RightColumn({ header, experience, education, languages }: RightColumnProps) {
  return (
    <div className="col-span-2 font-inter px-6 py-5 md:pl-16 md:pr-6 md:pt-[50px]">
      <Header data={header} />
      <ExperienceSection data={experience} />
      <EducationSection data={education} />
      <Languages data={languages} />
    </div>
  );
}
