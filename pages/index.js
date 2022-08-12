import Navbar from '../components/navbar';
import Link from 'next/link';
import Profile from '../components/profile';
import Suggestions from '../components/suggestions';
import Footer from '../components/footer';
import { BsArrowRight } from 'react-icons/bs'

export default function Home() {
  const stories = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]

  const renderStories = () => {
    return (
      stories.map((story, idx, str) => {
        return (
          <>
            <div id="story" className={`flex ${idx === str.length - 1 ? '' : 'mr-2'}`}>
              <Link href="#">
                <a>
                  <div className='rounded-full' style={{ border: "3px", backgroundImage: "conic-gradient(#8134AF, #F58529, #FEDA77, #F58529, #DD2A7B)", padding: "3px" }}>
                    <img className='border border-white rounded-full mx-auto' src='dahyun.jpg' width={59} height={59} />

                  </div>
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
      <Navbar />
      <div id="main" className='container-fluid lg:px-40 xl:px-56 mt-0 md:mt-6 flex justify-center'>
        <div id="left" className='w-full md:w-8/12'>
          <div id="stories" className='bg-white border-b md:border mb-6 p-4 flex items-center overflow-x-scroll'>
            {renderStories()}
          </div>
          <div id="posts" className='bg-white border-t border-b md:border'>
            posts
          </div>
        </div>
        <div id="right" className='hidden lg:block lg:w-4/12 ml-6'>
          <Profile />
          <Suggestions />
          <Footer />
        </div>
      </div>
    </>
  )
}
