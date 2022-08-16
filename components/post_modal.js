import {
  BsXLg,
  BsImages,
} from 'react-icons/bs'


export default function PostModal() {
  return (
    <div id='post_modal' className="fixed z-10 top-0 w-full h-full bg-black bg-opacity-80 p-42 hidden">
      <button id='exit_button' className='m-6 right-0 rounded-full duration-300 hover:bg-gray-400 hover:bg-opacity-20 p-2 absolute'>
        <BsXLg className='text-white' />
      </button>
      <div className="flex h-screen justify-center items-center">
        <div className="bg-white rounded-xl w-full md:w-8/12 lg:w-4/12 h-4/12">
          <h1 className='text-center font-semibold py-3 border-b'>Create new post</h1>
          <div className="py-24">
            <BsImages className='mx-auto text-8xl text-slate-600' />
            <p className='text-2xl font-light text-center my-4'>Drag photos and videos here</p>
            <button className='block mx-auto bg-blue-500 px-3 py-1 rounded-md text-white text-sm'>Select from computer</button>
          </div>
        </div>
      </div>
    </div>
  );
}