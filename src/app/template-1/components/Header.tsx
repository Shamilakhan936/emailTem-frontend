import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"; // Standard icons

const Header: React.FC = () => {
  return (
    <header className="rounded-t-xl flex flex-col md:flex-row items-center gap-6">
      {/* User Info */}
      <div className="flex flex-col text-center md:text-left">
        {/* Name */}
        <h1 className="text-3xl font-semibold text-black">SHAMILA KHAN</h1>

        {/* Role */}
        <p className="text-lg text-blue-600">Experienced FRONTEND DEVELOPER | UI/UX Designer</p>

        {/* Contact Information */}
        <div className="flex flex-col gap-2 mt-2 text-black">
          <div className="flex items-center gap-2">
            <FiPhone />
            <span>+92 355 433 0721</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMail />
            <span>shamilak936@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMapPin />
            <span>Talibshah house near Heli chock GLT</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
