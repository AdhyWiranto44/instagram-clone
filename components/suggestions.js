import Link from 'next/link'


export default function Suggestions() {
  return (
    <div id="suggestions" className='mb-6'>
      <div className="flex justify-between mb-2">
        <p className='text-sm font-bold text-gray-400'>Suggestions For You</p>
        <Link href="#">
          <a className='text-sm text-black font-bold'>
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
                  <p className='text-sm font-bold'>nayeonyny</p>
                </a>
              </Link>
              <p className='text-sm text-gray-400'>Im Nayeon</p>
            </div>
          </div>
          <Link href="#">
            <a className='text-sm text-blue-400 font-bold'>
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
                  <p className='text-sm font-bold'>thinkaboutzu</p>
                </a>
              </Link>
              <p className='text-sm text-gray-400'>Chou Tzuyu</p>
            </div>
          </div>
          <Link href="#">
            <a className='text-sm text-blue-400 font-bold'>
              Follow
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}