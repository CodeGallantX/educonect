import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import LeftPane from '../components/LeftPane';
import CommunityCardLarge from '../components/CommunityCardLarge';
import CommunityBox from '../components/CommunityBox';
import PostCard from '../components/PostCard';
import CreateCommunity from '../components/CreateCommunity';

const App = () => {
  return (
    <div>
    <div className="bg-gray-800 hidden md:block">
      <Header />
      <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-6 px-4 md:px-6 lg:px-10 xl:px-24">
        {/* <div className='hidden md:block lg:hidden xl:block lg:col-span-0'>
          <LeftPane />
        </div> */}
        <div className="md:col-span-3 lg:col-span-4 flex flex-col items-start justify-start space-y-8">
          <CommunityBox />
          <div>
            <div className="px-2">
              <h1 className="text-2xl text-white font-bold">Discover Student Communities</h1>
              <p className="text-lg text-gray-300">Sugested for you</p>
            </div>
          <CommunityCardLarge />
          </div>
        </div>
        <div className="hidden md:block col-span-2">
          <CreateCommunity />
        </div>
      </div>
    </div>
    <div className="bg-gray-800 block md:hidden">
    <HeaderMobile/>
    <div className="flex flex-col items-start justify-start space-y-4 px-4 md:px-6 mt-6">
          <CommunityBox />
          <CommunityCardLarge />
        </div>
    </div>
    </div>
  );
};

export default App;