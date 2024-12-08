import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import LeftPane from '../components/LeftPane';
import PostBox from '../components/PostBox';
import SearchBox from '../components/SearchBox';
import SubjectSlider from '../components/SubjectSlider';
import PostCard from '../components/PostCard';
import RightPane from '../components/RightPane';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home - EduConnect</title>
        <meta name="description" content="Join EduConnect to ask and answer questions, share knowledge, and collaborate with students across Africa." />
        <meta name="keywords" content="EduConnect, sign up, student learning, collaborative platform, peer-to-peer learning, ask questions, share knowledge, African students, STEM education, academic community" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Home - EduConnect" />
        <meta property="og:description" content="Join EduConnect to ask and answer questions, share knowledge, and collaborate with students across Africa." />
        <meta property="og:url" content="https://educonnect.example.com" />
        <meta property="og:site_name" content="EduConnect" />
        <meta property="og:image" content="/images/educonnect-home-preview.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home - EduConnect" />
        <meta name="twitter:description" content="Join EduConnect to ask and answer questions, share knowledge, and collaborate with students across Africa." />
        <meta name="twitter:image" content="/images/educonnect-home-preview.png" />
      </Helmet>

      <div className="bg-gray-800 hidden md:block">
        <Header />
        <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6 px-4 md:px-6 lg:px-10 xl:px-24">
          <div className='hidden md:block lg:hidden xl:block lg:col-span-0'>
            <LeftPane />
          </div>
          <div className="md:col-span-3 lg:col-span-4 flex flex-col items-start justify-start space-y-4">
            <PostBox />
            <SubjectSlider />
            <PostCard />
          </div>
          <div className="hidden lg:block col-span-2">
            <RightPane />
          </div>
        </div>
      </div>

      <div className="bg-gray-800 block md:hidden">
        <HeaderMobile />
        <div className="flex flex-col items-start justify-start space-y-4 px-4 md:px-6 mt-6 pb-32">
          <SearchBox />
          <SubjectSlider />
          <PostCard />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
