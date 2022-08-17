import Navbar from "../components/navbar";

export default function Explore() {
  return (
    <>
      <div className="mb-10">
        <Navbar />
        <div id="main" className="container mx-auto lg:px-36 mt-2 p-1">
          <div className="explore_posts">
            <div id="post" className="w-4/12 inline-block p-1 cursor-pointer -mt-1" onClick={() => console.log("ter-click~")}>
              <img className='hover:border-2 border-black' src='post_2.jpg' />
            </div>
            <div id="post" className="w-4/12 inline-block p-1 cursor-pointer -mt-1">
              <img className='hover:border-2 border-black' src='background.jpg' />
            </div>
            <div id="post" className="w-4/12 inline-block p-1 cursor-pointer -mt-1">
              <img className='hover:border-2 border-black' src='mina.jpg' />
            </div>
            <div id="post" className="w-4/12 inline-block p-1 cursor-pointer -mt-1">
              <img className='hover:border-2 border-black' src='post_3.jpg' />
            </div>
            <div id="post" className="w-4/12 inline-block p-1 cursor-pointer -mt-1">
              <img className='hover:border-2 border-black' src='post_1.jpg' />
            </div>
            <div id="post" className="w-4/12 inline-block p-1 cursor-pointer -mt-1">
              <img className='hover:border-2 border-black' src='tzuyu.jpg' />
            </div>
            <div id="post" className="w-4/12 inline-block p-1 cursor-pointer -mt-1">
              <img className='hover:border-2 border-black' src='dahyun.jpg' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}