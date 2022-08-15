import Navbar from '../components/navbar';
import Link from 'next/link';
import Profile from '../components/profile';
import Suggestions from '../components/suggestions';
import Footer from '../components/footer';
import { BsThreeDots, BsChevronLeft, BsChevronRight, BsHeart, BsChat, BsShare, BsBookmark, BsEmojiSmile } from 'react-icons/bs'
import Script from 'next/script';

export default function Home() {
  const stories = [{ story_posted: true }, {}];
  const renderStories = () => {
    return (
      stories.map((story, idx, str) => {
        return (
          <>
            <div id="story" className={`flex ${idx === str.length - 1 ? '' : 'mr-2'}`}>
              <Link href="#">
                <a>
                  {
                    story.story_posted ? (
                      <div className='rounded-full' style={{ border: "3px", backgroundImage: "conic-gradient(#8134AF, #F58529, #FEDA77, #F58529, #DD2A7B)", padding: "3px" }}>
                        <img className='border border-white rounded-full mx-auto' src='dahyun.jpg' width={59} height={59} />
                      </div>
                    ) : (
                      <div className='rounded-full bg-gray-300' style={{ border: "3px", padding: "3px" }}>
                        <img className='border border-white rounded-full mx-auto' src='dahyun.jpg' width={59} height={59} />
                      </div>
                    )
                  }

                  <p className='text-xs'>
                    {'bambang_sudarsono'.length > 10 ? 'bambang_sudarsono'.slice(0, 8) + '...' : 'bambang_sudarsono'}
                  </p>
                </a>
              </Link>
            </div>
          </>
        )
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
              <div id="post" className='bg-white border-t border-b md:border mb-6'>
                <div id="header" className='flex justify-between items-center p-3'>
                  <div className="flex items-center">
                    <Link href="/nayeonyny">
                      <a>
                        <img className='rounded-full border rounded-full' src='nayeon.jpg' width={42} height={42} />
                      </a>
                    </Link>
                    <div className="ml-4">
                      <Link href="/nayeonyny">
                        <a>
                          <p className='font-bold'>nayeonyny</p>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <Link href="#">
                    <a className='text-gray-400 font-bold'>
                      <BsThreeDots />
                    </a>
                  </Link>
                </div>
                <div id="ig_post" className='relative'>
                  <div id="ig_photos" className="w-full mx-auto">
                    {/* <img className='w-full' src="background.jpg" alt="twice" /> */}
                    <img className='w-full' src="post_1.jpg" alt="nayeonyny" />
                    <img className='w-full' src="post_2.jpg" alt="nayeonyny" />
                    <img className='w-full' src="post_3.jpg" alt="nayeonyny" />
                  </div>

                  <div id="post_navigation" className="w-full top-1/2 absolute">
                    <button className='bg-gray-100 rounded-full p-1 text-gray-500 float-left ml-2'>
                      <BsChevronLeft />
                    </button>
                    <button className='bg-gray-100 rounded-full p-1 text-gray-500 float-right mr-2'>
                      <BsChevronRight />
                    </button>
                  </div>
                </div>
                <div id="nav_indicator" className="flex justify-center my-2">
                  <div className="rounded-full w-2 h-2 mx-0.5 bg-blue-400"></div>
                </div>
                <div id="interactions" className="flex justify-between items-center px-3 pb-3">
                  <div className="">
                    <button className="text-xl mr-4 duration-300 hover:text-gray-400" type="button">
                      <BsHeart />
                    </button>
                    <button className="text-xl mr-4 duration-300 hover:text-gray-400" type="button">
                      <BsChat />
                    </button>
                    <button className="text-xl duration-300 hover:text-gray-400" type="button">
                      <BsShare />
                    </button>
                  </div>
                  <div className="">
                    <button className="text-xl duration-300 hover:text-gray-400" type="button">
                      <BsBookmark />
                    </button>
                  </div>
                </div>
                <div id="information" className='text-sm mx-3 mb-3'>
                  <p className='font-bold mb-2'>125 likes</p>
                  <div className='mb-2'>
                    <p className='inline mr-1'><b>nayeonyny</b></p>
                    <p id='caption' className='inline'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet itaque ex quia totam. Voluptatem magnam ipsa iste tempora. Nisi, ab?
                      <br /><br />
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, facilis quisquam! Neque laudantium molestiae vero facilis. Dolorum, aliquid quasi dolores porro ratione a hic? Laboriosam doloribus ex nisi a ipsum dolorum iste, autem voluptates, voluptatem consectetur iure voluptate totam libero explicabo tenetur laudantium laborum mollitia. Explicabo a ipsam non autem.
                    </p>
                  </div>
                  <small className='text-gray-400'>1 HOUR AGO</small>
                </div>
                <div id="comment" className='flex p-4 border-t'>
                  <button>
                    <BsEmojiSmile className='text-2xl' />
                  </button>
                  <input id='comment_section' type="text" placeholder='Add a comment...' className='w-full px-4' />
                  <button id='post_button' className='font-bold text-blue-200'>Post</button>
                </div>
              </div>
            </div>
          </div>
          <div id="right" className='hidden lg:block lg:w-4/12 ml-6'>
            <Profile />
            <Suggestions />
            <Footer />
          </div>
        </div>
      </div>
      <Script src="js/script.js" />
    </>
  )
}
