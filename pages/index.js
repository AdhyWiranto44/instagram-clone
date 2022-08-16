import Navbar from '../components/navbar';
import Profile from '../components/profile';
import Suggestions from '../components/suggestions';
import Footer from '../components/footer';
import Script from 'next/script';
import PostModal from '../components/post_modal';
import Post from '../components/post';
import Story from '../components/story';

export default function Home() {
  const stories = [{ story_posted: true }, {}];
  const posts = [{}, {}];

  const renderStories = () => {
    return (
      stories.map((story, idx) => {
        return <Story key={idx} story={story} />
      })
    )
  }

  const renderPosts = () => {
    return (
      posts.map((post, idx) => {
        return <Post key={idx} post={post} />
      })
    )
  }

  return (
    <>
      <div className='mb-10'>
        <Navbar />
        <div id="main" className='container-fluid lg:px-40 xl:px-56 mt-0 md:mt-6 flex justify-center'>
          <div id="left" className='w-full md:w-8/12'>
            <div id="stories" className='bg-white border-b md:border mb-6 p-4 flex items-center overflow-x-scroll'>
              {renderStories()}
            </div>
            <div id="posts">
              {renderPosts()}
            </div>
          </div>
          <div id="right" className='hidden lg:block lg:w-4/12 ml-6'>
            <Profile />
            <Suggestions />
            <Footer />
          </div>
        </div>
      </div>

      {/* Post Modal */}
      <PostModal />
      {/* End of Post Modal */}

      <Script src="js/script.js" />
    </>
  )
}
