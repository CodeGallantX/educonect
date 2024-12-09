import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import LeftPane from '../components/LeftPane';
import PostBox from '../components/PostBox';
import UpvotedPostBox from '../components/UpvotedPostBox';
import AskQuestion from '../components/AskQuestion';
import Footer from '../components/Footer';

const PostPage = () => {
  return (
    <div>
      <Helmet>
        <title>Post - EduConnect</title>
        <meta name="description" content="View and interact with posts from fellow students on EduConnect. Upvote posts, ask questions, and share knowledge." />
        <meta name="keywords" content="EduConnect, posts, student community, upvote, ask questions, share knowledge, peer learning, academic platform" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Post - EduConnect" />
        <meta property="og:description" content="Join the conversation on EduConnect! View and interact with posts, upvote content, and ask your own questions." />
        <meta property="og:url" content="https://educonnect.example.com/post" />
        <meta property="og:site_name" content="EduConnect" />
        <meta property="og:image" content="/images/educonnect-post-preview.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Post - EduConnect" />
        <meta name="twitter:description" content="View, interact, and upvote posts from fellow students on EduConnect. Share your knowledge and ask questions." />
        <meta name="twitter:image" content="/images/educonnect-post-preview.png" />
      </Helmet>

      <div className="bg-gray-800 hidden md:block">
        <Header />
        <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6 px-4 md:px-6 lg:px-10 xl:px-24">
          <div className='hidden md:block lg:hidden xl:block lg:col-span-0'>
            <LeftPane />
          </div>  
          <div className="md:col-span-3 lg:col-span-4 flex flex-col items-start justify-start space-y-4">
            <PostBox />
            <UpvotedPostBox />
          </div>
          <div className="hidden lg:block col-span-2">
            <AskQuestion />
          </div>
        </div>
      </div>

      <div className="bg-gray-800 block md:hidden">
        <HeaderMobile />
        <div className="flex flex-col items-start justify-start space-y-4 px-4 md:px-6 mt-6 pb-28">
          <PostBox />
          <UpvotedPostBox />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PostPage;
