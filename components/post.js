import {
  BsThreeDots,
  BsChevronLeft,
  BsChevronRight,
  BsHeart,
  BsChat,
  BsShare,
  BsBookmark,
  BsEmojiSmile,
} from 'react-icons/bs';
import Link from 'next/link';


export default function Post(props) {
  return (
    <>
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
            <button className='bg-gray-100 rounded-full p-1 text-gray-500 float-left ml-2 border shadow-sm duration-300 bg-opacity-80 hover:bg-opacity-100'>
              <BsChevronLeft className='focus:outline-none' />
            </button>
            <button className='bg-gray-100 rounded-full p-1 text-gray-500 float-right mr-2 border shadow-sm duration-300 bg-opacity-80 hover:bg-opacity-100'>
              <BsChevronRight className='focus:outline-none' />
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
    </>
  );
}