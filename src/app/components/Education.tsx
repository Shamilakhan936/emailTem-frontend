const Education = () => {
  return (
    <div className="mb-6 text-[#2c2a2a]">
      <h2 className="text-[16px] font-normal max-sm:font-bold text-[#2c2a2a] border-b-[1px] border-[#bdbdbd] pb-[5px]">
        EDUCATION
      </h2>
      <div className="mt-2">
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-[15px] text-[#2c2a2a]  font-normal">
              Bachelor of Computer Science
            </h3>
            <p className="text-[#2c2a2a] text-[12px]">09/2019 - 06/2023</p>
          </div>
          <div className="flex justify-between items-center">
          <p className=" text-[#008CFF] text-[14px] font-normal">
            University Name
          </p>
          <p className="text-[#2c2a2a] text-[12px]">New York City</p>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-[15px] ] font-normal">
              Higher Secondary School Certificate
            </h3>
            <p className=" text-[#2c2a2a] text-[12px]">08/2017 - 08/2019</p>
          </div>
          <div className="flex justify-between items-center">
          <p className=" text-[#008CFF] text-[14px] font-normal">
           College Name
          </p>
          <p className=" text-[#2c2a2a] text-[12px]">London</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
