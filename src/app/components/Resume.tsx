import { NextPage } from "next";
import LeftColumn from "../components/LeftColumn"; 
import RightColumn from "../components/RightColumn"; 

const defaultHeader = {
  name: '',
  title: '',
  location: '',
  email: '',
  phone: '',
  image: '',
  role: '',
  github: '',
  summary: ''
};

const defaultExperience = [{
  id: 1,
  company: '',
  position: '',
  role: '',
  city: '',
  date: '',
  description: '',
  responsibilities: []
}];

const defaultEducation = [{
  id: 1,
  institution: '',
  degree: '',
  field: '',
  date: '',
  city: ''
}];

const defaultLanguages = [{
  id: 1,
  name: '',
  level: '',
  proficiency: 0
}];

const Home: NextPage = () => {
  return (
    <div className="max-w-[840px] max-h-full mx-auto my-8 bg-white shadow-lg border-[1px] border-[#bdbdbd]">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <RightColumn
          header={defaultHeader}
          experience={defaultExperience}
          education={defaultEducation}
          languages={defaultLanguages}
        />
        <LeftColumn />
      </div>
    </div>
  );
};

export default Home;
