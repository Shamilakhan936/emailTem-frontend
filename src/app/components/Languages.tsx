const Languages = () => {
  return (
    <div className="mt-6 mb-2">
      <h3 className="text-[16px] font-normal border-b-[1px] border-white mb-2 text-white">
        LANGUAGES
      </h3>
      <div className="text-white">
        <ul className="text-[14px] space-y-3">
          {/* English */}
          <li className="flex items-center justify-between">
            <span>English</span>
            <div className="flex items-center space-x-4">
              <span>Native</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
                ))}
              </div>
            </div>
          </li>

          {/* Urdu */}
          <li className="flex items-center justify-between">
            <span>Urdu</span>
            <div className="flex items-center space-x-4">
              <span>Native</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
                ))}
              </div>
            </div>
          </li>

          {/* Burushki */}
          <li className="flex items-center justify-between">
            <span>Burushki</span>
            <div className="flex items-center space-x-4">
              <span>Advanced</span>
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
                ))}
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </li>

          {/* Shina */}
          <li className="flex items-center justify-between">
            <span>Shina</span>
            <div className="flex items-center space-x-4">
              <span>Intermediate</span>
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
                ))}
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
                ))}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Languages;
