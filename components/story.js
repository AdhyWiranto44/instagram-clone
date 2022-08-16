import Link from 'next/link';


export default function Story(props) {
  return (
    <>
      <div id="story" className={`flex mx-1`}>
        <Link href="#">
          <a>
            {
              props.story.story_posted ? (
                <div className='rounded-full' style={{ border: "3px", backgroundImage: "conic-gradient(#DD2A7B, #8134AF, #F58529, #FEDA77, #F58529, #DD2A7B)", padding: "3px" }}>
                  <img className='border border-white rounded-full mx-auto' src='dahyun.jpg' width={59} height={59} />
                </div>
              ) : (
                <div className='rounded-full bg-gray-300' style={{ border: "3px", padding: "3px" }}>
                  <img className='border border-white rounded-full mx-auto' src='dahyun.jpg' width={59} height={59} />
                </div>
              )
            }

            <p className='text-xs text-center'>
              {'bambang_sudarsono'.length > 10 ? 'bambang_sudarsono'.slice(0, 8) + '...' : 'bambang_sudarsono'}
            </p>
          </a>
        </Link>
      </div>
    </>
  );
}