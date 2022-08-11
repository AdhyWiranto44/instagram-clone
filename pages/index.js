import Navbar from '../components/navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="main" className='container-fluid lg:px-40 xl:px-56 mt-0 md:mt-6 flex justify-center'>
        <div id="left" className='w-full md:w-8/12'>
          <div id="stories" className='bg-white border-b md:border mb-6'>
            stories
          </div>
          <div id="posts" className='bg-white border-t border-b md:border'>
            posts
          </div>
        </div>
        <div id="right" className='hidden lg:block lg:w-4/12 ml-6'>
          <div id="profile" className='flex justify-between items-center my-4'>
            <div className="flex items-center">
              <Link href="/dahyuneee">
                <a>
                  <img className='rounded-full' src='dahyun.jpg' width={56} height={56} />
                </a>
              </Link>
              <div className="ml-4">
                <Link href="/dahyuneee">
                  <a>
                    <p className='font-bold'>dahyuneee</p>
                  </a>
                </Link>
                <p className='text-gray-400'>Kim Dahyun</p>
              </div>
            </div>
            <Link href="#">
              <a className='text-blue-400 font-bold'>
                Switch
              </a>
            </Link>
          </div>
          <div id="suggestions" className='mb-6'>
            <div className="flex justify-between mb-2">
              <p className='font-bold text-gray-400'>Suggestions For You</p>
              <Link href="#">
                <a className='text-black font-bold'>
                  See All
                </a>
              </Link>
            </div>
            <div id="lists">
              <div id="item" className='flex justify-between items-center mb-2'>
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
                    <p className='text-gray-400'>Im Nayeon</p>
                  </div>
                </div>
                <Link href="#">
                  <a className='text-blue-400 font-bold'>
                    Follow
                  </a>
                </Link>
              </div>
              <div id="item" className='flex justify-between items-center mb-2'>
                <div className="flex items-center">
                  <Link href="/thinkaboutzu">
                    <a>
                      <img className='rounded-full border rounded-full' src='tzuyu.jpg' width={42} height={42} />
                    </a>
                  </Link>
                  <div className="ml-4">
                    <Link href="/thinkaboutzu">
                      <a>
                        <p className='font-bold'>thinkaboutzu</p>
                      </a>
                    </Link>
                    <p className='text-gray-400'>Chou Tzuyu</p>
                  </div>
                </div>
                <Link href="#">
                  <a className='text-blue-400 font-bold'>
                    Follow
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div id="footer" className=''>
            <div id="links" className='mb-6'>
              <a className="hover:underline mr-2 inline-block text-gray-300 text-xs" href="#">About</a>
              <a className="hover:underline mr-2 inline-block text-gray-300 text-xs" href="#">Help</a>
              <a className="hover:underline mr-2 inline-block text-gray-300 text-xs" href="#">Press</a>
              <a className="hover:underline mr-2 inline-block text-gray-300 text-xs" href="#">API</a>
              <a className="hover:underline mr-2 inline-block text-gray-300 text-xs" href="#">Jobs</a>
              <a className="hover:underline mr-2 inline-block text-gray-300 text-xs" href="#">Privacy</a>
              <a className="hover:underline mr-2 inline-block text-gray-300 text-xs" href="#">Terms</a>
              <a className="hover:underline mr-2 inline-block text-gray-300 text-xs" href="#">Locations</a>
              <a className="hover:underline mr-2 inline-block text-gray-300 text-xs" href="#">Language</a>
            </div>
            <p className='text-gray-300 text-xs'>&copy; {`${new Date().getFullYear()} INSTAGRAM FOR US`}</p>
          </div>
        </div>
      </div>
    </>
  )
}
