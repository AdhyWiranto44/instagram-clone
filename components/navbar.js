import Link from 'next/link';
import Script from 'next/script';
import {
  BsSearch,
  BsHouseDoor,
  BsChatText,
  BsPlusSquare,
  BsCompass,
  BsHeart,
  BsPersonCircle,
  BsBookmark,
  BsGearWide,
  BsArrowRepeat
} from 'react-icons/bs';

export default function Navbar() {
  return (
    <>
      <div id='navbar' className='container-fluid px-4 lg:px-40 xl:px-56 py-2 sticky bg-white top-0 border-b flex justify-between items-center z-10'>
        <img src={`nav_logo.png`} width={110} />
        <div id="searchbar" className='hidden md:flex items-center text-gray-400 bg-gray-100 px-4 py-2 rounded-xl'>
          <BsSearch />
          <input type="text" placeholder='Search' className='ml-3 bg-gray-100' />
        </div>
        <div id="navmenus" className='flex items-center'>
          <Link href="/">
            <a>
              <BsHouseDoor className='text-2xl' />
            </a>
          </Link>
          <BsChatText className='text-2xl ml-6' />
          <BsPlusSquare className='text-2xl ml-6' />
          <BsCompass className='text-2xl ml-6' />
          <button id='profile_menu' className='group relative focus:outline-none'>
            <BsHeart className='text-2xl ml-6' />
            <div id="dropdown" className='bg-white border shadow-md rounded-md w-96 right-0 mt-2 absolute invisible group-focus:visible'>
              <ul className='text-left'>
                <li className='px-4 py-2 hover:bg-gray-50'>
                  <Link href="">
                    <a className='text-md flex items-center justify-between'>
                      <div className="flex items-center">
                        <img className='rounded-full mr-2' src='mina.jpg' width={42} height={42} />
                        <p>
                          <b className='mr-1'>mina_sr_my</b>
                          liked your post.
                        </p>
                      </div>
                      <img className='ml-2' src='post_1.jpg' width={42} height={42} />
                    </a>
                  </Link>
                </li>
                <li className='px-4 py-2 hover:bg-gray-50'>
                  <Link href="">
                    <a className='text-md flex items-center justify-between'>
                      <div className="flex items-center">
                        <img className='rounded-full mr-2' src='dahyun.jpg' width={42} height={42} />
                        <p>
                          <b className='mr-1'>dahhyunnee</b>
                          liked your post.
                        </p>
                      </div>
                      <img className='ml-2' src='post_1.jpg' width={42} height={42} />
                    </a>
                  </Link>
                </li>
                <li className='px-4 py-2 hover:bg-gray-50'>
                  <Link href="">
                    <a className='text-md flex items-center justify-between'>
                      <div className="flex items-center">
                        <img className='rounded-full mr-2' src='tzuyu.jpg' width={42} height={42} />
                        <p>
                          <b className='mr-1'>thinkaboutzu</b>
                          Commented: Awesome!
                        </p>
                      </div>
                      <img className='ml-2' src='post_1.jpg' width={42} height={42} />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </button>
          <button id='profile_menu' className='group relative focus:outline-none'>
            <img className='ml-6 rounded-full group-focus:border group-focus:border-black group-focus:p-0.5' src='mina.jpg' width={24} height={24} />
            <div id="dropdown" className='bg-white border shadow-md rounded-md w-64 right-0 mt-2 absolute invisible group-focus:visible'>
              <ul className='text-left'>
                <li className='px-4 py-2 hover:bg-gray-50 text-md flex items-center'>
                  <BsPersonCircle className='mr-4' />
                  <Link href="">
                    <a>Profile</a>
                  </Link>
                </li>
                <li className='px-4 py-2 hover:bg-gray-50 text-md flex items-center'>
                  <BsBookmark className='mr-4' />
                  <Link href="">
                    <a>Saved</a>
                  </Link>
                </li>
                <li className='px-4 py-2 hover:bg-gray-50 text-md flex items-center'>
                  <BsGearWide className='mr-4' />
                  <Link href="">
                    <a>Settings</a>
                  </Link>
                </li>
                <li className='px-4 py-2 hover:bg-gray-50 text-md flex items-center'>
                  <BsArrowRepeat className='mr-4' />
                  <Link href="">
                    <a>Switch accounts</a>
                  </Link>
                </li>
                <li className='px-4 py-2 hover:bg-gray-50 text-md flex items-center border-t'>
                  <Link href="">
                    <a>Log Out</a>
                  </Link>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}