import {
  BsSearch,
  BsHouseDoor,
  BsChatText,
  BsPlusSquare,
  BsCompass,
  BsHeart
} from 'react-icons/bs';

export default function Navbar() {
  return (
    <div id='navbar' className='container-fluid px-4 lg:px-40 xl:px-56 py-2 sticky bg-white top-0 border-b flex justify-between items-center z-10'>
      <img src={`nav_logo.png`} width={110} />
      <div id="searchbar" className='hidden md:flex items-center text-gray-400 bg-gray-100 px-4 py-2 rounded-xl'>
        <BsSearch />
        <input type="text" placeholder='Search' className='ml-3 bg-gray-100' />
      </div>
      <div id="navmenus" className='flex items-center'>
        <BsHouseDoor className='text-2xl' />
        <BsChatText className='text-2xl ml-6' />
        <BsPlusSquare className='text-2xl ml-6' />
        <BsCompass className='text-2xl ml-6' />
        <BsHeart className='text-2xl ml-6' />
        <img className='ml-6 rounded-full' src='mina.jpg' width={24} height={24} />
      </div>
    </div>
  );
}