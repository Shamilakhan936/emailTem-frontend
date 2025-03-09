import { NextPage } from 'next';
import Resume2 from './components/Resume';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Resume />
    </div>
  );
};

export default Home;
