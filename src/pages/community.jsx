import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import CommunityCardLarge from '../components/CommunityCardLarge';
import CommunityBox from '../components/CommunityBox';
import CreateCommunity from '../components/CreateCommunity';
import Footer from '../components/Footer';

const CommunityPage = () => {
  return (
    <div>
      <Helmet>
        <title>Community - EduConnect</title>
        <meta name="description" content="Join and discover student communities on EduConnect. Collaborate, share knowledge, and learn with peers across Africa." />
        <meta name="keywords" content="EduConnect, student communities, discover communities, join communities, peer collaboration, academic groups, student learning, education platform" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Community - EduConnect" />
        <meta property="og:description" content="Discover and join student communities on EduConnect. Start collaborating with fellow students and grow academically." />
        <meta property="og:url" content="https://educonnect.example.com/community" />
        <meta property="og:site_name" content="EduConnect" />
        <meta property="og:image" content="/images/educonnect-community-preview.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Community - EduConnect" />
        <meta name="twitter:description" content="Join and discover student communities to collaborate and share knowledge on EduConnect." />
        <meta name="twitter:image" content="/images/educonnect-community-preview.png" />
      </Helmet>

      <div className="bg-gray-800 hidden md:block">
        <Header />
        <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-6 px-4 md:px-6 lg:px-10 xl:px-24">
          <div className="md:col-span-3 lg:col-span-4 flex flex-col items-start justify-start space-y-12">
            <CommunityBox />
            <div>
              <div id="suggestedCommunities" className="px-2">
                <h1 className="text-2xl text-white font-bold">Discover Student Communities</h1>
                <p className="text-lg text-gray-300">Suggested for you</p>
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
        <HeaderMobile />
        <div className="flex flex-col items-start justify-start space-y-4 px-4 mt-6 pb-28">
          <CommunityBox />
          <div>
            <div id="suggestedCommunities" className="px-2">
              <h1 className="text-xl text-white font-bold">Discover Student Communities</h1>
              <p className="text-gray-300">Suggested for you</p>
            </div>
          </div>
          <CommunityCardLarge />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CommunityPage;
