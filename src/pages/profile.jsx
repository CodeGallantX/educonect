import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import ProfileSection from '../components/ProfileSection';
import ProfileSectionMobile from '../components/ProfileSectionMobile';
import ProfileTabs from '../components/ProfileTabs';
import BadgesSection from '../components/BadgesSection';
import Footer from '../components/Footer';

const App = () => {
  return (
    <div>
    <div className="bg-gray-800 min-h-screen hidden md:block">
      <Header />
      <div className="mt-6 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-6 lg:px-10 xl:px-24">
        <div className="flex flex-col items-start justify-start space-y-16">
          <ProfileSection />
          <ProfileTabs />
        </div>
        <div className="hidden lg:block">
          <BadgesSection />
        </div>
      </div>
    </div>
    <div className="bg-gray-800 block md:hidden">
    <HeaderMobile/>
    <div className="flex flex-col items-start justify-start space-y-4 px-4 md:px-6 mt-6 pb-24">
          <ProfileSectionMobile />
        </div>
          <Footer />
    </div>
    </div>
  );
};

export default App;