import Navbar from '../components/navbar';

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
          <div id="profile">
            profile
          </div>
          <div id="suggestions">
            suggestions
          </div>
        </div>
      </div>
    </>
  )
}
