const Experience = () => {
    return (
      <div className="mb-6">
        <h2 className="text-[16px] font-normal text-[#384347] border-b-[1px] border-[#bdbdbd]">EXPERIENCE</h2>
        {/* Experience Item 1 */}
        <div className="mt-2">
          <div className="flex justify-between items-center">
            <h3 className="text-[15px] text-[#384347] font-normal">Backend Developer</h3>
            <p className="text-[#384347] text-[12px]">01/2021 - 08/2021</p>
          </div>
          <p className="text-[#008CFF] text-[14px]">Company XYZ</p>
          <ul className="list-disc text-[#384347] list-inside mt-2 text-[12px] text-gray-700">
            <li>Developed and maintained web and software solutions.</li>
            <li>Designed and implemented RESTful APIs using technologies like Laravel, Express.js, and Django.</li>
            <li>Worked with databases such as MySQL, MongoDB, and PostgreSQL.</li>
            <li>Integrated authentication and authorization mechanisms using Laravel Passport, Sanctum, and JWT for secure API access</li>
            <li>Deployed and managed websites on Hostinger, configuring domains, SSL certificates, and server environments</li>
            <li>Designed and implemented RESTful APIs for seamless frontend-backend communication and third-party integrations</li>
          </ul>
        </div>
        {/* Experience Item 2 */}
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-[15px] text-[#384347] font-normal">Laravel Developer</h3>
            <p className="text-[#384347] text-[12px]">08/2020 - 01/2021</p>
          </div>
          <p className="text-[#008CFF] text-[14px]">Company ABC</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 text-[12px]">
            <li>Developed and maintained custom software solutions.</li>
            <li>Designed and implemented RESTful APIs using Laravel and React.</li>
            <li> Developed and deployed scalable applications on cloud platforms, ensuring high availability and reliability</li>
            <li>Built and optimized interactive user interfaces with React, enhancing user experience and responsiveness</li>
            <li>Implemented database management solutions using MySQL and MongoDB to support high-traffic applications</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Experience;
  