import Link from 'next/link'


export default function Profile() {
  return (
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
              <p className='text-sm font-bold'>dahyuneee</p>
            </a>
          </Link>
          <p className='text-sm text-gray-400'>Kim Dahyun</p>
        </div>
      </div>
      <Link href="#">
        <a className='text-sm text-blue-400 font-bold'>
          Switch
        </a>
      </Link>
    </div>
  )
}