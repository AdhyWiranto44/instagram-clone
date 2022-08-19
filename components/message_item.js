import Link from "next/link";

export default function MessageItem(props) {
  return (
    <>
      <Link href="/direct/thinkaboutzu">
        <a id="message" className='flex justify-between items-center px-4 py-2 duration-300 hover:bg-gray-50'>
          <div className="flex items-center">
            <img className='rounded-full' src='tzuyu.jpg' width={56} height={56} />
            <div className="ml-4">
              <p className='text-sm'>thinkaboutzu</p>
              <p className='text-sm text-gray-400'>Pagii eoniee~ · <span>3h</span></p>
            </div>
          </div>
        </a>
      </Link>
    </>
  )
}